import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import { Events } from '../../../lib/analytics';
import { useSeo } from '../../../lib/useSeo';
import { articleJsonLd, breadcrumbJsonLd, injectJsonLd } from '../../../lib/structuredData';
import { SITE_URL, PAGE_META } from '../../../lib/seo';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

interface Row {
  k: string;
  kerafoxy: React.ReactNode;
  polyurea: React.ReactNode;
}

const Stars = ({ n, best }: { n: number; best?: boolean }) => (
  <>
    <span className="cp-stars">
      {'★'.repeat(n)}
      <span className="off">{'★'.repeat(5 - n)}</span>
    </span>
    <span className={`cp-rating ${best ? 'best' : ''}`}>
      {best ? '탁월' : n >= 4 ? '우수' : n >= 3 ? '보통' : '낮음'}
    </span>
  </>
);

const ROWS: Row[] = [
  {
    k: '소재 성분',
    kerafoxy: (
      <>
        에폭시 수지 <span className="cp-plus">+</span> 경화제{' '}
        <span className="cp-rating">2액형</span>
      </>
    ),
    polyurea: (
      <>
        폴리우레아 수지 <span className="cp-rating">1액형</span>
      </>
    ),
  },
  {
    k: '경화 방식',
    kerafoxy: (
      <>
        화학 반응 경화 <span className="cp-rating">수동 혼합</span>
      </>
    ),
    polyurea: (
      <>
        자연 경화 <span className="cp-rating">습기·공기 반응</span>
      </>
    ),
  },
  { k: '내수성', kerafoxy: <Stars n={5} best />, polyurea: <Stars n={3} /> },
  { k: '항균성', kerafoxy: <Stars n={5} best />, polyurea: <Stars n={3} /> },
  {
    k: '내구성 · 수명',
    kerafoxy: (
      <span className="cp-num">
        10~15<small>년 이상</small>
      </span>
    ),
    polyurea: (
      <span className="cp-num">
        2~4<small>년</small>
      </span>
    ),
  },
  {
    k: '탄성 · 신축성',
    kerafoxy: <Stars n={4} />,
    polyurea: <Stars n={5} best />,
  },
  {
    k: '시공 난이도',
    kerafoxy: '전문 기술 필요',
    polyurea: '비교적 간단',
  },
  {
    k: '가격',
    kerafoxy: (
      <span className="cp-num">
        평균 30<small>만원</small>
      </span>
    ),
    polyurea: (
      <span className="cp-num">
        평균 20<small>만원</small>
      </span>
    ),
  },
  {
    k: '색상 선택',
    kerafoxy: (
      <span className="cp-num">
        16<small>여 가지</small>
      </span>
    ),
    polyurea: (
      <span className="cp-num">
        20<small>여 가지</small>
      </span>
    ),
  },
  {
    k: '적합 환경',
    kerafoxy: (
      <>
        욕실 · 주방 · 수영장 등 <strong className="cp-strong">수분 多</strong>
      </>
    ),
    polyurea: (
      <>
        베란다 · 외벽 등 <strong className="cp-strong">진동·충격 多</strong>
      </>
    ),
  },
];

interface RecoItem {
  text: string;
}

interface RecoCard {
  variant: 'kp' | 'pu';
  title: string;
  sub: string;
  items: RecoItem[];
}

