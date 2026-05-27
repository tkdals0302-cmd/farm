import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import { useSeo } from '../../../lib/useSeo';
import { Events } from '../../../lib/analytics';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const HERO_META = [
  { k: '핵심 가치', v: '위생·미관·방수', small: '3대 효과' },
  { k: '권장 주기', v: '5년+', small: '시멘트 줄눈 기준' },
  { k: '시공 시간', v: '1일', small: '평형별 상이' },
  { k: 'A/S', v: '2년', small: '무상' },
];

interface Reason {
  n: string;
  title: string;
  body: string;
  k: string;
  v: string;
}

const REASONS: Reason[] = [
  {
    n: '01',
    title: '위생 관리 — 곰팡이와 세균 차단',
    body: '타일 사이 줄눈은 습기가 모이기 쉬운 공간입니다. 시멘트 줄눈이 낡으면 균열과 기공이 생겨 곰팡이와 세균이 번식합니다. 정기적인 줄눈시공은 이런 위생 문제를 근본적으로 차단합니다.',
    k: '위생 지표',
    v: '곰팡이 0',
  },
  {
    n: '02',
    title: '미관 개선 — 공간의 첫인상을 바꾸다',
    body: '낡고 변색된 줄눈은 아무리 깨끗한 타일이어도 공간 전체를 낡아 보이게 만듭니다. 반대로 깔끔한 줄눈 하나만으로도 화장실·주방이 리모델링한 것처럼 새로워집니다.',
    k: '체감 효과',
    v: '리모델링 급',
  },
  {
    n: '03',
    title: '방수 보강 — 구조물 손상 예방',
    body: '줄눈이 갈라지면 물이 타일 아래로 스며들어 시멘트 바닥과 벽체에 수분이 침투합니다. 장기적으로 곰팡이, 타일 박리, 구조물 부식으로 이어져 훨씬 큰 수리 비용을 만듭니다.',
    k: '방수 효과',
    v: '구조 보호',
  },
  {
    n: '04',
    title: '비용 절감 — 조기 시공이 유리한 이유',
    body: '줄눈 문제를 방치하면 타일 전체 교체·방수 공사·구조 보수 등 수백만 원대 공사가 필요해집니다. 초기에 줄눈시공만 해도 이런 대규모 수리를 미연에 방지할 수 있습니다.',
    k: '예상 절감',
    v: '수백만 원',
  },
];

interface Problem {
  k: string;
  title: string;
  body: string;
}

const PROBLEMS: Problem[] = [
  {
    k: 'PB · 01',
    title: '곰팡이 대량 번식',
    body: '검은 곰팡이가 타일 줄눈을 따라 번지며 제거가 점점 어려워집니다.',
  },
  {
    k: 'PB · 02',
    title: '물이 벽·바닥 내부로 침투',
    body: '균열된 줄눈을 통해 물이 내부로 스며들어 구조 손상이 시작됩니다.',
  },
  {
    k: 'PB · 03',
    title: '타일 박리 · 탈락',
    body: '수분 침투로 접착력이 약해지며 타일이 들뜨거나 깨져 나갑니다.',
  },
  {
    k: 'PB · 04',
    title: '악취 발생',
    body: '유기물과 습기가 결합해 욕실 특유의 불쾌한 냄새가 심해집니다.',
  },
];

interface TimingItem {
  k: string;
  title: string;
  body: string;
}

