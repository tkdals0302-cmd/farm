import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import { Events } from '../../../lib/analytics';
import { useSeo } from '../../../lib/useSeo';
import { articleJsonLd, breadcrumbJsonLd, injectJsonLd } from '../../../lib/structuredData';
import { SITE_URL, PAGE_META } from '../../../lib/seo';
import beforeImage from '../../../assets/images/info/kerafoxy/before.jpg';
import afterImage from '../../../assets/images/info/kerafoxy/after.jpg';
import introImage from '../../../assets/images/info/kerafoxy/kerafoxy.jpg';
import heroBgDesktop from '../../../assets/images/info/kerafoxy/bg.webp';
import heroBgMobile from '../../../assets/images/info/kerafoxy/bg_m.webp';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const HERO_META = [
  { k: '소재 분류', v: '에폭시 계열' },
  { k: '원산지', v: '이탈리아' },
  { k: '수명', v: '10년+' },
  { k: 'A/S', v: '2년', },
];

const INTRO_STATS = [
  { k: '압축강도', v: '75 N/mm²' },
  { k: '수축률', v: '≈ 0% (거의 없음)' },
  { k: '흡수율', v: '< 0.1 g/cm²' },
];

interface Benefit {
  idx: string;
  title: string;
  body: string;
  k: string;
  v: string;
  dark?: boolean;
}

const BENEFITS: Benefit[] = [
  {
    idx: '01',
    title: '강력한 내수성',
    body: '물에 강한 에폭시 성분으로 화장실·욕실의 지속적인 수분 노출에도 변형 없이 줄눈이 유지됩니다.',
    k: '흡수율',
    v: '< 0.1 g/cm²',
  },
  {
    idx: '02',
    title: '곰팡이·세균 차단',
    body: '항균 성분이 배합되어 습한 환경에서도 곰팡이와 세균이 번식하지 않아 위생적인 공간을 유지합니다.',
    k: '항균 등급',
    v: 'JIS Z 2801',
  },
  {
    idx: '03',
    title: '다양한 색상 선택',
    body: '화이트·베이지·그레이·블랙 등 20여 가지 색상으로 인테리어 스타일에 맞는 선택이 가능합니다.',
    k: '컬러 옵션',
    v: '20+ Colors',
  },
  {
    idx: '04',
    title: '월등한 내구성',
    body: '일반 시멘트 줄눈 대비 3~5배 긴 수명을 자랑하며, 균열·탈락 없이 깔끔한 마감이 오래 유지됩니다.',
    k: '예상 수명',
    v: '10년+',
  },
  {
    idx: '05',
    title: '손쉬운 유지관리',
    body: '표면이 매끄럽고 오염이 잘 스며들지 않아 간단한 청소만으로 항상 깨끗한 상태를 유지할 수 있습니다.',
    k: '청소',
    v: '솔 청소 가능',
  },
  {
    idx: '+',
    title: '대표 직접 시공. 2년 무상 A/S.',
    body: '소재의 차이만큼이나 중요한 것은 시공자의 손. 디테일라인은 모든 현장을 대표가 직접 마감합니다.',
    k: '누적',
    v: '2,000+ 세대',
    dark: true,
  },
];

interface CompareCol {
  name: string;
  tag: string;
  items: string[];
  hero?: boolean;
}

const COMPARE: CompareCol[] = [
  {
    name: '시멘트 줄눈',
    tag: 'Standard',
    items: [
      '시공 비용이 가장 저렴',
      '1~2년 후 변색·균열 발생',
      '곰팡이 번식에 취약',
      '주기적 재시공 필요',
    ],
  },
  {
    name: '케라폭시 줄눈',
    tag: 'Detailline 추천',
    hero: true,
    items: [
      '에폭시 결합 — 균열·변색 없음',
      '항균 처리 — 곰팡이 차단',
      '20+ 색상으로 인테리어 매칭',
      '10년+ 수명 · 2년 무상 A/S',
    ],
  },
  {
    name: '폴리우레아',
    tag: 'Heavy-duty',
    items: [
      '압도적 내구성·하중 강도',
      '주차장·산업 현장에 적합',
      '주거 인테리어엔 과도',
      '색상·질감 선택이 제한적',
    ],
  },
];

interface SpaceRow {
  code: string;
  ko: string;
  en: string;
  desc: string;
}

