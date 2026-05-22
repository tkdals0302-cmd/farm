import { useEffect, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import { Events } from '../../../lib/analytics';
import kerafoxyImage from '../../../assets/images/info/kerafoxy-product/kerafoxy.jpg';
import strikeevoImage from '../../../assets/images/info/kerafoxy-product/strikeevo.jpg';
import aspactoneImage from '../../../assets/images/info/kerafoxy-product/aspactone.jpg';
import polyureaImage from '../../../assets/images/info/kerafoxy-product/Polyurea.jpg';
import heroBgDesktop from '../../../assets/images/info/kerafoxy-product/bg.webp';
import heroBgMobile from '../../../assets/images/info/kerafoxy-product/bg_m.webp';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const HERO_META = [
  { k: '라인업', v: '4종', small: '에폭시 계열' },
  { k: '컬러', v: '20+', small: '표준 색상' },
  { k: '친환경', v: 'EC1+', small: 'GEV 인증' },
  { k: 'A/S', v: '2년', small: '무상' },
];

type ColorGroup = 'white' | 'earth' | 'gray' | 'dark';
type GroupFilter = 'all' | ColorGroup;
type TileShade = 'white' | 'gray' | 'dark';

interface Color {
  id: string;
  name: string;
  hex: string;
  group: ColorGroup;
  tagEn: string;
  light: boolean;
}

const COLORS: Color[] = [
  { id: 'pure', name: '순백', hex: '#f1ede4', group: 'white', tagEn: 'WHITE', light: true },
  { id: 'ivory', name: '아이보리', hex: '#e6dccb', group: 'white', tagEn: 'WHITE', light: true },
  { id: 'beige', name: '베이지', hex: '#d9c8a2', group: 'earth', tagEn: 'EARTH', light: true },
  { id: 'sand', name: '샌드', hex: '#bfa478', group: 'earth', tagEn: 'EARTH', light: false },
  { id: 'khaki', name: '카키', hex: '#8a7d5e', group: 'earth', tagEn: 'EARTH', light: false },
  { id: 'brown', name: '브라운', hex: '#6f4a2a', group: 'earth', tagEn: 'EARTH', light: false },
  { id: 'silver', name: '실버그레이', hex: '#c4c0bc', group: 'gray', tagEn: 'GRAY', light: true },
  { id: 'lightgray', name: '라이트그레이', hex: '#a8a59f', group: 'gray', tagEn: 'GRAY', light: false },
  { id: 'mediumgray', name: '미디엄그레이', hex: '#7a766f', group: 'gray', tagEn: 'GRAY', light: false },
  { id: 'darkgray', name: '다크그레이', hex: '#4a4842', group: 'dark', tagEn: 'DARK', light: false },
  { id: 'charcoal', name: '차콜', hex: '#2a2825', group: 'dark', tagEn: 'DARK', light: false },
  { id: 'black', name: '블랙', hex: '#16140f', group: 'dark', tagEn: 'DARK', light: false },
];

const GROUP_LABELS: Record<GroupFilter, string> = {
  all: '전체',
  white: '화이트 계열',
  earth: '베이지·어스 계열',
  gray: '그레이 계열',
  dark: '다크 계열',
};

const GROUP_TIPS: Record<ColorGroup, string> = {
  white: '타일과 통일감을 주어 깔끔하고 넓어 보이는 효과를 만듭니다. 오염은 비교적 잘 보이는 편이므로 청소 빈도가 높은 공간에 적합합니다.',
  earth: '원목·가구·내추럴 인테리어와 잘 어우러집니다. 오염 자국이 눈에 잘 띄지 않아 관리가 편합니다.',
  gray: '오염이 덜 보이고 유지관리가 편하며, 모던하고 차분한 분위기를 만듭니다. 대부분의 타일과 무난하게 어울립니다.',
  dark: '타일과 강한 대비를 만들어 그래픽한 인테리어 포인트가 됩니다. 좁은 공간에서는 답답하게 보일 수 있어 주의가 필요합니다.',
};

const TILE_SHADES: Record<TileShade, { label: string; hex: string }> = {
  white: { label: '화이트', hex: '#ece6dc' },
  gray: { label: '그레이', hex: '#b5b1a8' },
  dark: { label: '다크', hex: '#3a3530' },
};

interface ProductSpec {
  k: string;
  v: string;
}

interface Product {
  id: 'kerafoxy' | 'strikeevo' | 'aspactone' | 'polyurea';
  name: string;
  badge: { label: string; variant: 'premium' | 'standard' | 'hybrid' };
  desc: string;
  specs: ProductSpec[];
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'kerafoxy',
    name: '케라폭시',
    badge: { label: '프리미엄', variant: 'premium' },
    desc: '에폭시 수지+경화제 2액형의 대표 프리미엄 줄눈재. 화장실·욕실·주방 등 물 접촉 공간에서 가장 안정적인 성능을 보입니다.',
    specs: [
      { k: '베이스', v: '에폭시 + 경화제 2액형' },
      { k: '경화 시간', v: '24 ~ 48시간' },
      { k: '표면', v: '고광택' },
      { k: '추천 공간', v: '화장실 · 욕실 · 주방' },
      { k: '컬러', v: '20+ 색상' },
      { k: '수명', v: '10년+' },
    ],
    image: kerafoxyImage,
  },
  {
    id: 'strikeevo',
    name: '스트라이크 에보',
    badge: { label: '프리미엄', variant: 'premium' },
    desc: '3세대 에폭시 줄눈재로 무광·유광 선택이 가능하며, 균일한 컬러와 변색 저항성이 뛰어납니다. 프리미엄 인테리어에 자주 채택됩니다.',
    specs: [
      { k: '베이스', v: '에폭시 (이탈리아산)' },
      { k: '경화 시간', v: '24 ~ 72시간' },
      { k: '표면', v: '무광 / 유광 선택' },
      { k: '추천 공간', v: '화장실 · 주방 · 디자인 강조' },
      { k: '컬러', v: '30+ 색상' },
      { k: '수명', v: '10년+' },
    ],
    image: strikeevoImage,
  },
  {
    id: 'aspactone',
    name: '아스팍톤',
    badge: { label: '개선형', variant: 'premium' },
    desc: '무광·무펄·무수축·무황변을 구현한 신소재 에폭시. 기존 무광 에폭시의 단점을 보완해 어린이방·욕실에 추천됩니다.',
    specs: [
      { k: '베이스', v: '에폭시 개선형' },
      { k: '경화 시간', v: '24 ~ 36시간' },
      { k: '표면', v: '균일 무광' },
      { k: '추천 공간', v: '패턴 타일 · 디자인 욕실' },
      { k: '컬러', v: '25+ 색상' },
      { k: '수명', v: '10년+' },
    ],
    image: aspactoneImage,
  },
  {
    id: 'polyurea',
    name: '폴리우레아',
    badge: { label: '하이브리드', variant: 'hybrid' },
    desc: '시멘트 + 에폭시 하이브리드 줄눈재. 매트한 질감으로 내추럴 인테리어에 잘 맞고, 가격대가 합리적이라 비수계 공간에 추천됩니다.',
    specs: [
      { k: '베이스', v: '시멘트 + 에폭시' },
      { k: '경화 시간', v: '48 ~ 96시간' },
      { k: '표면', v: '매트' },
      { k: '추천 공간', v: '현관 · 베란다 · 거실 일부' },
      { k: '컬러', v: '16+ 색상' },
      { k: '수명', v: '5년+' },
    ],
    image: polyureaImage,
  },
];