const TIMING: TimingItem[] = [
  {
    k: 'TM · 01',
    title: '5년 이상 된 욕실·화장실',
    body: '시멘트 줄눈의 평균 수명을 넘은 경우 교체 시공을 권장합니다.',
  },
  {
    k: 'TM · 02',
    title: '변색·흑화가 눈에 띄는 경우',
    body: '줄눈이 검게 변했다면 이미 곰팡이가 깊이 침투한 상태일 수 있습니다.',
  },
  {
    k: 'TM · 03',
    title: '균열·탈락이 발생한 경우',
    body: '방치하면 물 침투로 인한 구조 손상으로 이어질 수 있습니다.',
  },
  {
    k: 'TM · 04',
    title: '집 매매 · 임대 전후',
    body: '줄눈 시공만으로도 체감 상태가 크게 달라져 매도·임대에 유리합니다.',
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
    desc: '에폭시 계열 고성능 줄눈 소재 케라폭시의 5가지 핵심 장점을 정리했습니다.',
  },
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
    desc: '케라폭시·스타라이크·푸가리테 등 주요 제품 라인업과 색상 가이드.',
  },
  {
    idx: 'No. 04 · Compare',
    href: '/info/comparison',
    title: '폴리우레아 vs 케라폭시',
    desc: '두 소재의 차이점과, 어떤 공간에 어떤 소재가 적합한지.',
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
  lede?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={`wg-sec-head ${dark ? 'wg-sec-head-dark' : ''}`}>
      <div className="wg-sec-bar">
        <span className="wg-sec-n">{num}</span>
        <span className="wg-sec-rule"></span>
        <span className="wg-sec-lbl">
          <span className="wg-sec-ko">{ko}</span>
          <span className="wg-sec-en">{en}</span>
        </span>
      </div>
      <div className="wg-sec-body">
        <h2 className="wg-sec-title">{title}</h2>
        {lede && <p className="wg-sec-lede">{lede}</p>}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function WhyGroutPage() {
  const navigate = useNavigate();

  useSeo();

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
    <div className="wg-page">
      <Navbar />

      {/* ===== Hero ===== */}
      <header className="wg-hero" data-screen-label="Hero">
        <div className="wg-hero-bg" aria-hidden="true" />
        <div className="wg-container wg-hero-inner">
          <div className="wg-eyebrow wg-eyebrow-light">Grout Knowledge · 05</div>
          <h1 className="wg-hero-title">
            줄눈시공<em>,</em>
            <br />선택이 아닌 <em>필수</em>인 이유.
          </h1>
          <p className="wg-hero-lede">
            위생 · 미관 · 방수 · 비용 절감.<br />
            줄눈 하나만 바꿔도 공간의 수명이 크게 달라집니다.
          </p>
          <ul className="wg-hero-meta">
            {HERO_META.map((m) => (
              <li key={m.k}>
                <span className="wg-meta-k">{m.k}</span>
                <span className="wg-meta-v">
                  {m.v} <small>{m.small}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ===== Breadcrumb ===== */}
      <nav className="wg-crumb" aria-label="현재 위치">
        <div className="wg-container wg-crumb-inner">
          <Link to="/" className="wg-crumb-item">홈</Link>
          <span className="wg-crumb-sep">/</span>
          <span className="wg-crumb-item">줄눈 정보</span>
          <span className="wg-crumb-sep">/</span>
          <span className="wg-crumb-here">줄눈시공 하는 이유</span>
        </div>
      </nav>

      {/* ===== Intro ===== */}
      <section className="wg-section" data-screen-label="Intro">
        <div className="wg-container">
          <div className="wg-intro-grid">
            <h2 className="wg-intro-title">
              줄눈시공은<br />선택이 아니라 <em>필수</em>입니다.
            </h2>
            <div className="wg-intro-body">
              <p>
                많은 분들이 줄눈을 단순한 타일 사이 채움재로 생각하지만, 실제로는{' '}
                <b>방수 · 위생 · 구조 보호</b>를 담당하는 핵심 요소입니다. 줄눈이 낡으면 눈에 보이는
                미관 문제를 넘어, 심각한 주거 환경 문제로 이어집니다.
              </p>
              <p>
                특히 매일 물을 사용하는 욕실·화장실·주방에서 <b>줄눈시공</b>은 가장 효과적인
                유지보수 방법 중 하나입니다. 작은 투자로 공간 수명을 크게 연장할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 01 Reasons ===== */}
      <section className="wg-section wg-bg-paper" data-screen-label="01 Reasons">
        <div className="wg-container">
          <SecHead
            num="01"
            ko="줄눈시공을 해야 하는 이유"
            en="4 Reasons"
            title={
              <>
                네 가지 이유로,<br />
                <em>지금</em> 시공해야 합니다.
              </>
            }
            lede="위생 · 미관 · 방수 · 비용. 줄눈시공이 만들어내는 효과를 한 줄씩 짚어봅니다."
          />

          <ul className="wg-reasons">
            {REASONS.map((r) => (
              <li key={r.n} className="wg-r-row">
                <span className="wg-r-n">{r.n}</span>
                <div className="wg-r-text">
                  <h3 className="wg-r-title">{r.title}</h3>
                  <p className="wg-r-body">{r.body}</p>
                </div>
                <div className="wg-r-spec">
                  <span className="wg-r-k">{r.k}</span>
                  <span className="wg-r-v">{r.v}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 02 Problems (dark) ===== */}
      <section className="wg-section-dark" data-screen-label="02 Problems">
        <div className="wg-container">
          <SecHead
            dark
            num="02"
            ko="줄눈시공을 미루면 생기는 문제"
            en="What Happens"
            title={
              <>
                작은 균열이,<br /><em>큰 손상</em>으로 이어집니다.
              </>
            }
            lede="줄눈 노후를 방치하면 단순한 미관 문제를 넘어 주거 구조 자체에 영향을 줍니다."
          />

          <div className="wg-prob-grid">
            {PROBLEMS.map((p) => (
              <article key={p.k} className="wg-prob-card">
                <span className="wg-prob-k">{p.k}</span>
                <h3 className="wg-prob-title">{p.title}</h3>
                <p className="wg-prob-body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 03 Timing ===== */}
      <section className="wg-section" data-screen-label="03 Timing">
        <div className="wg-container">
          <SecHead
            num="03"
            ko="줄눈시공이 필요한 시점"
            en="When to Start"
            title={
              <>
                이런 상황이라면,<br />
                <em>지금</em> 점검해 보세요.
              </>
            }
            lede="아래 중 하나라도 해당된다면 줄눈 상태를 한 번 확인해볼 시점입니다."
          />

          <div className="wg-timing-grid">
            {TIMING.map((t) => (
              <article key={t.k} className="wg-timing-card">
                <span className="wg-timing-k">{t.k}</span>
                <h3 className="wg-timing-title">{t.title}</h3>
                <p className="wg-timing-body">{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 04 Related ===== */}
      <section className="wg-section wg-bg-paper" data-screen-label="04 Related">
        <div className="wg-container">
          <SecHead
            num="04"
            ko="관련 정보 더 보기"
            en="Related"
            title={
              <>
                줄눈에 대해 알아야 할, 다른 <em>네 가지</em>.
              </>
            }
            lede="자재 · 가격 · 제품 · 비교 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."
          />
          <div className="wg-related-grid">
            {RELATED.map((r) => (
              <Link key={r.href} to={r.href} className="wg-related-card">
                <span className="wg-related-idx">{r.idx}</span>
                <h4 className="wg-related-title">{r.title}</h4>
                <p className="wg-related-desc">{r.desc}</p>
                <span className="wg-related-more">
                  more <span className="wg-related-arr">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Band ===== */}
      <section className="wg-cta-band" data-screen-label="CTA Band">
        <div className="wg-container wg-cta-row">
          <div className="wg-cta-text">
            <h3 className="wg-cta-title">
              지금 우리 집 줄눈이 <em>괜찮은지</em> 점검받아 보세요.
            </h3>
            <p className="wg-cta-sub">
              사진 한 장만 보내주시면 현재 상태와 시공 필요 여부를 안내해 드립니다. 강남구·서초구·송파구 욕실·베란다·현관 줄눈 무료 견적.
            </p>
          </div>
          <div className="wg-cta-actions">
            <button type="button" className="wg-btn wg-btn-primary" onClick={goQuote}>
              무료 견적 받기 <span className="wg-btn-arr">→</span>
            </button>
            <a
              href="tel:010-8005-6674"
              onClick={() => Events.phoneClick('info_cta')}
              className="wg-btn wg-btn-ghost"
            >
              전화 상담 010-8005-6674
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{WG_CSS}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────────────────────────────────

const WG_CSS = `
.wg-page {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}
.wg-page ::selection { background: var(--accent); color: #fff; }

.wg-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 32px;
}
@media (max-width: 720px) {
  .wg-container { padding: 0 20px; }
}

.wg-section {
  padding: 120px 0;
  border-top: 1px solid var(--line);
}
.wg-section-dark {
  padding: 120px 0;
  background: var(--dark);
  color: var(--on-dark);
}
.wg-bg-paper { background: var(--paper); }
@media (max-width: 720px) {
  .wg-section, .wg-section-dark { padding: 72px 0; }
}

.wg-eyebrow {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.wg-eyebrow-light { color: #d9b790; }

.wg-page em {
  font-style: normal;
  color: var(--accent);
}
.wg-hero em, .wg-section-dark em { color: #e3c5a3; }

/* ===== Hero ===== */
.wg-hero {
  position: relative;
  padding: 168px 0 84px;
  overflow: hidden;
  isolation: isolate;
  color-scheme: dark;
}
@media (max-width: 720px) {
  .wg-hero { padding: 120px 0 64px; }
}
.wg-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 1px, transparent 1px 24px),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.25), transparent 60%),
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
.wg-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.25), rgba(0,0,0,.65) 80%);
  pointer-events: none;
}
.wg-hero-inner { position: relative; z-index: 1; }
.wg-hero-title {
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
.wg-hero-lede {
  font-size: 15.5px;
  line-height: 1.75;
  color: rgba(255,255,255,.78);
  max-width: 56ch;
  margin: 0;
}
.wg-hero-meta {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 0;
  margin: 48px 0 0;
  border-top: 1px solid rgba(255,255,255,.16);
}
.wg-hero-meta li {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 22px 22px 0;
  border-right: 1px solid rgba(255,255,255,.16);
}
.wg-hero-meta li:last-child { border-right: none; }
.wg-hero-meta li:not(:first-child) { padding-left: 22px; }
.wg-meta-k {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
}
.wg-meta-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 17px;
  color: #fff;
  letter-spacing: -0.005em;
}
.wg-meta-v small {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,.55);
  margin-left: 6px;
  letter-spacing: 0;
}
@media (max-width: 720px) {
  .wg-hero-meta { grid-template-columns: repeat(2, 1fr); }
  .wg-hero-meta li:nth-child(2) { border-right: none; }
  .wg-hero-meta li:nth-child(3) { padding-left: 0; }
  .wg-hero-meta li:nth-child(3),
  .wg-hero-meta li:nth-child(4) {
    border-top: 1px solid rgba(255,255,255,.16);
  }
}

/* ===== Breadcrumb ===== */
.wg-crumb {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.wg-crumb-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--muted-2);
}
@media (max-width: 720px) {
  .wg-crumb-inner { padding: 14px 20px; }
}
.wg-crumb-item {
  color: var(--muted-2);
  text-decoration: none;
  transition: color .2s ease;
}
.wg-crumb-item:hover { color: var(--accent); }
.wg-crumb-sep { opacity: .4; }
.wg-crumb-here { color: var(--ink); }

/* ===== Section Head ===== */
.wg-sec-head { margin-bottom: 56px; }
@media (max-width: 820px) {
  .wg-sec-head { margin-bottom: 36px; }
}
.wg-sec-bar {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 22px;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--line);
}
.wg-sec-head-dark .wg-sec-bar { border-bottom-color: rgba(255,255,255,.14); }
.wg-sec-n {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: var(--accent);
  font-variant-numeric: lining-nums;
}
.wg-sec-head-dark .wg-sec-n { color: #d9b790; }
.wg-sec-rule {
  flex: 0 0 56px;
  height: 1px;
  background: var(--accent);
  opacity: .6;
}
.wg-sec-head-dark .wg-sec-rule { background: #d9b790; opacity: .7; }
.wg-sec-lbl {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.wg-sec-ko { color: var(--ink-2); }
.wg-sec-head-dark .wg-sec-ko { color: #fff; }
.wg-sec-en { color: var(--muted-2); margin-left: 10px; }
.wg-sec-head-dark .wg-sec-en { color: rgba(255,255,255,.5); }
.wg-sec-body {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: end;
}
@media (max-width: 820px) {
  .wg-sec-body { grid-template-columns: 1fr; gap: 16px; align-items: start; }
}
.wg-sec-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(30px, 3.6vw, 48px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  margin: 0;
  word-break: keep-all;
}
.wg-sec-head-dark .wg-sec-title { color: var(--on-dark); }
.wg-sec-lede {
  font-size: 16px;
  line-height: 1.75;
  color: var(--muted);
  max-width: 48ch;
  margin: 0;
}
.wg-sec-head-dark .wg-sec-lede { color: var(--dark-muted); }

/* ===== Intro ===== */
.wg-intro-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 72px;
  align-items: start;
}
@media (max-width: 900px) {
  .wg-intro-grid { grid-template-columns: 1fr; gap: 24px; }
}
.wg-intro-title {
  font-family: 'Noto Serif KR', serif;
  font-size: clamp(28px, 3.2vw, 40px);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin: 0;
  word-break: keep-all;
}
.wg-intro-body {
  font-size: 15.5px;
  color: var(--muted);
  line-height: 1.85;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.wg-intro-body p { margin: 0; }
.wg-intro-body b {
  font-weight: 500;
  color: var(--ink-2);
  border-bottom: 1px solid var(--accent);
  padding-bottom: 1px;
}

/* ===== Reasons (editorial row list) ===== */
.wg-reasons {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
}
.wg-r-row {
  display: grid;
  grid-template-columns: 84px 1fr 200px;
  gap: 40px;
  align-items: center;
  padding: 36px 8px;
  border-bottom: 1px solid var(--line);
  transition: all .25s ease;
}
.wg-r-row:hover {
  background: var(--bg);
  padding-left: 20px;
}
.wg-r-n {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 32px;
  color: var(--accent);
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1;
}
.wg-r-text { display: flex; flex-direction: column; gap: 8px; min-width: 0; }
.wg-r-title {
  font-family: 'Noto Serif KR', serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 0;
  line-height: 1.35;
}
.wg-r-body {
  font-size: 14.5px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0;
  word-break: keep-all;
}
.wg-r-spec {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  border-left: 1px solid var(--line);
  padding-left: 24px;
}
.wg-r-k {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.wg-r-v {
  font-family: 'Noto Serif KR', serif;
  font-size: 17px;
  font-weight: 500;
  color: var(--accent-deep);
  letter-spacing: -0.005em;
}
@media (max-width: 820px) {
  .wg-r-row {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 28px 4px;
  }
  .wg-r-row:hover { padding-left: 18px; }
  .wg-r-n { font-size: 26px; }
  .wg-r-spec {
    flex-direction: row;
    align-items: baseline;
    gap: 10px;
    border-left: 0;
    padding-left: 0;
    padding-top: 8px;
    border-top: 1px dashed var(--line);
  }
}

/* ===== Problems (dark section, 4 cards) ===== */
.wg-prob-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255,255,255,.14);
  border: 1px solid rgba(255,255,255,.14);
}
@media (max-width: 900px) {
  .wg-prob-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .wg-prob-grid { grid-template-columns: 1fr; }
}
.wg-prob-card {
  background: var(--dark);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 200px;
}
.wg-prob-k {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #d9b790;
}
.wg-prob-title {
  font-family: 'Noto Serif KR', serif;
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #fff;
  margin: 0;
  line-height: 1.35;
}
.wg-prob-body {
  font-size: 13.5px;
  line-height: 1.7;
  color: rgba(255,255,255,.65);
  margin: 0;
  word-break: keep-all;
}

/* ===== Timing ===== */
.wg-timing-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}
@media (max-width: 720px) {
  .wg-timing-grid { grid-template-columns: 1fr; }
}
.wg-timing-card {
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 28px 28px 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all .25s ease;
}
.wg-timing-card:hover {
  border-color: var(--line-strong);
  transform: translateY(-2px);
}
.wg-timing-k {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}
.wg-timing-title {
  font-family: 'Noto Serif KR', serif;
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 0;
  line-height: 1.35;
}
.wg-timing-body {
  font-size: 14px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0;
  word-break: keep-all;
}

/* ===== Related ===== */
.wg-related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .wg-related-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .wg-related-grid { grid-template-columns: 1fr; }
}
.wg-related-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 32px 28px 28px;
  min-height: 220px;
  color: inherit;
  text-decoration: none;
  transition: background .25s ease, color .25s ease, border-color .25s ease;
}
.wg-related-card:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.wg-related-idx {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.wg-related-card:hover .wg-related-idx { color: #d9b790; }
.wg-related-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.35;
  color: var(--ink);
  margin: 0;
  letter-spacing: -0.005em;
}
.wg-related-card:hover .wg-related-title { color: #fff; }
.wg-related-desc {
  font-size: 13px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}
.wg-related-card:hover .wg-related-desc { color: rgba(255,255,255,.75); }
.wg-related-more {
  margin-top: auto;
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.wg-related-card:hover .wg-related-more { color: #d9b790; }
.wg-related-arr { transition: transform .3s ease; }
.wg-related-card:hover .wg-related-arr { transform: translateX(4px); }

/* ===== CTA Band ===== */
.wg-cta-band {
  background: var(--bg-2);
  border-top: 1px solid var(--line);
  padding: 72px 0;
}
@media (max-width: 720px) {
  .wg-cta-band { padding: 56px 0; }
}
.wg-cta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}
.wg-cta-text { display: flex; flex-direction: column; gap: 8px; flex: 1 1 380px; }
.wg-cta-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(26px, 3vw, 38px);
  letter-spacing: -0.015em;
  line-height: 1.35;
  margin: 0;
  word-break: keep-all;
}
.wg-cta-sub {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}
.wg-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-end;
}
@media (max-width: 820px) {
  .wg-cta-actions {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
  }
  .wg-cta-actions .wg-btn {
    flex: 1 1 0;
    min-width: 0;
    padding: 14px 12px;
    font-size: 13px;
    white-space: nowrap;
    justify-content: center;
  }
}

/* ===== Buttons ===== */
.wg-btn {
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
.wg-btn-arr { transition: transform .3s ease; }
.wg-btn:hover .wg-btn-arr { transform: translateX(4px); }
.wg-btn-primary {
  background: var(--ink);
  color: var(--paper);
}
.wg-btn-primary:hover { background: var(--accent-deep); }
.wg-btn-ghost {
  background: transparent;
  border: 1px solid var(--line-strong);
  color: var(--ink);
}
.wg-btn-ghost:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
`;