const SPACES: SpaceRow[] = [
  {
    code: 'SP · 01',
    ko: '화장실 · 욕실',
    en: 'Bath / Powder Room',
    desc: '가장 많이 사용하는 공간으로, 케라폭시의 내수성과 항균 기능이 극대화됩니다.',
  },
  {
    code: 'SP · 02',
    ko: '주방 · 싱크대 주변',
    en: 'Kitchen / Counter',
    desc: '음식물 오염과 물에 강해 주방 타일 줄눈에 이상적인 소재입니다.',
  },
  {
    code: 'SP · 03',
    ko: '베란다 · 발코니',
    en: 'Veranda / Balcony',
    desc: '자외선과 온도 변화에도 변색이 거의 없어 실외 공간에도 적합합니다.',
  },
  {
    code: 'SP · 04',
    ko: '현관 바닥',
    en: 'Entrance Floor',
    desc: '먼지와 오염이 많은 현관 바닥에서도 변색 없이 깔끔한 마감을 유지합니다.',
  },
  {
    code: 'SP · 05',
    ko: '수영장 · 목욕탕',
    en: 'Pool / Sauna',
    desc: '항시 수분에 노출되는 환경에서도 박리 없이 완벽한 방수 성능을 발휘합니다.',
  },
];

const BA_STATS = [
  { k: '시공 시간', v: '1일 (평형별 상이)' },
  { k: '건조 시간', v: '24시간 (완전 경화)' },
  { k: '사용 가능', v: '48시간 후 (물 사용 OK)' },
  { k: 'A/S', v: '2년 (무상)' },
];

interface RelatedItem {
  idx: string;
  href: string;
  title: string;
  desc: string;
}

