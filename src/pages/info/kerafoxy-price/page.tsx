import { useEffect, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import { Events } from '../../../lib/analytics';
import { useSeo } from '../../../lib/useSeo';
import { articleJsonLd, breadcrumbJsonLd, injectJsonLd } from '../../../lib/structuredData';
import { SITE_URL, PAGE_META } from '../../../lib/seo';
import heroBgDesktop from '../../../assets/images/info/kerafoxy-price/bg.webp';
import heroBgMobile from '../../../assets/images/info/kerafoxy-price/bg_m.webp';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const HERO_META = [
  { k: '기준 연도', v: '2026', small: 'VAT 별도' },
  { k: '단위', v: '만원', small: '1ea / 1줄' },
  { k: 'A/S', v: '2년', small: '무상' },
  { k: '결제', v: '현금 / 카드', small: '분할 OK' },
];

type PriceFilter = 'all' | 'bath' | 'living' | 'etc';
type PriceType = 'new' | 'old';

interface PriceRow {
  scope: string;
  new: [number | null, number | null];
  old: [number | null, number | null];
  note?: string;
}

interface PriceGroup {
  label: string;
  group: Exclude<PriceFilter, 'all'>;
  rows: PriceRow[];
}

const PRICING: PriceGroup[] = [
  {
    label: '화장실',
    group: 'bath',
    rows: [
      { scope: '욕조형 · 바닥만', new: [40, 30], old: [30, 25] },
      { scope: '욕조형 · 전체 (바닥+벽)', new: [90, 65], old: [75, 55] },
      { scope: '샤워부스형 · 바닥만', new: [45, 35], old: [38, 30] },
      { scope: '샤워부스형 · 전체 (바닥+벽)', new: [95, 70], old: [80, 60] },
    ],
  },
  {
    label: '거실',
    group: 'living',
    rows: [
      { scope: '바닥 · 20평대', new: [150, 100], old: [130, 90] },
      { scope: '바닥 · 30평대+', new: [null, null], old: [null, null], note: '별도 협의' },
    ],
  },
  {
    label: '현관',
    group: 'etc',
    rows: [{ scope: '바닥', new: [15, 5], old: [12, 4] }],
  },
  {
    label: '베란다',
    group: 'etc',
    rows: [{ scope: '바닥', new: [20, 15], old: [18, 13] }],
  },
  {
    label: '외부 화장실',
    group: 'etc',
    rows: [{ scope: '바닥', new: [30, 25], old: [28, 23] }],
  },
];

interface SetService {
  text: string;
}

interface SetPackage {
  num: string;
  name: string;
  sub: string;
  desc: string;
  newPrice: number;
  oldPrice: number;
  services: SetService[];
  emptyLabel?: string;
}

const SETS: SetPackage[] = [
  {
    num: '01',
    name: '세트 1',
    sub: '· 기본',
    desc: '화장실 바닥 ×2 + 현관',
    newPrice: 100,
    oldPrice: 120,
    services: [],
    emptyLabel: '기본 시공 패키지',
  },
  {
    num: '02',
    name: '세트 2',
    sub: '· 표준',
    desc: '세트 1 + 양조벽 or 샤워벽 3면 ×1곳',
    newPrice: 135,
    oldPrice: 155,
    services: [
      { text: '젠 다이 실리콘 ×2' },
      { text: '세면대 실리콘 ×2' },
    ],
  },
  {
    num: '03',
    name: '세트 3',
    sub: '· 완성',
    desc: '화장실 바닥 ×2 + 전체벽 ×2 + 현관',
    newPrice: 240,
    oldPrice: 260,
    services: [
      { text: '젠 다이 실리콘 ×2' },
      { text: '세면대 실리콘 ×2' },
      { text: '싱크볼 실리콘' },
      { text: '주방벽 케라폭시' },
    ],
  },
  {
    num: '04',
    name: '세트 4',
    sub: '· 확장',
    desc: '세트 2 + 세탁실',
    newPrice: 150,
    oldPrice: 170,
    services: [
      { text: '젠 다이 실리콘 ×2' },
      { text: '세면대 실리콘 ×2' },
      { text: '주방 실리콘' },
      { text: '싱크볼 실리콘' },
    ],
  },
];

interface Factor {
  n: string;
  name: string;
  en: string;
  desc: string;
  impact: string;
  impactClass: 'up' | 'down' | 'var';
}

const FACTORS: Factor[] = [
  {
    n: '01',
    name: '시공 면적',
    en: 'Area / Size',
    desc: '면적이 넓을수록 평단가가 내려가며, 협소한 공간은 작업 난이도로 인해 단가가 높아질 수 있습니다.',
    impact: '평단가 ↘',
    impactClass: 'down',
  },
  {
    n: '02',
    name: '타일 크기 · 줄눈 간격',
    en: 'Tile Size',
    desc: '타일이 작을수록 줄눈 길이가 길어져 작업 시간과 자재비가 증가합니다.',
    impact: '자재·시간 ↗',
    impactClass: 'up',
  },
  {
    n: '03',
    name: '기존 줄눈 상태',
    en: 'Existing Grout',
    desc: '기존 줄눈 제거가 필요한 경우 추가 작업비가 발생하며, 손상이 심할수록 비용이 올라갑니다.',
    impact: '+10만원~',
    impactClass: 'up',
  },
  {
    n: '04',
    name: '색상 선택',
    en: 'Color',
    desc: '특수 색상이나 다색 시공의 경우 단가가 다를 수 있으며, 컬러 매칭 작업이 추가됩니다.',
    impact: '옵션 변동',
    impactClass: 'var',
  },
  {
    n: '05',
    name: '지역 · 접근성',
    en: 'Location',
    desc: '지방이나 접근이 어려운 고층 건물의 경우 추가 출장비가 반영될 수 있습니다.',
    impact: '출장비 가산',
    impactClass: 'up',
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
    idx: 'No. 03 · Product',
    href: '/info/kerafoxy-product',
    title: '케라폭시 계열 제품 소개',
    desc: '주요 제품 라인업과 색상 가이드.',
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
    <div className="sec-head">
      <div className="sec-bar">
        <span className="sec-n">{num}</span>
        <span className="sec-rule"></span>
        <span className="sec-lbl">
          <span className="sec-ko">{ko}</span>
          <span className="sec-en">{en}</span>
        </span>
      </div>
      <div className="sec-body">
        <h2 className="sec-title">{title}</h2>
        {lede && <p className="sec-lede">{lede}</p>}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function KerafoxyPricePage() {
  const navigate = useNavigate();
  const [ptFilter, setPtFilter] = useState<PriceFilter>('all');
  const [ptType, setPtType] = useState<PriceType>('new');

  useSeo();

  useEffect(() => {
    const pathname = '/info/kerafoxy-price';
    const meta = PAGE_META[pathname];
    const url = `${SITE_URL}${pathname}`;

    const cleanupArticle = injectJsonLd(
      'article-jsonld',
      articleJsonLd({
        title: meta.title,
        description: meta.description,
        url,
        image: `${SITE_URL}/og_banner.jpg`,
        datePublished: '2026-03-01',
        dateModified: '2026-05-29',
      })
    );

    const cleanupCrumb = injectJsonLd(
      'breadcrumb-jsonld',
      breadcrumbJsonLd([
        { name: '홈', url: SITE_URL },
        { name: '줄눈 정보', url: `${SITE_URL}/#info` },
        { name: '케라폭시 가격 안내', url },
      ])
    );

    return () => {
      cleanupArticle();
      cleanupCrumb();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goQuote = () => {
    navigate('/#calc');
    setTimeout(() => {
      const el = document.querySelector('#calc');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const visibleGroups = useMemo(
    () => PRICING.filter((g) => ptFilter === 'all' || ptFilter === g.group),
    [ptFilter],
  );

  return (
    <div className="page">
      <Navbar />

      {/* ===== Hero ===== */}
      <header className="hero" data-screen-label="Hero">
        <div
          className="kp-hero-bg"
          style={{
            '--hero-img-d': `url(${heroBgDesktop})`,
            '--hero-img-m': `url(${heroBgMobile})`,
          } as React.CSSProperties}
          aria-hidden="true"
        />
        <div className="hero-inner">
          <div className="hero-eyebrow hero-eyebrow-light">Grout Knowledge · 02</div>
          <h1 className="hero-title">
            케라폭시 가격<em>,</em>
            <br />한 줄까지 <em>투명하게</em>.
          </h1>
          <p className="hero-lede">
            2026년 디테일라인 표준 가격표.<br />
            공간 · 평형 · 시공 범위에 따른 단가를 그대로 공개합니다.
          </p>
          <ul className="hero-meta">
            {HERO_META.map((m) => (
              <li key={m.k}>
                <span className="hero-meta-k">{m.k}</span>
                <span className="hero-meta-v">
                  {m.v} <small>{m.small}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ===== Breadcrumb ===== */}
      <nav className="crumb" aria-label="현재 위치">
        <div className="container crumb-inner">
          <Link to="/" className="crumb-item">홈</Link>
          <span className="crumb-sep">/</span>
          <span className="crumb-item">줄눈 정보</span>
          <span className="crumb-sep">/</span>
          <span className="crumb-here">케라폭시 가격 안내</span>
        </div>
      </nav>

      {/* ===== 01 Pricing Table ===== */}
      <section className="section" data-screen-label="01 Pricing Table">
        <div className="container">
          <SecHead
            num="01"
            ko="2026 가격 테이블"
            en="Pricing Table"
            title={
              <>
                공간별 시공 단가,<br />
                <em>그대로 공개</em>합니다.
              </>
            }
            lede="케라폭시·폴리우레아 두 소재의 표준 단가입니다. 현장 상황에 따라 ±10% 조정될 수 있습니다."
          />

          <div className="kp-pt-controls">
            <div className="kp-chips" role="tablist" aria-label="공간 필터">
              {(['all', 'bath', 'living', 'etc'] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`kp-chip ${ptFilter === f ? 'on' : ''}`}
                  onClick={() => setPtFilter(f)}
                  role="tab"
                  aria-selected={ptFilter === f}
                >
                  {f === 'all' ? '전체' : f === 'bath' ? '화장실' : f === 'living' ? '거실' : '현관·기타'}
                </button>
              ))}
            </div>
            <div className="kp-toggle" role="tablist" aria-label="건물 유형">
              {(['new', 'old'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  className={ptType === t ? 'on' : ''}
                  onClick={() => setPtType(t)}
                  role="tab"
                  aria-selected={ptType === t}
                >
                  {t === 'new' ? '신축' : '구축'}
                </button>
              ))}
            </div>
          </div>

          <div className="kp-ptable-wrap">
            <table className="kp-ptable">
              <caption className="sr-only">2026년 공간별 표준 단가 (만원, VAT 별도)</caption>
              <thead>
                <tr>
                  <th style={{ width: '160px' }}>공간</th>
                  <th>범위</th>
                  <th className="right" style={{ width: '200px' }}>케라폭시</th>
                  <th className="right" style={{ width: '200px' }}>폴리우레아</th>
                </tr>
              </thead>
              <tbody>
                {visibleGroups.flatMap((sp) =>
                  sp.rows.map((r, i) => {
                    const [k, p] = ptType === 'new' ? r.new : r.old;
                    return (
                      <tr key={`${sp.label}-${r.scope}`}>
                        <td className="kp-cell-space">{i === 0 ? sp.label : ''}</td>
                        <td className="kp-cell-scope">{r.scope}</td>
                        <td className="right">
                          {r.note ? (
                            <span className="kp-price note">{r.note}</span>
                          ) : (
                            <span className="kp-price kp">
                              {k}<small>만원</small>
                            </span>
                          )}
                        </td>
                        <td className="right">
                          {r.note ? (
                            <span className="kp-price note">{r.note}</span>
                          ) : (
                            <span className="kp-price">
                              {p}<small>만원</small>
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  }),
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile-only card list (same data, more readable on phones) */}
          <ul className="kp-pcards" aria-label="공간별 가격 카드">
            {visibleGroups.flatMap((sp) =>
              sp.rows.map((r) => {
                const [k, p] = ptType === 'new' ? r.new : r.old;
                return (
                  <li key={`m-${sp.label}-${r.scope}`} className="kp-pcard">
                    <div className="kp-pcard-info">
                      <span className="kp-pcard-space">{sp.label}</span>
                      <span className="kp-pcard-scope">{r.scope}</span>
                    </div>
                    <div className="kp-pcard-prices">
                      <div className="kp-pcard-pr">
                        <span className="kp-pcard-pr-lbl">케라폭시</span>
                        {r.note ? (
                          <span className="kp-pcard-pr-note">{r.note}</span>
                        ) : (
                          <span className="kp-pcard-pr-val kp">
                            {k}<small>만원</small>
                          </span>
                        )}
                      </div>
                      <div className="kp-pcard-pr">
                        <span className="kp-pcard-pr-lbl">폴리우레아</span>
                        {r.note ? (
                          <span className="kp-pcard-pr-note">{r.note}</span>
                        ) : (
                          <span className="kp-pcard-pr-val">
                            {p}<small>만원</small>
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                );
              }),
            )}
          </ul>

          <div className="kp-pt-foot">
            <div>* 모든 가격은 VAT 별도 · 자재비·인건비·출장비 포함 · 2년 무상 A/S (에폭시 계열)</div>
            <div>* 평형 30평 초과 또는 특수 상황은 별도 협의</div>
          </div>
        </div>
      </section>

      {/* ===== 02 Set Packages ===== */}
      <section className="section bg-paper" data-screen-label="02 Set Packages">
        <div className="container">
          <SecHead
            num="02"
            ko="세트 할인 패키지"
            en="Set Packages"
            title={
              <>
                4가지 패키지로,<br />
                한 번에 <em>합리적으로</em>.
              </>
            }
            lede="화장실·현관·벽 등 주요 공간을 묶어 시공하면 실리콘·주방벽 등 추가 서비스가 함께 제공됩니다. VAT 포함 · 34평 이하 · 300개 타일 기준."
          />

          <div className="kp-sets">
            {SETS.map((s) => (
              <div key={s.num} className="kp-set-card">
                <div className="kp-set-badge">— SET {s.num}</div>
                <div className="kp-set-title">
                  <h3 className="kp-set-name">{s.name}</h3>
                  <span className="kp-set-sub">{s.sub}</span>
                </div>
                <p className="kp-set-desc">{s.desc}</p>
                <div className="kp-set-prices">
                  <div className="kp-set-pr">
                    <span className="kp-set-pr-lbl">신축</span>
                    <span className="kp-set-pr-val">{s.newPrice}</span>
                    <span className="kp-set-pr-unit">만원</span>
                  </div>
                  <div className="kp-set-pr">
                    <span className="kp-set-pr-lbl">구축</span>
                    <span className="kp-set-pr-val">{s.oldPrice}</span>
                    <span className="kp-set-pr-unit">만원</span>
                  </div>
                </div>
                {s.services.length > 0 ? (
                  <div className="kp-set-services">
                    <div className="kp-set-s-lbl">+ 함께 제공</div>
                    <ul>
                      {s.services.map((sv) => (
                        <li key={sv.text}>{sv.text}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="kp-set-services-empty">{s.emptyLabel}</div>
                )}
              </div>
            ))}
          </div>

          <p className="kp-set-foot">
            ※ 가격은 <b>VAT 포함 · 34평 이하 · 300개 타일</b> 기준. 세트 외 추가 옵션은 상담 후 별도 산정됩니다.<br />
            ※ 세트 실리콘은 기존 실리콘 양호 기준이며, 제거 후 재시공 시 추가 비용이 발생합니다. 기존 줄눈 시공 이력이 있는 경우 <b>공간당 +10만원</b>이 추가됩니다.
          </p>
        </div>
      </section>

      {/* ===== 03 Cost Factors ===== */}
      <section className="section" data-screen-label="03 Cost Factors">
        <div className="container">
          <SecHead
            num="03"
            ko="시공 가격에 영향을 주는 요인"
            en="Cost Factors"
            title={
              <>
                같은 평형이라도,<br />
                견적이 <em>달라지는 이유</em>.
              </>
            }
            lede="현장의 디테일이 가격을 만듭니다. 자주 영향을 주는 다섯 가지 요인입니다."
          />

          <ul className="kp-factors">
            {FACTORS.map((f) => (
              <li key={f.n} className="kp-f-row">
                <span className="kp-f-n">{f.n}</span>
                <span className="kp-f-name">
                  {f.name}
                  <small>{f.en}</small>
                </span>
                <span className="kp-f-desc">{f.desc}</span>
                <span className={`kp-f-impact kp-f-impact--${f.impactClass}`}>{f.impact}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 04 Related ===== */}
      {(
        <section className="section bg-paper" data-screen-label="04 Related">
          <div className="container">
            <SecHead
              num="04"
              ko="관련 정보 더 보기"
              en="Related"
              title={
                <>
                  줄눈에 대해 알아야 할, 다른 <em>네 가지</em>.
                </>
              }
              lede="가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."
            />

            <div className="related-grid">
              {RELATED.map((r) => (
                <Link key={r.href} to={r.href} className="related-card">
                  <span className="related-idx">{r.idx}</span>
                  <h4 className="related-title">{r.title}</h4>
                  <p className="related-desc">{r.desc}</p>
                  <span className="related-more">
                    more <span className="related-arr">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA Band ===== */}
      <section className="cta-band" data-screen-label="CTA Band">
        <div className="container cta-row">
          <div className="cta-text">
            <h3 className="cta-title">
              정확한 시공 비용이 <em>궁금하신가요?</em>
            </h3>
            <p className="cta-sub">
              현장 상황에 따라 가격이 달라질 수 있습니다. 공간별 맞춤 견적을 안내해 드립니다. 서울·경기·인천 줄눈시공 무료 견적 상담.
            </p>
          </div>
          <div className="cta-actions">
            <button type="button" className="btn btn-primary" onClick={goQuote}>
              무료 견적 받기 <span className="btn-arr">→</span>
            </button>
            <a
              href="tel:010-8005-6674"
              onClick={() => Events.phoneClick('info_cta')}
              className="btn btn-ghost"
            >
              전화 상담 010-8005-6674
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{KP_CSS}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────────────────────────────────

const KP_CSS = `
/* page/container/section/hero/eyebrow/sec-/crumb/btn/cta-band/related/imgph는 글로벌(src/index.css) 처리.
   페이지 고유: .kp-hero-bg + chip/ptable/sets/cell-* 등 가격표 */

/* ===== Hero 배경 (페이지 고유 이미지 합성) ===== */
.kp-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(20,16,12,.25) 0%, rgba(20,16,12,.25) 35%, rgba(14,11,8,.95) 100%),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
    var(--hero-img-d, none) center top / 100% auto no-repeat,
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
@media (max-width: 720px) {
  .kp-hero-bg {
    background:
      linear-gradient(180deg, rgba(20,16,12,.35) 0%, rgba(14,11,8,.78) 100%),
      radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
      var(--hero-img-m, none) center/cover no-repeat,
      linear-gradient(180deg, #251d14 0%, #18130e 100%);
  }
}
.kp-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.15), rgba(0,0,0,.55) 80%);
  pointer-events: none;
}
/* ph-*/crumb/sec-*는 글로벌(src/index.css) 처리 */

/* ===== Pricing Table ===== */
.kp-pt-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
}
.kp-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.kp-chip {
  padding: 10px 18px;
  font-size: 13px;
  letter-spacing: -0.005em;
  border: 1px solid var(--line-strong);
  background: transparent;
  color: var(--ink-2);
  border-radius: 999px;
  cursor: pointer;
  transition: all .2s ease;
  font-family: inherit;
}
.kp-chip:hover { border-color: var(--ink); color: var(--ink); }
.kp-chip.on { background: var(--ink); color: var(--paper); border-color: var(--ink); }
.kp-toggle {
  display: inline-flex;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  padding: 3px;
  background: var(--bg);
}
.kp-toggle button {
  padding: 8px 18px;
  font-size: 13px;
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 999px;
  color: var(--muted);
  transition: all .2s ease;
  font-family: inherit;
}
.kp-toggle button.on { background: var(--ink); color: var(--paper); }

.kp-ptable-wrap {
  border: 1px solid var(--line);
  overflow: hidden;
}
.kp-ptable {
  width: 100%;
  border-collapse: collapse;
  background: var(--paper);
}
/* Mobile cards default hidden — only shown ≤720px */
.kp-pcards { display: none; }
@media (max-width: 720px) {
  .kp-ptable-wrap { display: none; }
  .kp-pcards {
    display: flex;
    flex-direction: column;
    gap: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    background: var(--paper);
    border: 1px solid var(--line);
  }
  .kp-pcard {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 16px;
    align-items: center;
    padding: 18px 18px;
    border-bottom: 1px solid var(--line);
  }
  .kp-pcard:last-child { border-bottom: 0; }
  .kp-pcard-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }
  .kp-pcard-space {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: var(--muted-2);
  }
  .kp-pcard-scope {
    font-size: 14.5px;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.35;
    letter-spacing: -0.005em;
    word-break: keep-all;
  }
  .kp-pcard-prices {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
  .kp-pcard-pr {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    padding: 0 4px 0 12px;
    border-left: 1px solid var(--line);
  }
  .kp-pcard-pr:first-child {
    border-left: 0;
    padding-left: 0;
  }
  .kp-pcard-pr-lbl {
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--muted-2);
  }
  .kp-pcard-pr-val {
    font-family: 'Noto Serif KR', serif;
    font-size: 18px;
    font-weight: 500;
    color: var(--ink);
    letter-spacing: -0.01em;
    line-height: 1.2;
  }
  .kp-pcard-pr-val.kp { color: var(--accent-deep); }
  .kp-pcard-pr-val small {
    font-family: 'Pretendard Variable', sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: var(--muted-2);
    margin-left: 2px;
    letter-spacing: 0;
  }
  .kp-pcard-pr-note {
    font-size: 13px;
    font-weight: 600;
    color: #c0625c;
    letter-spacing: -0.005em;
  }
}
.kp-ptable thead th {
  background: var(--ink);
  color: var(--paper);
  text-align: left;
  font-weight: 500;
  font-size: 12.5px;
  letter-spacing: 0.04em;
  padding: 18px 24px;
  border-right: 1px solid rgba(255,255,255,.08);
}
.kp-ptable thead th:last-child { border-right: 0; }
.kp-ptable thead th.right { text-align: right; }
.kp-ptable tbody td {
  padding: 14px 24px;
  border-bottom: 1px solid var(--line);
  border-right: 1px solid var(--line);
  font-size: 14.5px;
  color: var(--ink-2);
  vertical-align: middle;
}
.kp-ptable tbody tr:last-child td { border-bottom: 0; }
.kp-ptable tbody td:last-child { border-right: 0; }
.kp-ptable tbody td.right { text-align: right; }
.kp-ptable tbody tr { transition: background .2s ease; }
.kp-ptable tbody tr:hover { background: var(--bg); }
.kp-cell-space {
  font-family: 'Noto Serif KR', serif;
  font-size: 16px;
  color: var(--ink);
  letter-spacing: -0.01em;
}
.kp-cell-scope {
  color: var(--muted);
  font-size: 13.5px;
}
.kp-price {
  font-family: 'Noto Serif KR', serif;
  font-size: 18px;
  color: var(--ink);
  letter-spacing: -0.005em;
}
.kp-price.kp { color: var(--accent-deep); }
.kp-price small {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 11px;
  color: var(--muted-2);
  margin-left: 3px;
  letter-spacing: 0;
}
.kp-price.note {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 13px;
  color: var(--muted-2);
  font-weight: 400;
}
.kp-pt-foot {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 11.5px;
  color: var(--muted-2);
  letter-spacing: 0.02em;
}

/* ===== Set Packages ===== */
.kp-sets {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
@media (max-width: 1100px) {
  .kp-sets { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .kp-sets { grid-template-columns: 1fr; }
}
.kp-set-card {
  position: relative;
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 28px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 2px;
  transition: all .25s ease;
  min-height: 380px;
}
.kp-set-card:hover {
  border-color: var(--ink);
  transform: translateY(-2px);
  box-shadow: 0 12px 24px -16px rgba(28,25,22,.18);
}
.kp-set-badge {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}
.kp-set-title {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: -2px;
}
.kp-set-name {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.45;
  font-variant-numeric: lining-nums;
  margin: 0;
}
.kp-set-sub {
  font-size: 13.5px;
  color: var(--muted);
  font-weight: 500;
}
.kp-set-desc {
  font-size: 13.5px;
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
}
.kp-set-prices {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.kp-set-pr {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.kp-set-pr-lbl {
  font-size: 10.5px;
  letter-spacing: 0.12em;
  color: var(--muted-2);
  text-transform: uppercase;
  width: 32px;
  flex: 0 0 auto;
  font-weight: 500;
}
.kp-set-pr-val {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.35;
  color: var(--ink);
  font-variant-numeric: lining-nums;
}
.kp-set-pr-unit {
  font-size: 12px;
  color: var(--muted);
  margin-left: 4px;
}
.kp-set-services {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
}
.kp-set-s-lbl {
  font-size: 10.5px;
  letter-spacing: 0.12em;
  color: var(--accent);
  text-transform: uppercase;
  font-weight: 500;
}
.kp-set-services ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.kp-set-services li {
  font-size: 12.5px;
  color: var(--ink-2);
  line-height: 1.55;
  position: relative;
  padding-left: 10px;
}
.kp-set-services li::before {
  content: "·";
  position: absolute;
  left: 2px;
  color: var(--accent);
  font-weight: 700;
}
.kp-set-services-empty {
  margin-top: auto;
  font-size: 12.5px;
  color: var(--muted-2);
  font-style: italic;
  line-height: 1.55;
  padding: 8px 0;
}
.kp-set-foot {
  margin-top: 28px;
  color: var(--muted-2);
  font-size: 12.5px;
  font-style: italic;
  line-height: 1.7;
}
.kp-set-foot b {
  color: var(--ink-2);
  font-weight: 500;
  font-style: normal;
}

/* ===== Cost Factors ===== */
.kp-factors {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
}
.kp-f-row {
  display: grid;
  grid-template-columns: 84px 1.3fr 2fr 150px;
  gap: 32px;
  align-items: center;
  padding: 32px 8px;
  border-bottom: 1px solid var(--line);
  transition: all .25s ease;
}
.kp-f-row:hover {
  background: var(--paper);
  padding-left: 20px;
}
.kp-f-n {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 28px;
  color: var(--accent);
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1;
}
.kp-f-name {
  font-family: 'Noto Serif KR', serif;
  font-size: 22px;
  letter-spacing: -0.01em;
  color: var(--ink);
  font-weight: 500;
  line-height: 1.3;
  display: block;
}
.kp-f-name small {
  display: block;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 10.5px;
  color: var(--muted-2);
  letter-spacing: 0.12em;
  margin-top: 6px;
  text-transform: uppercase;
  font-weight: 500;
}
.kp-f-desc {
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.7;
}
.kp-f-impact {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  font-size: 11px;
  letter-spacing: 0.04em;
  border-radius: 999px;
  width: fit-content;
  justify-self: end;
  white-space: nowrap;
  font-weight: 500;
}
.kp-f-impact--up { background: rgba(138,106,76,.14); color: var(--accent-deep); }
.kp-f-impact--down { background: rgba(28,25,22,.06); color: var(--ink-2); }
.kp-f-impact--var { background: var(--bg-2); color: var(--muted); }
@media (max-width: 820px) {
  .kp-f-row {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 22px 4px;
  }
  .kp-f-row:hover { padding-left: 18px; }
  .kp-f-n { display: none; }
  .kp-f-name, .kp-f-desc, .kp-f-impact { grid-column: 1; }
  .kp-f-impact { justify-self: start; margin-top: 4px; }
}

/* related/cta-band/btn은 글로벌(src/index.css) 처리 */
`;