const RECO: RecoCard[] = [
  {
    variant: 'kp',
    title: '케라폭시 줄눈 추천',
    sub: 'For Home · Indoor',
    items: [
      { text: '화장실·욕실·주방처럼 상시 수분에 노출되는 공간' },
      { text: '위생이 특히 중요한 가정 (어린이, 노약자)' },
      { text: '오랫동안 재시공 없이 사용하고 싶은 경우' },
      { text: '다양한 색상으로 인테리어를 연출하고 싶은 경우' },
    ],
  },
  {
    variant: 'pu',
    title: '폴리우레아 줄눈 추천',
    sub: 'For Outdoor · Industrial',
    items: [
      { text: '베란다·테라스 등 온도 변화와 진동이 많은 공간' },
      { text: '건물 외벽·주차장처럼 하중과 충격이 큰 환경' },
      { text: '빠른 시공과 조기 경화가 필요한 경우' },
      { text: '비용을 절감하면서도 품질을 원하는 경우' },
    ],
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
    idx: 'No. 01 · Kerafoxy',
    href: '/info/kerafoxy',
    title: '케라폭시 줄눈이란?',
    desc: '에폭시 계열 고성능 줄눈 소재 케라폭시의 5가지 핵심 장점.',
  },
  {
    idx: 'No. 02 · Product',
    href: '/info/kerafoxy-product',
    title: '케라폭시 계열 제품 소개',
    desc: '케라폭시·스타라이크·푸가리테 등 주요 제품 라인업과 색상 가이드.',
  },
  {
    idx: 'No. 03 · Pricing',
    href: '/info/kerafoxy-price',
    title: '케라폭시 가격 안내',
    desc: '시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에.',
  },
  {
    idx: 'No. 04 · Why',
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

export default function ComparisonPage() {
  const navigate = useNavigate();

  useSeo();

  useEffect(() => {
    const pathname = '/info/comparison';
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
        { name: '폴리우레아 vs 케라폭시 비교', url },
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

      {/* ===== Hero ===== */}
      {/* comparison은 중앙 정렬 + 큰 타이틀이라 페이지 고유 cp-hero 유지 */}
      <header className="cp-hero" data-screen-label="Hero">
        <div className="cp-hero-bg" aria-hidden="true" />
        <div className="container cp-hero-inner">
          <div className="eyebrow eyebrow-light">Material Compare Guide</div>
          <h1 className="cp-hero-title">
            폴리우레아 <span className="cp-vs">vs</span> 케라폭시
          </h1>
          <p className="cp-hero-lede">
            두 소재의 차이점과 장단점을 비교해<br />
            공간에 가장 알맞은 소재를 선택하세요.
          </p>
        </div>
      </header>

      {/* ===== Breadcrumb ===== */}
      <nav className="crumb" aria-label="현재 위치">
        <div className="container crumb-inner">
          <Link to="/" className="crumb-item">홈</Link>
          <span className="crumb-sep">/</span>
          <span className="crumb-item">줄눈 정보</span>
          <span className="crumb-sep">/</span>
          <span className="crumb-here">폴리우레아 vs 케라폭시</span>
        </div>
      </nav>

      {/* ===== Intro ===== */}
      <section className="cp-intro" data-screen-label="Intro">
        <div className="container">
          <div className="cp-intro-grid">
            <h2 className="cp-intro-title">
              폴리우레아 줄눈과<br />케라폭시 줄눈,<br />
              <em>어떻게 다를까?</em>
            </h2>
            <div className="cp-intro-body">
              <p>
                줄눈 시공을 알아보다 보면 <b>폴리우레아 줄눈</b>과 <b>케라폭시 줄눈</b>, 두 가지
                선택지를 마주하게 됩니다. 두 소재 모두 기존 시멘트 줄눈보다 월등히 우수한 성능을
                자랑하지만, 각자의 강점이 다릅니다.
              </p>
              <p>
                간단히 말하면, <b>케라폭시는 방수·항균 성능</b>이 극강이고{' '}
                <b>폴리우레아는 탄성·신축성</b>이 뛰어납니다. 공간의 특성에 따라 알맞은 소재를
                선택하는 것이 핵심입니다.
              </p>
              <div className="cp-vs-mark">
                <span className="cp-pill">
                  방수·항균 <b>케라폭시</b>
                </span>
                <span className="cp-vs-x">×</span>
                <span className="cp-pill">
                  탄성·내충격 <b>폴리우레아</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 01 Detailed Comparison ===== */}
      <section className="section bg-paper" data-screen-label="01 Detailed Comparison">
        <div className="container">
          <SecHead
            num="01"
            ko="상세 비교표"
            en="Detailed Comparison"
            title={
              <>
                10가지 항목으로,<br />두 소재를 <em>나란히 본다</em>.
              </>
            }
            lede="성분·내구성·가격·시공성까지. 한 줄씩 짚어가며 비교하세요. ★은 5점 만점 기준의 상대 성능입니다."
          />

          <div className="cp-cmp-wrap">
            <table className="cp-cmp-table">
              <caption className="sr-only">케라폭시 vs 폴리우레아 10항목 비교</caption>
              <thead>
                <tr>
                  <th className="cp-cmp-first">
                    <span className="cp-cmp-mat">
                      비교 항목<small>Criteria</small>
                    </span>
                  </th>
                  <th>
                    <span className="cp-cmp-mat">
                      케라폭시 줄눈<small>Kerapoxy</small>
                    </span>
                  </th>
                  <th>
                    <span className="cp-cmp-mat">
                      폴리우레아 줄눈<small>Polyurea</small>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.k}>
                    <td className="cp-row-label">{r.k}</td>
                    <td className="cp-col-kp">{r.kerafoxy}</td>
                    <td>{r.polyurea}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card view (same data, more readable on phones) */}
          <ul className="cp-cmp-cards" aria-label="비교 항목별 카드">
            {ROWS.map((r) => (
              <li key={`m-${r.k}`} className="cp-cmp-card">
                <div className="cp-cmp-card-k">{r.k}</div>
                <div className="cp-cmp-card-row">
                  <div className="cp-cmp-card-side cp-cmp-card-kp">
                    <span className="cp-cmp-card-side-lbl">케라폭시</span>
                    <span className="cp-cmp-card-side-val">{r.kerafoxy}</span>
                  </div>
                  <div className="cp-cmp-card-side">
                    <span className="cp-cmp-card-side-lbl">폴리우레아</span>
                    <span className="cp-cmp-card-side-val">{r.polyurea}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <p className="cp-cmp-foot">
            * 가격은 화장실 양변기 전체(바닥+벽) 시공 기준 평균값이며, 평형·현장 상황에 따라
            달라질 수 있습니다.
          </p>
        </div>
      </section>

      {/* ===== 02 Recommend ===== */}
      <section className="section" data-screen-label="02 Recommend">
        <div className="container">
          <SecHead
            num="02"
            ko="어떤 소재를 선택해야 할까요?"
            en="Which to Choose"
            title={
              <>
                공간 용도와 목적에 따라,<br />최적의 <em>줄눈 소재</em>를 선택하세요.
              </>
            }
            lede="아래 체크리스트로 본인 공간에 더 어울리는 소재를 확인할 수 있습니다."
          />

          <div className="cp-reco-grid">
            {RECO.map((r) => (
              <article key={r.variant} className={`cp-reco cp-reco-${r.variant}`}>
                <div className="cp-reco-head">
                  <h3 className="cp-reco-title">{r.title}</h3>
                  <span className="cp-reco-sub">{r.sub}</span>
                </div>
                <ul className="cp-reco-list">
                  {r.items.map((it) => (
                    <li key={it.text}>{it.text}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 03 Related ===== */}
      <section className="section bg-paper" data-screen-label="03 Related">
        <div className="container">
          <SecHead
            num="03"
            ko="관련 정보 더 보기"
            en="Related"
            title={
              <>
                줄눈에 대해 알아야 할, 다른 <em>네 가지</em>.
              </>
            }
            lede="자재 · 제품 · 가격 · 시공 이유 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."
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

      {/* ===== CTA Band ===== */}
      <section className="cta-band" data-screen-label="CTA Band">
        <div className="container cta-row">
          <div className="cta-text">
            <h3 className="cta-title">
              어떤 소재가 맞을지 <em>아직 고민되시나요?</em>
            </h3>
            <p className="cta-sub">
              현장 상황과 요구 사항을 듣고 최적의 소재를 추천해 드립니다. 서울·경기·인천 줄눈시공 무료 견적 상담.
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

      <style>{CP_CSS}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────────────────────────────────

const CP_CSS = `
/* page/container/section/eyebrow/sec-/crumb/btn/cta-band/related는 글로벌(src/index.css) 처리.
   페이지 고유: .cp-hero (중앙정렬·큰 타이틀) + cp-vs/cp-intro/cp-pill/compare-table */
.cp-hero em { color: #e3c5a3; }

/* ===== Hero (페이지 고유 — 중앙정렬 + 큰 타이틀) ===== */
.cp-hero {
  position: relative;
  padding: 168px 0 92px;
  overflow: hidden;
  isolation: isolate;
  text-align: center;
  color-scheme: dark;
}
@media (max-width: 720px) {
  .cp-hero { padding: 120px 0 64px; }
}
.cp-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(20,16,12,.45) 0%, rgba(14,11,8,.78) 100%),
    radial-gradient(120% 80% at 50% 20%, rgba(138,106,76,.18), transparent 60%),
    var(--hero-img, none) center/cover no-repeat,
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
.cp-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.15), rgba(0,0,0,.55) 80%);
  pointer-events: none;
}
.cp-hero-inner { position: relative; z-index: 1; }
.cp-hero .eyebrow {
  display: inline-flex;
  justify-content: center;
}
.cp-hero-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(40px, 5.4vw, 76px);
  line-height: 1.1;
  letter-spacing: -0.022em;
  color: #fff;
  margin: 18px 0 0;
  word-break: keep-all;
}
.cp-vs {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  color: #d9b790;
  font-weight: 300;
  padding: 0 0.1em;
}
.cp-hero-lede {
  font-size: 15.5px;
  line-height: 1.7;
  color: rgba(255,255,255,.78);
  margin: 18px auto 0;
  max-width: 54ch;
}

/* crumb은 글로벌(src/index.css) 처리 */

/* ===== Intro ===== */
.cp-intro {
  padding: 96px 0;
}
@media (max-width: 720px) {
  .cp-intro { padding: 64px 0; }
}
.cp-intro-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 72px;
  align-items: start;
}
@media (max-width: 900px) {
  .cp-intro-grid { grid-template-columns: 1fr; gap: 24px; }
}
.cp-intro-title {
  font-family: 'Noto Serif KR', serif;
  font-size: clamp(28px, 3.2vw, 40px);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin: 0;
  word-break: keep-all;
}
.cp-intro-body {
  font-size: 15.5px;
  color: var(--muted);
  line-height: 1.85;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.cp-intro-body p { margin: 0; }
.cp-intro-body b {
  font-weight: 500;
  color: var(--ink-2);
  border-bottom: 1px solid var(--accent);
  padding-bottom: 1px;
}
.cp-vs-mark {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  flex-wrap: wrap;
}
.cp-pill {
  padding: 7px 16px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  font-size: 12.5px;
  color: var(--ink-2);
  letter-spacing: -0.005em;
}
.cp-pill b {
  font-weight: 500;
  color: var(--accent-deep);
}
.cp-vs-x {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  color: var(--muted-2);
  font-size: 18px;
}

/* sec-*는 글로벌(src/index.css) 처리 */

/* ===== Compare Table (desktop) ===== */
.cp-cmp-wrap {
  border: 1px solid var(--line);
  overflow: hidden;
}
.cp-cmp-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--paper);
}
.cp-cmp-table thead th {
  background: var(--ink);
  color: var(--paper);
  text-align: left;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.02em;
  padding: 20px 28px;
  border-right: 1px solid rgba(255,255,255,.08);
  vertical-align: top;
}
.cp-cmp-table thead th:last-child { border-right: 0; }
.cp-cmp-mat {
  display: block;
  font-family: 'Noto Serif KR', serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.005em;
  color: #fff;
}
.cp-cmp-mat small {
  display: block;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 10.5px;
  letter-spacing: 0.14em;
  color: rgba(255,255,255,.55);
  text-transform: uppercase;
  margin-top: 6px;
  font-weight: 400;
}
.cp-cmp-first { width: 200px; }
.cp-cmp-first .cp-cmp-mat { color: rgba(255,255,255,.7); }

.cp-cmp-table tbody td {
  padding: 22px 28px;
  border-bottom: 1px solid var(--line);
  border-right: 1px solid var(--line);
  font-size: 15px;
  color: var(--ink-2);
  vertical-align: middle;
  line-height: 1.55;
}
.cp-cmp-table tbody tr:last-child td { border-bottom: 0; }
.cp-cmp-table tbody td:last-child { border-right: 0; }
.cp-cmp-table tbody tr { transition: background .2s ease; }
.cp-cmp-table tbody tr:hover { background: var(--bg); }
.cp-row-label {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 13.5px;
  color: var(--muted);
  letter-spacing: 0.02em;
  width: 200px;
}
.cp-col-kp { background: rgba(217,183,144,.06); }
.cp-stars {
  letter-spacing: 0.08em;
  color: var(--accent);
  font-size: 15px;
  display: inline-block;
  margin-right: 8px;
  line-height: 1;
}
.cp-stars .off { color: rgba(28,25,22,.18); }
.cp-rating {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 13px;
  color: var(--muted);
  letter-spacing: 0.04em;
  margin-left: 4px;
}
.cp-rating.best { color: var(--accent-deep); font-weight: 500; }
.cp-num {
  font-family: 'Noto Serif KR', serif;
  font-size: 17px;
  color: var(--ink);
  letter-spacing: -0.005em;
}
.cp-num small {
  font-size: 11.5px;
  color: var(--muted-2);
  margin-left: 2px;
  letter-spacing: 0;
  font-family: 'Pretendard Variable', sans-serif;
}
.cp-plus { color: var(--muted-2); }
.cp-strong {
  color: var(--accent-deep);
  font-weight: 500;
}
.cp-cmp-foot {
  margin-top: 16px;
  font-size: 11.5px;
  color: var(--muted-2);
  letter-spacing: 0.02em;
}

/* ===== Compare Cards (mobile only) ===== */
.cp-cmp-cards { display: none; }
@media (max-width: 820px) {
  .cp-cmp-wrap { display: none; }
  .cp-cmp-cards {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    background: var(--paper);
    border: 1px solid var(--line);
  }
  .cp-cmp-card {
    display: grid;
    grid-template-columns: 0.85fr 1fr 1fr;
    gap: 0;
    align-items: stretch;
    border-bottom: 1px solid var(--line);
  }
  .cp-cmp-card:last-child { border-bottom: 0; }
  .cp-cmp-card-k {
    display: flex;
    align-items: center;
    padding: 16px 14px;
    font-size: 14px;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.35;
    word-break: keep-all;
    letter-spacing: -0.005em;
  }
  .cp-cmp-card-row {
    display: contents;
  }
  .cp-cmp-card-side {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 14px 12px;
    border-left: 1px solid var(--line);
    background: transparent;
    border-radius: 0;
  }
  .cp-cmp-card-kp {
    background: rgba(217,183,144,.10);
  }
  .cp-cmp-card-side-lbl {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted-2);
  }
  .cp-cmp-card-side-val {
    font-size: 13.5px;
    color: var(--ink);
    line-height: 1.55;
    word-break: keep-all;
  }
  /* Mobile-tuned inline display for ratings / nums / strong */
  .cp-cmp-card-side-val .cp-rating { margin-left: 0; display: block; margin-top: 2px; font-size: 11.5px; }
  .cp-cmp-card-side-val .cp-stars { display: block; margin-right: 0; font-size: 14px; }
  .cp-cmp-card-side-val .cp-num { font-size: 15px; }
}

/* ===== Recommend ===== */
.cp-reco-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
@media (max-width: 820px) {
  .cp-reco-grid { grid-template-columns: 1fr; }
}
.cp-reco {
  position: relative;
  padding: 48px 44px;
  border: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 340px;
  border-radius: 2px;
  transition: all .25s ease;
}
.cp-reco:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 36px -20px rgba(28,25,22,.22);
}
@media (max-width: 720px) {
  .cp-reco { padding: 36px 28px; }
}
.cp-reco-kp {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.cp-reco-pu {
  background: var(--bg-2);
  color: var(--ink-2);
}
.cp-reco-head {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.cp-reco-title {
  font-family: 'Noto Serif KR', serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0;
}
.cp-reco-sub {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: .65;
  font-weight: 500;
}
.cp-reco-kp .cp-reco-sub { color: rgba(255,255,255,.6); }
.cp-reco-pu .cp-reco-sub { color: var(--muted-2); }
.cp-reco-list {
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.cp-reco-list li {
  font-size: 14.5px;
  line-height: 1.6;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.cp-reco-list li::before {
  content: '';
  flex: 0 0 auto;
  width: 14px;
  height: 8px;
  border-left: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(-45deg);
  margin-top: 6px;
  opacity: .9;
}
.cp-reco-kp .cp-reco-list li { color: rgba(255,255,255,.82); }
.cp-reco-kp .cp-reco-list li::before { color: #d9b790; }
.cp-reco-pu .cp-reco-list li::before { color: var(--accent); }

/* related/cta-band/btn은 글로벌(src/index.css) 처리 */
`;