const RELATED: RelatedItem[] = [
  {
    idx: 'No. 02 · Pricing',
    href: '/info/kerafoxy-price',
    title: '케라폭시 가격 안내',
    desc: '시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에.',
  },
  {
    idx: 'No. 03 · Product',
    href: '/info/kerafoxy-product',
    title: '케라폭시 계열 제품 소개',
    desc: '케라폭시·인터라컬러 등 주요 제품 라인업과 색상 가이드.',
  },
  {
    idx: 'No. 04 · Compare',
    href: '/info/comparison',
    title: '폴리우레아 vs 케라폭시',
    desc: '두 소재의 차이점과, 어떤 공간에 어떤 소재가 적합한지.',
  },
  {
    idx: 'No. 05 · Why',
    href: '/info/why-grout',
    title: '줄눈시공 하는 이유',
    desc: '위생·미관·내구성을 위한 필수 시공인 이유를 정리했습니다.',
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
  dark,
}: {
  num: string;
  ko: string;
  en: string;
  title: React.ReactNode;
  lede: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={`sec-head ${dark ? 'sec-head-dark' : ''}`}>
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
        <p className="sec-lede">{lede}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function KerafoxyPage() {
  const navigate = useNavigate();

  useSeo();

  useEffect(() => {
    const pathname = '/info/kerafoxy';
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
        { name: '케라폭시 줄눈이란?', url },
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

  return (
    <div className="page">
      <Navbar />

      {/* ===== 01 Hero ===== */}
      <header className="hero" data-screen-label="01 Hero">
        <div
          className="kf-hero-bg"
          style={{
            '--hero-img-d': `url(${heroBgDesktop})`,
            '--hero-img-m': `url(${heroBgMobile})`,
          } as React.CSSProperties}
          aria-hidden="true"
        />
        <div className="hero-inner">
          <div className="hero-eyebrow hero-eyebrow-light">Grout Knowledge · 01</div>
          <h1 className="hero-title">
            케라폭시 줄눈,
            <br />한 줄의 깊이 <em>완벽</em>의 기준.
          </h1>
          <p className="hero-lede">
            마페이의 80년 경험치를 흡수한 2액형 고성능 줄눈 소재.<br />
            일반 시멘트 줄눈과 무엇이 다른지, 왜 프리미엄 공간에 선택되는지 정리했습니다.
          </p>
          <ul className="hero-meta">
            {HERO_META.map((m) => (
              <li key={m.k}>
                <span className="hero-meta-k">{m.k}</span>
                <span className="hero-meta-v">{m.v}</span>
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
          <span className="crumb-here">케라폭시 줄눈이란?</span>
        </div>
      </nav>

      {/* ===== 02 Introduction ===== */}
      <section className="section" data-screen-label="02 Introduction">
        <div className="container">
          <div className="kf-intro">
            <div className="kf-intro-left">
              <div className="eyebrow">Introduction · 들어가며</div>
              <h2 className="kf-intro-title">
                케라폭시 줄눈,<br />왜 <em>프리미엄 소재</em>인가요?
              </h2>
              <p className="kf-intro-body">
                <em className="kf-hl">
                  케라폭시(Kerafoxy)는 에폭시 수지와 경화제를 혼합한 2액형 고성능 줄눈 소재
                </em>
                입니다. 시멘트 줄눈이 물과 함께 굳는 방식과 달리, 화학적 결합으로 경화되어
                본질적으로 다른 강도와 방수성을 만들어냅니다.
              </p>
              <p className="kf-intro-body">
                이탈리아 건설 소재 전문 브랜드가 개발한 케라폭시는 국내외 수많은 고급 주택·호텔·상업
                공간에서 사용되며 줄눈 소재로서의 우수성이 검증되어 있습니다.
              </p>
              <p className="kf-intro-body">
                특히 곰팡이가 쉽게 번식하는 욕실·주방 환경에서, 케라폭시는 일반 시멘트 줄눈 대비
                압도적인 위생 유지 효과를 보여줍니다.
              </p>
              <ul className="kf-intro-stats">
                {INTRO_STATS.map((s) => (
                  <li key={s.k}>
                    <span className="kf-stat-k">{s.k}</span>
                    <span className="kf-stat-v">{s.v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="kf-intro-right">
              <div className="kf-intro-photo">
                <img
                  src={introImage}
                  alt="케라폭시 줄눈 시공 디테일"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 03 Benefits ===== */}
      <section className="section bg-paper" data-screen-label="03 Benefits">
        <div className="container">
          <SecHead
            num="02"
            ko="5가지 핵심 장점"
            en="Benefits"
            title={
              <>
                일반 시멘트 줄눈과 비교할 수 없는 <em>성능 차이</em>.
              </>
            }
            lede="물·세균·시간이라는 줄눈의 세 가지 적에 대해, 케라폭시가 어떻게 대응하는지 정리했습니다."
          />
          <div className="kf-benefits-grid">
            {BENEFITS.map((b) => (
              <article key={b.idx} className={`kf-benefit ${b.dark ? 'kf-benefit-dark' : ''}`}>
                <div className="kf-benefit-head">
                  <span className="kf-benefit-lbl">Benefit / {b.idx}</span>
                  <span className="kf-benefit-idx">{b.idx}</span>
                </div>
                <h3 className="kf-benefit-title">
                  {b.title.split('\n').map((line, i) => (
                    <span key={i} className="kf-benefit-title-line">{line}</span>
                  ))}
                </h3>
                <p className="kf-benefit-body">{b.body}</p>
                <div className="kf-benefit-spec">
                  <span className="kf-spec-k">{b.k}</span>
                  <span className="kf-spec-v">{b.v}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Comparison table */}
          <div className="kf-compare">
            {COMPARE.map((c) => (
              <div key={c.name} className={`kf-compare-col ${c.hero ? 'kf-is-hero' : ''}`}>
                <div className="kf-compare-head">
                  <h3 className="kf-compare-name">{c.name}</h3>
                  <span className="kf-compare-tag">{c.tag}</span>
                </div>
                <ul className="kf-compare-list">
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 04 Spaces ===== */}
      <section className="section" data-screen-label="04 Spaces">
        <div className="container">
          <SecHead
            num="03"
            ko="적합한 공간"
            en="Spaces"
            title={
              <>
                어떤 공간에 케라폭시를 <em>시공</em>해야 할까요?
              </>
            }
            lede="물과 오염이 가까운 곳, 미관과 위생을 동시에 잡아야 하는 곳에 케라폭시가 강합니다."
          />
          <ul className="kf-spaces">
            {SPACES.map((s) => (
              <li key={s.code} className="kf-space-row">
                <span className="kf-space-code">{s.code}</span>
                <span className="kf-space-lbl">
                  <span className="kf-space-ko">{s.ko}</span>
                  <span className="kf-space-en">{s.en}</span>
                </span>
                <span className="kf-space-desc">{s.desc}</span>
                <span className="kf-space-more">
                  자세히 <span className="kf-space-arr">→</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 05 Before · After ===== */}
      <section className="section-dark" data-screen-label="05 Before · After">
        <div className="container">
          <SecHead
            dark
            num="04"
            ko="시공 전 · 후 비교"
            en="Before · After"
            title={
              <>
                한 번의 시공으로, 줄눈이 <em>인테리어의 점</em>이 됩니다.
              </>
            }
            lede="실제 시공 현장에서 발견되는 변화를 정리했습니다. 같은 공간, 다른 마감."
          />
          <div className="kf-ba-grid">
            <figure className="kf-ba-item">
              <div className="kf-ba-photo">
                <img src={beforeImage} alt="시공 전 — 시멘트 줄눈 상태" loading="lazy" />
                <span className="kf-ba-pill kf-ba-pill-light">Before</span>
              </div>
              <figcaption className="kf-ba-cap">
                <h4 className="kf-ba-cap-title">변색·균열·곰팡이 발생, 청소 어려움</h4>
                <p className="kf-ba-cap-body">
                  시간이 지나며 흡수된 수분과 오염으로 줄눈이 어둡게 변하고, 모서리 부근부터 균열이
                  나타납니다.
                </p>
              </figcaption>
            </figure>
            <figure className="kf-ba-item">
              <div className="kf-ba-photo">
                <img src={afterImage} alt="시공 후 — 케라폭시 줄눈 마감" loading="lazy" />
                <span className="kf-ba-pill kf-ba-pill-accent">After</span>
              </div>
              <figcaption className="kf-ba-cap">
                <h4 className="kf-ba-cap-title">매끄럽고 균일한 마감, 위생적인 깨끗함</h4>
                <p className="kf-ba-cap-body">
                  균일한 두께·색상으로 타일 사이의 선이 이어지며, 청소 한 번으로 새것처럼 유지됩니다.
                </p>
              </figcaption>
            </figure>
          </div>
          <ul className="kf-ba-bottom">
            {BA_STATS.map((s) => (
              <li key={s.k}>
                <span className="kf-ba-bot-k">{s.k}</span>
                <span className="kf-ba-bot-v">{s.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 06 Related ===== */}
      {(
        <section className="section bg-paper" data-screen-label="06 Related">
          <div className="container">
            <SecHead
              num="05"
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
              우리 집 줄눈에 맞는 답이 궁금하다면, <em>무료 견적</em>으로 시작하세요.
            </h3>
            <p className="cta-sub">평형 · 공간 · 색상을 알려주시면 24시간 내에 회신드립니다. 서울·경기·인천 줄눈시공 무료 견적 상담.</p>
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

      <style>{KF_CSS}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────────────────────────────────

const KF_CSS = `
/* page/container/section/hero/eyebrow/sec-/crumb/btn/cta-band/related/imgph는 모두 글로벌(src/index.css) 처리.
   페이지 고유: .kf-hero-bg(이미지 합성) + intro/benefit/compare/spaces/ba */

/* ===== Hero 배경 (페이지 고유 이미지 합성) ===== */
.kf-hero-bg {
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
  .kf-hero-bg {
    background:
      linear-gradient(180deg, rgba(20,16,12,.35) 0%, rgba(14,11,8,.78) 100%),
      radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
      var(--hero-img-m, none) center/cover no-repeat,
      linear-gradient(180deg, #251d14 0%, #18130e 100%);
  }
}
.kf-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.15), rgba(0,0,0,.55) 80%);
  pointer-events: none;
}

/* crumb/sec-*는 글로벌(src/index.css) 처리 */

/* ===== Intro ===== */
.kf-intro {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 80px;
  align-items: start;
}
@media (max-width: 820px) {
  .kf-intro { grid-template-columns: 1fr; gap: 40px; }
}
.kf-intro-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(28px, 3.2vw, 44px);
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 16px 0 28px;
  word-break: keep-all;
}
.kf-intro-body {
  font-size: 16px;
  line-height: 1.85;
  color: var(--ink-2);
  margin: 0 0 18px;
  word-break: keep-all;
}
.kf-hl {
  background: linear-gradient(180deg, transparent 62%, rgba(138,106,76,.18) 62%);
}
.kf-intro-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  padding: 22px 0 0;
  margin: 28px 0 0;
  border-top: 1px solid var(--line);
  gap: 0;
}
.kf-intro-stats li {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 18px;
}
.kf-intro-stats li + li {
  border-left: 1px solid var(--line);
  padding-left: 18px;
}
.kf-stat-k {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.kf-stat-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  color: var(--ink);
  font-variant-numeric: lining-nums;
}

/* ===== Intro photo ===== */
.kf-intro-photo {
  position: relative;
  width: 80%;
  margin-left: auto;
  aspect-ratio: 5 / 6;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--bg-2);
}
@media (max-width: 820px) {
  .kf-intro-photo { width: 100%; margin-left: 0; }
}
.kf-intro-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ===== Image placeholder ===== */
.imgph {
  position: relative;
  width: 100%;
  overflow: hidden;
  background:
    repeating-linear-gradient(
      135deg,
      rgba(28,25,22,.04) 0 1px,
      transparent 1px 24px
    ),
    radial-gradient(120% 80% at 30% 20%, rgba(255,255,255,.5), transparent 55%),
    linear-gradient(180deg, #ece5d8 0%, #d9cfbf 100%);
  border: 1px solid var(--line);
}
.imgph-dark {
  background:
    repeating-linear-gradient(
      135deg,
      rgba(255,255,255,.05) 0 1px,
      transparent 1px 24px
    ),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.25), transparent 60%),
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
  border-color: rgba(255,255,255,.1);
  color: var(--on-dark);
}
.ph-corner {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.imgph-dark .ph-corner { color: rgba(255,255,255,.55); }
.ph-label {
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
  color: var(--muted-2);
}
.imgph-dark .ph-label { color: rgba(255,255,255,.55); }
.ph-sq {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--accent);
}

/* ===== Benefits ===== */
.kf-benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  margin-bottom: 80px;
}
@media (max-width: 900px) {
  .kf-benefits-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .kf-benefits-grid { grid-template-columns: 1fr; }
}
.kf-benefit {
  background: var(--bg);
  padding: 40px 36px 36px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  transition: background .25s ease;
}
.kf-benefit:hover { background: var(--paper); }
.kf-benefit-dark {
  background: var(--ink);
  color: var(--on-dark);
}
.kf-benefit-dark:hover { background: var(--ink); }
.kf-benefit-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}
.kf-benefit-lbl {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}
.kf-benefit-dark .kf-benefit-lbl { color: #d9b790; }
.kf-benefit-idx {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-style: italic;
  font-size: 40px;
  line-height: 1;
  color: var(--accent);
  opacity: .35;
  letter-spacing: -0.02em;
  padding-right: 2px;
  flex-shrink: 0;
}
@media (max-width: 900px) {
  .kf-benefit-idx { font-size: 32px; }
}
.kf-benefit-dark .kf-benefit-idx { color: #d9b790; opacity: .55; }
.kf-benefit-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.35;
  letter-spacing: -0.005em;
  color: var(--ink);
  margin: 0 0 14px;
  display: flex;
  flex-direction: column;
}
.kf-benefit-dark .kf-benefit-title { color: #fff; }
.kf-benefit-title-line { display: block; }
.kf-benefit-body {
  font-size: 14px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0;
  min-height: calc(1.75em * 3);
}
.kf-benefit-dark .kf-benefit-body { color: rgba(255,255,255,.7); }
.kf-benefit-spec {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding-top: 18px;
  margin-top: auto;
  border-top: 1px solid var(--line);
}
.kf-benefit-dark .kf-benefit-spec { border-top-color: rgba(255,255,255,.14); }
.kf-spec-k {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.kf-benefit-dark .kf-spec-k { color: #d9b790; }
.kf-spec-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 16px;
  color: var(--ink);
  font-variant-numeric: lining-nums;
}
.kf-benefit-dark .kf-spec-v { color: #fff; }

/* ===== Compare ===== */
.kf-compare {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 1px solid var(--line);
}
@media (max-width: 820px) {
  .kf-compare { grid-template-columns: 1fr; }
}
.kf-compare-col {
  background: var(--bg);
  padding: 36px 32px;
  border-right: 1px solid var(--line);
}
.kf-compare-col:last-child { border-right: none; }
@media (max-width: 820px) {
  .kf-compare-col {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }
  .kf-compare-col:last-child { border-bottom: none; }
}
.kf-compare-col.kf-is-hero {
  background: var(--ink);
  color: var(--on-dark);
}
.kf-compare-head {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--line);
}
.kf-compare-col.kf-is-hero .kf-compare-head { border-bottom-color: rgba(255,255,255,.14); }
.kf-compare-name {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -0.005em;
  color: var(--ink);
  margin: 0;
}
.kf-compare-col.kf-is-hero .kf-compare-name { color: #fff; }
.kf-compare-tag {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.kf-compare-col.kf-is-hero .kf-compare-tag { color: #d9b790; }
.kf-compare-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.kf-compare-list li {
  font-size: 14px;
  line-height: 1.7;
  color: var(--ink-2);
  padding-left: 14px;
  position: relative;
}
.kf-compare-list li::before {
  content: '';
  position: absolute;
  left: 0; top: 0.75em;
  width: 6px; height: 1px;
  background: var(--muted-2);
}
.kf-compare-col.kf-is-hero .kf-compare-list li { color: rgba(255,255,255,.85); }
.kf-compare-col.kf-is-hero .kf-compare-list li::before { background: #d9b790; }

/* ===== Spaces ===== */
.kf-spaces { list-style: none; padding: 0; margin: 0; }
.kf-space-row {
  display: grid;
  grid-template-columns: 90px 1fr 2fr 100px;
  gap: 32px;
  align-items: center;
  padding: 32px 8px;
  border-bottom: 1px solid var(--line);
  transition: background .25s ease, padding .25s ease;
}
.kf-space-row:first-child { border-top: 1px solid var(--line); }
.kf-space-row:hover {
  background: var(--paper);
  padding-left: 28px;
}
.kf-space-row:hover .kf-space-more {
  color: var(--accent);
}
.kf-space-row:hover .kf-space-arr {
  transform: translateX(4px);
}
.kf-space-code {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.kf-space-lbl { display: flex; flex-direction: column; gap: 4px; }
.kf-space-ko {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 21px;
  color: var(--ink);
  letter-spacing: -0.005em;
}
.kf-space-en {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.kf-space-desc {
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--muted);
}
.kf-space-more {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
  text-align: right;
  transition: color .25s ease;
}
.kf-space-arr {
  display: inline-block;
  margin-left: 4px;
  transition: transform .3s ease;
}
@media (max-width: 820px) {
  .kf-space-row {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 24px 8px;
  }
  .kf-space-row:hover { padding-left: 18px; }
  .kf-space-code { display: none; }
  .kf-space-desc, .kf-space-more { grid-column: 1; }
  .kf-space-more { text-align: left; }
}

/* ===== Before · After ===== */
.kf-ba-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
@media (max-width: 820px) { .kf-ba-grid { grid-template-columns: 1fr; } }
.kf-ba-item { margin: 0; }
.kf-ba-photo {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #1f1a14;
  border: 1px solid rgba(255,255,255,.1);
}
.kf-ba-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.kf-ba-pill {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 999px;
}
.kf-ba-pill-light {
  background: rgba(255,255,255,.92);
  color: var(--ink);
}
.kf-ba-pill-accent {
  background: #d9b790;
  color: var(--dark);
}
.kf-ba-cap { padding: 22px 4px 0; }
.kf-ba-cap-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 1.4;
  color: var(--on-dark);
  margin: 0 0 8px;
}
.kf-ba-cap-body {
  font-size: 14px;
  line-height: 1.7;
  color: var(--dark-muted);
  margin: 0;
}
.kf-ba-bottom {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 32px 0 0;
  margin: 80px 0 0;
  border-top: 1px solid rgba(255,255,255,.14);
  gap: 0;
}
@media (max-width: 820px) {
  .kf-ba-bottom { grid-template-columns: repeat(2, 1fr); row-gap: 24px; }
}
.kf-ba-bottom li {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 18px;
  border-right: 1px solid rgba(255,255,255,.14);
}
.kf-ba-bottom li:last-child { border-right: none; }
.kf-ba-bottom li:not(:first-child) { padding-left: 18px; }
@media (max-width: 820px) {
  .kf-ba-bottom li:nth-child(2) { border-right: none; }
  .kf-ba-bottom li:nth-child(3) { padding-left: 0; }
}
.kf-ba-bot-k {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
}
.kf-ba-bot-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 18px;
  color: var(--on-dark);
  letter-spacing: -0.005em;
}
@media (max-width: 820px) {
  .kf-ba-bot-v { font-size: 16px; }
}

/* related/cta-band/btn은 글로벌(src/index.css) 처리 */
`;