interface RelatedItem {
  idx: string;
  href: string;
  title: string;
  desc: string;
}

const RELATED: RelatedItem[] = [
  {
    idx: 'No. 01 · Intro',
    href: '/info/kerafoxy',
    title: '케라폭시 줄눈이란?',
    desc: '에폭시 줄눈 소재의 특징과 장점을 정리했습니다.',
  },
  {
    idx: 'No. 02 · Pricing',
    href: '/info/kerafoxy-price',
    title: '케라폭시 가격 안내',
    desc: '시공 비용에 영향을 주는 요인과 표준 가격.',
  },
  {
    idx: 'No. 04 · Compare',
    href: '/info/comparison',
    title: '폴리우레아 vs 케라폭시',
    desc: '두 소재의 차이점과 적합한 공간 정리.',
  },
  {
    idx: 'No. 05 · Why',
    href: '/info/why-grout',
    title: '줄눈시공 하는 이유',
    desc: '위생·미관·내구성을 위한 필수 시공.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function SecHead({
  num,
  ko,
  en,
  title,
  lede,
}: {
  num: string;
  ko: string;
  en: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
}) {
  return (
    <div className="ep-sec-head">
      <div className="ep-sec-bar">
        <span className="ep-sec-n">{num}</span>
        <span className="ep-sec-rule"></span>
        <span className="ep-sec-lbl">
          <span className="ep-sec-ko">{ko}</span>
          <span className="ep-sec-en">{en}</span>
        </span>
      </div>
      <div className="ep-sec-body">
        <h2 className="ep-sec-title">{title}</h2>
        {lede && <p className="ep-sec-lede">{lede}</p>}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function EpoxyProductsPage() {
  const navigate = useNavigate();
  const [activeProd, setActiveProd] = useState<Product['id']>('kerafoxy');
  const [selectedColorId, setSelectedColorId] = useState<string>('silver');
  const [groupFilter, setGroupFilter] = useState<GroupFilter>('all');
  const [tileShade, setTileShade] = useState<TileShade>('white');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '에폭시 계열 제품 소개 — 디테일라인';
    const meta = document.querySelector('meta[name="description"]');
    const original = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      '케라폭시·스트라이크 에보·아스팍톤·폴리우레아 등 디테일라인이 시공하는 에폭시 계열 줄눈 제품 라인업과, 줄눈 색상을 미리 보는 인터랙티브 시뮬레이터.',
    );
    return () => {
      if (meta && original) meta.setAttribute('content', original);
    };
  }, []);

  const goQuote = () => {
    navigate('/#calc');
    setTimeout(() => {
      const el = document.querySelector('#calc');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const product = PRODUCTS.find((p) => p.id === activeProd)!;
  const selectedColor = COLORS.find((c) => c.id === selectedColorId)!;
  const visibleColors = useMemo(
    () => (groupFilter === 'all' ? COLORS : COLORS.filter((c) => c.group === groupFilter)),
    [groupFilter],
  );

  const stageStyle = {
    '--grout-color': selectedColor.hex,
    '--tile-color': TILE_SHADES[tileShade].hex,
  } as React.CSSProperties;

  return (
    <div className="ep-page">
      <Navbar />

      {/* ===== Hero ===== */}
      <header className="ep-hero" data-screen-label="Hero">
        <div
          className="ep-hero-bg"
          style={{
            '--hero-img-d': `url(${heroBgDesktop})`,
            '--hero-img-m': `url(${heroBgMobile})`,
          } as React.CSSProperties}
          aria-hidden="true"
        />

        <div className="ep-container ep-hero-inner">
          <div className="ep-eyebrow ep-eyebrow-light">Grout Knowledge · 03</div>
          <h1 className="ep-hero-title">
            내 공간에 맞는
            <br />에폭시 계열 <em>한 가지</em>.
          </h1>
          <p className="ep-hero-lede">
            디테일라인이 직접 시공하는 4종의 에폭시 계열 줄눈재와<br />
            줄눈 색상을 미리 확인할 수 있는 라이브 시뮬레이터를 제공합니다.
          </p>
          <ul className="ep-hero-meta">
            {HERO_META.map((m) => (
              <li key={m.k}>
                <span className="ep-meta-k">{m.k}</span>
                <span className="ep-meta-v">
                  {m.v} <small>{m.small}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ===== Breadcrumb ===== */}
      <nav className="ep-crumb" aria-label="현재 위치">
        <div className="ep-container ep-crumb-inner">
          <Link to="/" className="ep-crumb-item">홈</Link>
          <span className="ep-crumb-sep">/</span>
          <span className="ep-crumb-item">줄눈 정보</span>
          <span className="ep-crumb-sep">/</span>
          <span className="ep-crumb-here">에폭시 계열 제품 소개</span>
        </div>
      </nav>

      {/* ===== 01 Product Lineup ===== */}
      <section className="ep-section" data-screen-label="01 Product Lineup">
        <div className="ep-container">
          <SecHead
            num="01"
            ko="제품 라인업"
            en="Product Lineup"
            title={
              <>
                같은 에폭시여도,<br />
                <em>맞춤 선택</em>이 가능합니다.
              </>
            }
            lede="공간 · 표면 질감 · 색상 선호에 따라 4종의 제품 중 가장 적합한 것을 안내해 드립니다."
          />

          <div className="ep-prod-tabs" role="tablist" aria-label="제품 선택">
            {PRODUCTS.map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={activeProd === p.id}
                className={`ep-prod-tab ${activeProd === p.id ? 'on' : ''}`}
                onClick={() => setActiveProd(p.id)}
              >
                {p.name}
              </button>
            ))}
          </div>

          <div className="ep-prod-panel" role="tabpanel">
            <div className="ep-prod-image">
              <img src={product.image} alt={`${product.name} 시공 결과`} loading="lazy" />
            </div>
            <div className="ep-prod-info">
              <div className="ep-prod-head">
                <h3 className="ep-prod-name">{product.name}</h3>
                <span className={`ep-prod-badge ep-prod-badge--${product.badge.variant}`}>
                  {product.badge.label}
                </span>
              </div>
              <p className="ep-prod-desc">{product.desc}</p>
              <dl className="ep-prod-specs">
                {product.specs.map((s) => (
                  <div key={s.k} className="ep-prod-spec-row">
                    <dt>{s.k}</dt>
                    <dd>{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 02 Color Simulator ===== */}
      <section className="ep-section ep-bg-paper" data-screen-label="02 Color Simulator">
        <div className="ep-container">
          <SecHead
            num="02"
            ko="라이브 컬러 시뮬레이터"
            en="Live Color Simulator"
            title={
              <>
                시공 전에, 줄눈 색을 <em>미리 보세요</em>.
              </>
            }
            lede="아래 스와치를 클릭하면 좌측 타일 그리드의 줄눈 색이 즉시 바뀝니다. 타일 색·계열 필터로 다양한 조합을 빠르게 확인해 보세요."
          />

          <div className="ep-sim-grid">
            {/* LEFT — Tile preview */}
            <div className="ep-sim-left">
              <div className="ep-tile-preview">
                <div className="ep-tile-stage" style={stageStyle} aria-hidden="true">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <span key={i} className="ep-tile" />
                  ))}
                </div>
              </div>
              <div className="ep-tile-toggle" role="tablist" aria-label="타일 색상">
                {(Object.keys(TILE_SHADES) as TileShade[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    role="tab"
                    aria-selected={tileShade === s}
                    className={`ep-tile-toggle-btn ${tileShade === s ? 'on' : ''}`}
                    onClick={() => setTileShade(s)}
                  >
                    <span
                      className="ep-tile-toggle-dot"
                      style={{ '--td': TILE_SHADES[s].hex } as React.CSSProperties}
                    />
                    <span>{TILE_SHADES[s].label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT — Picker */}
            <div className="ep-sim-right">
              <div className="ep-group-tabs" role="tablist" aria-label="색상 계열">
                {(Object.keys(GROUP_LABELS) as GroupFilter[]).map((g) => (
                  <button
                    key={g}
                    type="button"
                    role="tab"
                    aria-selected={groupFilter === g}
                    className={`ep-group-tab ${groupFilter === g ? 'on' : ''}`}
                    onClick={() => setGroupFilter(g)}
                  >
                    {GROUP_LABELS[g]}
                  </button>
                ))}
              </div>

              <div className="ep-swatches">
                {visibleColors.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`ep-swatch ${selectedColorId === c.id ? 'is-active' : ''}`}
                    style={{ background: c.hex }}
                    data-light={c.light ? 'true' : 'false'}
                    onClick={() => setSelectedColorId(c.id)}
                    aria-label={`${c.name} · ${c.hex.toUpperCase()} · ${GROUP_LABELS[c.group]}`}
                    aria-pressed={selectedColorId === c.id}
                  />
                ))}
              </div>

              <div className="ep-sel-card" aria-live="polite">
                <div
                  className="ep-sel-chip"
                  style={{ '--c': selectedColor.hex } as React.CSSProperties}
                  aria-hidden="true"
                />
                <div className="ep-sel-info">
                  <h4 className="ep-sel-name">{selectedColor.name}</h4>
                  <div className="ep-sel-meta">
                    <span className="ep-sel-hex">{selectedColor.hex.toUpperCase()}</span>
                    <span className="ep-sel-tag">· {selectedColor.tagEn}</span>
                  </div>
                  <div className="ep-sel-group">{GROUP_LABELS[selectedColor.group]}</div>
                  <p className="ep-sel-tip">{GROUP_TIPS[selectedColor.group]}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Family tips */}
          <ul className="ep-tips-grid">
            {(Object.keys(GROUP_TIPS) as ColorGroup[]).map((g) => {
              const swatches = COLORS.filter((c) => c.group === g).slice(0, 3);
              return (
                <li key={g} className="ep-tip-cell">
                  <div className="ep-tip-swatches" aria-hidden="true">
                    {swatches.map((s) => (
                      <span key={s.id} style={{ background: s.hex }} />
                    ))}
                  </div>
                  <h4 className="ep-tip-name">{GROUP_LABELS[g]}</h4>
                  <p className="ep-tip-desc">{GROUP_TIPS[g]}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ===== 03 Related (temporarily hidden — flip `false` to `true` to restore) ===== */}
      {false && (
        <section className="ep-section" data-screen-label="03 Related">
          <div className="ep-container">
            <SecHead
              num="03"
              ko="관련 정보 더 보기"
              en="Related"
              title={
                <>
                  줄눈에 대해 알아야 할, 다른 <em>네 가지</em>.
                </>
              }
              lede="가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."
            />
            <div className="ep-related-grid">
              {RELATED.map((r) => (
                <Link key={r.href} to={r.href} className="ep-related-card">
                  <span className="ep-related-idx">{r.idx}</span>
                  <h4 className="ep-related-title">{r.title}</h4>
                  <p className="ep-related-desc">{r.desc}</p>
                  <span className="ep-related-more">
                    more <span className="ep-related-arr">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA Band ===== */}
      <section className="ep-cta-band" data-screen-label="CTA Band">
        <div className="ep-container ep-cta-row">
          <div className="ep-cta-text">
            <h3 className="ep-cta-title">
              어떤 제품·색이 우리 집에 맞을지 <em>고민되신다면</em>?
            </h3>
            <p className="ep-cta-sub">
              공간 사진 한 장만 보내주시면, 가장 잘 어울리는 제품과 색을 추천해 드립니다.
            </p>
          </div>
          <div className="ep-cta-actions">
            <button type="button" className="ep-btn ep-btn-primary" onClick={goQuote}>
              무료 견적 받기 <span className="ep-btn-arr">→</span>
            </button>
            <a
              href="tel:010-8005-6674"
              onClick={() => Events.phoneClick('info_cta')}
              className="ep-btn ep-btn-ghost"
            >
              전화 상담 010-8005-6674
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{EP_CSS}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────────────────────────────────

const EP_CSS = `
.ep-page {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}
.ep-page ::selection { background: var(--accent); color: #fff; }

.ep-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 32px;
}
@media (max-width: 720px) {
  .ep-container { padding: 0 20px; }
}

.ep-section {
  padding: 120px 0;
  border-top: 1px solid var(--line);
}
.ep-bg-paper { background: var(--paper); }
@media (max-width: 720px) {
  .ep-section { padding: 72px 0; }
}

.ep-eyebrow {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.ep-eyebrow-light { color: #d9b790; }

.ep-page em {
  font-style: normal;
  color: var(--accent);
}
.ep-hero em { color: #e3c5a3; }

/* ===== Hero ===== */
.ep-hero {
  position: relative;
  padding: 168px 0 84px;
  overflow: hidden;
  isolation: isolate;
  color-scheme: dark;
}
@media (max-width: 720px) {
  .ep-hero { padding: 120px 0 64px; }
}
.ep-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    /* Bottom fade — light at top, strong dark near bottom so image blends into dark */
    linear-gradient(180deg, rgba(20,16,12,.25) 0%, rgba(20,16,12,.25) 35%, rgba(14,11,8,.95) 100%),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
    /* Width-anchored, top-aligned — image fills full width from the top */
    var(--hero-img-d, none) center top / 100% auto no-repeat,
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
@media (max-width: 720px) {
  /* Mobile uses dedicated mobile-optimized image with cover */
  .ep-hero-bg {
    background:
      linear-gradient(180deg, rgba(20,16,12,.35) 0%, rgba(14,11,8,.78) 100%),
      radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
      var(--hero-img-m, none) center/cover no-repeat,
      linear-gradient(180deg, #251d14 0%, #18130e 100%);
  }
}
.ep-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.15), rgba(0,0,0,.55) 80%);
  pointer-events: none;
}
.ep-ph-corner {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 9.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.4);
  z-index: 1;
}
.ep-ph-label {
  position: absolute;
  left: 18px;
  bottom: 16px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255,255,255,.4);
  z-index: 1;
}
.ep-ph-sq {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--accent);
}
.ep-hero-inner { position: relative; z-index: 1; }
.ep-hero-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(36px, 5vw, 68px);
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #fff;
  margin: 14px 0 22px;
  max-width: 24ch;
  word-break: keep-all;
}
.ep-hero-lede {
  font-size: 15.5px;
  line-height: 1.75;
  color: rgba(255,255,255,.78);
  max-width: 56ch;
  margin: 0;
}
.ep-hero-meta {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 0;
  margin: 48px 0 0;
  border-top: 1px solid rgba(255,255,255,.16);
}
.ep-hero-meta li {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 22px 22px 0;
  border-right: 1px solid rgba(255,255,255,.16);
}
.ep-hero-meta li:last-child { border-right: none; }
.ep-hero-meta li:not(:first-child) { padding-left: 22px; }
.ep-meta-k {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
}
.ep-meta-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 17px;
  color: #fff;
  letter-spacing: -0.005em;
}
.ep-meta-v small {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,.55);
  margin-left: 6px;
  letter-spacing: 0;
}
@media (max-width: 720px) {
  .ep-hero-meta { grid-template-columns: repeat(2, 1fr); }
  .ep-hero-meta li:nth-child(2) { border-right: none; }
  .ep-hero-meta li:nth-child(3) { padding-left: 0; }
  .ep-hero-meta li:nth-child(3),
  .ep-hero-meta li:nth-child(4) {
    border-top: 1px solid rgba(255,255,255,.16);
  }
}

/* ===== Breadcrumb ===== */
.ep-crumb {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.ep-crumb-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--muted-2);
}
@media (max-width: 720px) {
  .ep-crumb-inner { padding: 14px 20px; }
}
.ep-crumb-item {
  color: var(--muted-2);
  text-decoration: none;
  transition: color .2s ease;
}
.ep-crumb-item:hover { color: var(--accent); }
.ep-crumb-sep { opacity: .4; }
.ep-crumb-here { color: var(--ink); }

/* ===== Section Head ===== */
.ep-sec-head { margin-bottom: 56px; }
@media (max-width: 820px) {
  .ep-sec-head { margin-bottom: 36px; }
}
.ep-sec-bar {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 22px;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--line);
}
.ep-sec-n {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: var(--accent);
  font-variant-numeric: lining-nums;
}
.ep-sec-rule {
  flex: 0 0 56px;
  height: 1px;
  background: var(--accent);
  opacity: .6;
}
.ep-sec-lbl {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.ep-sec-ko { color: var(--ink-2); }
.ep-sec-en { color: var(--muted-2); margin-left: 10px; }
.ep-sec-body {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: end;
}
@media (max-width: 820px) {
  .ep-sec-body { grid-template-columns: 1fr; gap: 16px; align-items: start; }
}
.ep-sec-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(30px, 3.6vw, 48px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  margin: 0;
  word-break: keep-all;
}
.ep-sec-lede {
  font-size: 16px;
  line-height: 1.75;
  color: var(--muted);
  max-width: 48ch;
  margin: 0;
}

/* ===== Product Lineup ===== */
.ep-prod-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}
.ep-prod-tab {
  padding: 12px 22px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.005em;
  border: 1px solid var(--line-strong);
  background: transparent;
  color: var(--ink-2);
  border-radius: 999px;
  cursor: pointer;
  transition: all .2s ease;
}
.ep-prod-tab:hover { border-color: var(--ink); color: var(--ink); }
.ep-prod-tab.on { background: var(--ink); color: var(--paper); border-color: var(--ink); }

.ep-prod-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 40px;
  align-items: start;
}
@media (max-width: 900px) {
  .ep-prod-panel { grid-template-columns: 1fr; padding: 28px 24px; gap: 28px; }
}
.ep-prod-image {
  position: relative;
  aspect-ratio: 16 / 13;
  overflow: hidden;
  background: var(--bg-2);
  border: 1px solid var(--line);
}
.ep-prod-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.ep-prod-info { display: flex; flex-direction: column; gap: 18px; }
.ep-prod-head {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.ep-prod-name {
  font-family: 'Noto Serif KR', serif;
  font-size: clamp(24px, 2.6vw, 32px);
  font-weight: 500;
  letter-spacing: -0.015em;
  margin: 0;
  color: var(--ink);
}
.ep-prod-badge {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 999px;
}
.ep-prod-badge--premium { background: var(--accent); color: #fff; }
.ep-prod-badge--standard { background: var(--bg-2); color: var(--ink-2); border: 1px solid var(--line-strong); }
.ep-prod-badge--hybrid { background: #3a3833; color: #d9b790; }
.ep-prod-desc {
  font-size: 15px;
  line-height: 1.8;
  color: var(--muted);
  margin: 0;
  word-break: keep-all;
}
.ep-prod-specs {
  margin: 4px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid var(--line);
}
.ep-prod-spec-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
}
.ep-prod-spec-row:last-child { border-bottom: 0; }
.ep-prod-spec-row dt {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
  align-self: center;
}
.ep-prod-spec-row dd {
  margin: 0;
  font-family: 'Noto Serif KR', serif;
  font-size: 15px;
  font-weight: 400;
  color: var(--ink);
  letter-spacing: -0.005em;
}

/* ===== Color Simulator ===== */
.ep-sim-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 40px;
  align-items: start;
}
@media (max-width: 980px) {
  .ep-sim-grid { grid-template-columns: 1fr; }
}
.ep-sim-left { display: flex; flex-direction: column; gap: 20px; }
.ep-tile-preview {
  position: relative;
  aspect-ratio: 6 / 5;
  overflow: hidden;
  background: var(--bg);
  border: 1px solid var(--line);
  box-shadow: 0 24px 64px -32px rgba(28,25,22,.32);
}
.ep-tile-preview::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 80% at 30% 0%, rgba(255,255,255,.08), transparent 60%);
  pointer-events: none;
  z-index: 2;
}
.ep-tile-stage {
  position: absolute;
  inset: 0;
  background: var(--grout-color, #c4c0bc);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 5px;
  padding: 5px;
  transition: background .35s ease;
}
.ep-tile {
  position: relative;
  background: var(--tile-color, #ece6dc);
  transition: background .35s ease;
  overflow: hidden;
}
.ep-tile::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,.18) 0%, transparent 35%);
  pointer-events: none;
}
.ep-tile::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(60% 40% at 20% 100%, rgba(255,255,255,.06), transparent 70%);
  pointer-events: none;
}

/* Tile toggle */
.ep-tile-toggle {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.ep-tile-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px 8px 8px;
  font-family: inherit;
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: -0.005em;
  border: 1px solid var(--line-strong);
  background: var(--paper);
  color: var(--ink-2);
  border-radius: 999px;
  cursor: pointer;
  transition: all .2s ease;
}
.ep-tile-toggle-btn:hover { border-color: var(--ink); }
.ep-tile-toggle-btn.on { background: var(--ink); color: var(--paper); border-color: var(--ink); }
.ep-tile-toggle-dot {
  width: 18px;
  height: 18px;
  background: var(--td);
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 50%;
  display: inline-block;
}

/* Group filter */
.ep-group-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
}
.ep-group-tab {
  padding: 8px 14px;
  font-family: inherit;
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: -0.005em;
  border: 1px solid var(--line-strong);
  background: transparent;
  color: var(--ink-2);
  border-radius: 999px;
  cursor: pointer;
  transition: all .2s ease;
}
.ep-group-tab:hover { border-color: var(--ink); color: var(--ink); }
.ep-group-tab.on { background: var(--ink-2); color: var(--paper); border-color: var(--ink-2); }

/* Swatches */
.ep-swatches {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  margin-bottom: 24px;
}
@media (max-width: 560px) {
  .ep-swatches { grid-template-columns: repeat(4, 1fr); }
}
.ep-swatch {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
  transition: transform .15s ease, box-shadow .15s ease;
}
.ep-swatch:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px -4px rgba(28,25,22,.18);
}
.ep-swatch.is-active {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
.ep-swatch.is-active::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 6px;
  border-left: 1.8px solid #fff;
  border-bottom: 1.8px solid #fff;
  transform: translate(-50%, -65%) rotate(-45deg);
  mix-blend-mode: difference;
  filter: invert(1);
}
.ep-swatch[data-light="true"].is-active::after {
  filter: none;
  border-color: #1c1916;
}

/* Selected color card */
.ep-sel-card {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 18px;
  align-items: start;
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 20px;
}
.ep-sel-chip {
  width: 64px;
  height: 64px;
  background: var(--c, var(--bg-2));
  border: 1px solid rgba(0,0,0,.08);
  border-radius: 4px;
}
.ep-sel-info { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.ep-sel-name {
  font-family: 'Noto Serif KR', serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin: 0;
  color: var(--ink);
}
.ep-sel-meta {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-2);
  font-weight: 500;
}
.ep-sel-hex { color: var(--ink-2); }
.ep-sel-group {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-top: 4px;
}
.ep-sel-tip {
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--muted);
  margin: 8px 0 0;
  word-break: keep-all;
}

/* Tips grid */
.ep-tips-grid {
  list-style: none;
  padding: 0;
  margin: 56px 0 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
@media (max-width: 820px) {
  .ep-tips-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .ep-tips-grid { grid-template-columns: 1fr; }
}
.ep-tip-cell {
  background: var(--bg);
  border: 1px solid var(--line);
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ep-tip-swatches {
  display: inline-flex;
  gap: 4px;
}
.ep-tip-swatches span {
  width: 18px;
  height: 18px;
  border-radius: 3px;
  border: 1px solid rgba(0,0,0,.08);
  display: inline-block;
}
.ep-tip-name {
  font-family: 'Noto Serif KR', serif;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.005em;
  margin: 4px 0 0;
  color: var(--ink);
}
.ep-tip-desc {
  font-size: 13px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
  word-break: keep-all;
}

/* ===== Related ===== */
.ep-related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 32px;
}
@media (max-width: 900px) {
  .ep-related-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .ep-related-grid { grid-template-columns: 1fr; }
}
.ep-related-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 32px 28px 28px;
  min-height: 220px;
  color: inherit;
  text-decoration: none;
  transition: background .25s ease, color .25s ease, border-color .25s ease;
}
.ep-related-card:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.ep-related-idx {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.ep-related-card:hover .ep-related-idx { color: #d9b790; }
.ep-related-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.35;
  letter-spacing: -0.01em;
  margin: 0;
  color: var(--ink);
}
.ep-related-card:hover .ep-related-title { color: #fff; }
.ep-related-desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--muted);
  margin: 0;
}
.ep-related-card:hover .ep-related-desc { color: rgba(255,255,255,.65); }
.ep-related-more {
  margin-top: auto;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted-2);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.ep-related-card:hover .ep-related-more { color: #d9b790; }
.ep-related-arr { transition: transform .3s ease; }
.ep-related-card:hover .ep-related-arr { transform: translateX(4px); }

/* ===== CTA Band ===== */
.ep-cta-band {
  background: var(--bg-2);
  border-top: 1px solid var(--line);
  padding: 72px 0;
}
@media (max-width: 720px) {
  .ep-cta-band { padding: 56px 0; }
}
.ep-cta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}
.ep-cta-text { display: flex; flex-direction: column; gap: 8px; flex: 1 1 380px; }
.ep-cta-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(26px, 3vw, 38px);
  letter-spacing: -0.015em;
  line-height: 1.35;
  margin: 0;
  word-break: keep-all;
}
.ep-cta-sub {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}
.ep-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-end;
}
@media (max-width: 820px) {
  .ep-cta-actions {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
  }
  .ep-cta-actions .ep-btn {
    flex: 1 1 0;
    min-width: 0;
    padding: 14px 12px;
    font-size: 13px;
    white-space: nowrap;
    justify-content: center;
  }
}

/* ===== Buttons ===== */
.ep-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 22px;
  border-radius: 2px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.005em;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  transition: background .25s ease, color .25s ease, border-color .25s ease;
}
.ep-btn-arr { transition: transform .3s ease; }
.ep-btn:hover .ep-btn-arr { transform: translateX(4px); }
.ep-btn-primary {
  background: var(--ink);
  color: var(--paper);
}
.ep-btn-primary:hover { background: var(--accent-deep); }
.ep-btn-ghost {
  background: transparent;
  border: 1px solid var(--line-strong);
  color: var(--ink);
}
.ep-btn-ghost:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
`;
