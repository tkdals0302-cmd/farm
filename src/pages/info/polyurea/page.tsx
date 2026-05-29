import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import { Events } from '../../../lib/analytics';
import { useSeo } from '../../../lib/useSeo';
import { articleJsonLd, breadcrumbJsonLd, injectJsonLd } from '../../../lib/structuredData';
import { SITE_URL, PAGE_META } from '../../../lib/seo';
// TODO: 폴리우레아 전용 이미지 자산 보강 시 교체 (현재는 케라폭시 페이지 이미지 재사용)
import beforeImage from '../../../assets/images/info/kerafoxy/before.jpg';
import afterImage from '../../../assets/images/info/kerafoxy/after.jpg';
import introImage from '../../../assets/images/info/kerafoxy-product/Polyurea.jpg';
import heroBgDesktop from '../../../assets/images/info/kerafoxy/bg.webp';
import heroBgMobile from '../../../assets/images/info/kerafoxy/bg_m.webp';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

// TODO: 정확한 평형별 단가는 /info/kerafoxy-price로 링크 (운영자 가격 정책에 맞춰 추후 보강)
const HERO_META = [
  { k: '소재 분류', v: '폴리우레아 수지' },
  { k: '수명', v: '5년+' },
  { k: '시공 시간', v: '약 4~6시간' },
  { k: 'A/S', v: '2년 무상' },
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
    title: '뛰어난 가성비',
    body: '케라폭시 대비 시공비 약 60~70% 수준으로 합리적입니다.',
    k: '시공비',
    v: '5만원~',
  },
  {
    idx: '02',
    title: '빠른 시공 시간',
    body: '경화 속도가 빨라 평수에 따라 반나절~1일 내 완료됩니다.',
    k: '경화',
    v: '수 시간',
  },
  {
    idx: '03',
    title: '강한 탄성',
    body: '약간의 변형·진동에도 균열 없이 견딥니다.',
    k: '연신율',
    v: '높음',
  },
  {
    idx: '04',
    title: '내후성',
    body: '자외선·온도 변화에 강해 베란다·외부 공간에 적합합니다.',
    k: '용도',
    v: '실외 OK',
  },
  {
    idx: '05',
    title: '경제적 보수',
    body: '5년 주기로 재시공해도 누적 비용이 부담스럽지 않습니다.',
    k: '5년 후',
    v: '재시공 가능',
  },
  {
    idx: '+',
    title: '단, 화장실엔 케라폭시가 답입니다.',
    body: '폴리우레아는 강한 내수성·항균이 필요한 화장실엔 적합하지 않습니다. 화장실은 케라폭시 시공만 진행합니다.',
    k: '화장실',
    v: '케라폭시 전용',
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
    items: ['저렴', '1~2년 수명', '곰팡이 취약', '주기 재시공 필요'],
  },
  {
    name: '폴리우레아',
    tag: 'Detailline 가성비 추천',
    hero: true,
    items: [
      '케라폭시 대비 60~70% 가격',
      '5년+ 수명',
      '베란다·외부화장실 적합',
      '빠른 시공',
    ],
  },
  {
    name: '케라폭시',
    tag: 'Premium',
    items: ['10년+ 수명', '강한 내수성·항균', '20+ 색상', '화장실·욕실 권장'],
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
    ko: '베란다 · 발코니',
    en: 'Veranda / Balcony',
    desc: '자외선·온도 변화에 강한 폴리우레아의 강점이 가장 잘 나타나는 공간입니다.',
  },
  {
    code: 'SP · 02',
    ko: '외부 화장실',
    en: 'Outdoor Bath',
    desc: '실외 노출 화장실의 줄눈 보수에 적합합니다.',
  },
  {
    code: 'SP · 03',
    ko: '현관 바닥',
    en: 'Entrance Floor',
    desc: '구축 아파트 현관 바닥의 가성비 보수 옵션입니다.',
  },
  {
    code: 'SP · 04',
    ko: '실내 화장실 (비추천)',
    en: 'Indoor Bath (NOT recommended)',
    desc: '실내 화장실은 위생·항균이 중요해 케라폭시 시공만 진행합니다.',
  },
];

const BA_STATS = [
  { k: '시공 시간', v: '약 4~6시간' },
  { k: '경화', v: '수 시간 내' },
  { k: '사용 가능', v: '24시간 후 권장' },
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
    idx: 'No. 01 · Compare',
    href: '/info/comparison',
    title: '폴리우레아 vs 케라폭시',
    desc: '두 자재의 차이와 공간별 추천 정리.',
  },
  {
    idx: 'No. 02 · Pricing',
    href: '/info/kerafoxy-price',
    title: '가격 안내',
    desc: '폴리우레아·케라폭시 평형별 표준 시공비.',
  },
  {
    idx: 'No. 03 · Kerafoxy',
    href: '/info/kerafoxy',
    title: '케라폭시 줄눈이란?',
    desc: '실내 화장실에 권장되는 자재.',
  },
  {
    idx: 'No. 04 · Why',
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
    <div className={`pu-sec-head ${dark ? 'pu-sec-head-dark' : ''}`}>
      <div className="pu-sec-bar">
        <span className="pu-sec-n">{num}</span>
        <span className="pu-sec-rule"></span>
        <span className="pu-sec-lbl">
          <span className="pu-sec-ko">{ko}</span>
          <span className="pu-sec-en">{en}</span>
        </span>
      </div>
      <div className="pu-sec-body">
        <h2 className="pu-sec-title">{title}</h2>
        <p className="pu-sec-lede">{lede}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function PolyureaPage() {
  const navigate = useNavigate();

  useSeo();

  useEffect(() => {
    const pathname = '/info/polyurea';
    const meta = PAGE_META[pathname];
    const url = `${SITE_URL}${pathname}`;

    const cleanupArticle = injectJsonLd(
      'article-jsonld',
      articleJsonLd({
        title: meta.title,
        description: meta.description,
        url,
        image: `${SITE_URL}/og_banner.jpg`,
        datePublished: '2026-05-29',
        dateModified: '2026-05-29',
      })
    );

    const cleanupCrumb = injectJsonLd(
      'breadcrumb-jsonld',
      breadcrumbJsonLd([
        { name: '홈', url: SITE_URL },
        { name: '줄눈 정보', url: `${SITE_URL}/#info` },
        { name: '폴리우레아 줄눈이란?', url },
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
    <div className="pu-page">
      <Navbar />

      {/* ===== 01 Hero ===== */}
      <header className="pu-hero" data-screen-label="01 Hero">
        <div
          className="pu-hero-bg"
          style={{
            '--hero-img-d': `url(${heroBgDesktop})`,
            '--hero-img-m': `url(${heroBgMobile})`,
          } as React.CSSProperties}
          aria-hidden="true"
        />
        <div className="pu-container pu-hero-inner">
          <div className="pu-eyebrow pu-eyebrow-light">Grout Knowledge · 03</div>
          <h1 className="pu-hero-title">
            폴리우레아 줄눈,
            <br /><em>가성비</em>의 정답.
          </h1>
          <p className="pu-hero-lede">
            베란다·외부화장실·현관 — 자외선과 온도 변화에 강한 폴리우레아 줄눈.<br />
            케라폭시 대비 60~70% 가격으로, 5년+ 수명을 확보합니다.
          </p>
          <ul className="pu-hero-meta">
            {HERO_META.map((m) => (
              <li key={m.k}>
                <span className="pu-meta-k">{m.k}</span>
                <span className="pu-meta-v">{m.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ===== Breadcrumb ===== */}
      <nav className="pu-crumb" aria-label="현재 위치">
        <div className="pu-container pu-crumb-inner">
          <Link to="/" className="pu-crumb-item">홈</Link>
          <span className="pu-crumb-sep">/</span>
          <span className="pu-crumb-item">줄눈 정보</span>
          <span className="pu-crumb-sep">/</span>
          <span className="pu-crumb-here">폴리우레아 줄눈이란?</span>
        </div>
      </nav>

      {/* ===== 02 Introduction ===== */}
      <section className="pu-section" data-screen-label="02 Introduction">
        <div className="pu-container">
          <div className="pu-intro">
            <div className="pu-intro-left">
              <div className="pu-eyebrow">Introduction · 들어가며</div>
              <h2 className="pu-intro-title">
                폴리우레아 줄눈,<br />왜 <em>가성비 추천</em>일까요?
              </h2>
              <p className="pu-intro-body">
                <em className="pu-hl">
                  폴리우레아(Polyurea)는 빠른 경화 속도와 강한 탄성을 갖춘 고분자 줄눈 소재
                </em>
                입니다. 케라폭시만큼의 화학적 항균성·내수성은 아니지만, 베란다·외부 공간에서는
                자외선·온도 변화에 대한 내후성이 더 빛을 발합니다.
              </p>
              <p className="pu-intro-body">
                무엇보다도 케라폭시 대비 시공비가 60~70% 수준이라, 보수 주기·예산 관점에서
                합리적인 선택지입니다.
              </p>
              <p className="pu-intro-body">
                ⚠️ 실내 화장실·욕실은 위생과 항균이 중요해 폴리우레아가 적합하지 않습니다.
                해당 공간은 <Link to="/info/kerafoxy" className="pu-inline-link">케라폭시 시공</Link>만
                진행합니다.
              </p>
            </div>
            <div className="pu-intro-right">
              <div className="pu-intro-photo">
                <img
                  src={introImage}
                  alt="폴리우레아 줄눈 시공 디테일"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 03 Benefits ===== */}
      <section className="pu-section pu-bg-paper" data-screen-label="03 Benefits">
        <div className="pu-container">
          <SecHead
            num="02"
            ko="5가지 핵심 장점"
            en="Benefits"
            title={
              <>
                베란다·외부 공간에서 빛을 발하는 <em>가성비 자재</em>.
              </>
            }
            lede="가격·시간·내후성 — 폴리우레아가 어떤 강점으로 베란다와 외부 공간에 적합한지 정리했습니다."
          />
          <div className="pu-benefits-grid">
            {BENEFITS.map((b) => (
              <article key={b.idx} className={`pu-benefit ${b.dark ? 'pu-benefit-dark' : ''}`}>
                <div className="pu-benefit-head">
                  <span className="pu-benefit-lbl">Benefit / {b.idx}</span>
                  <span className="pu-benefit-idx">{b.idx}</span>
                </div>
                <h3 className="pu-benefit-title">
                  {b.title.split('\n').map((line, i) => (
                    <span key={i} className="pu-benefit-title-line">{line}</span>
                  ))}
                </h3>
                <p className="pu-benefit-body">{b.body}</p>
                <div className="pu-benefit-spec">
                  <span className="pu-spec-k">{b.k}</span>
                  <span className="pu-spec-v">{b.v}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Comparison table */}
          <div className="pu-compare">
            {COMPARE.map((c) => (
              <div key={c.name} className={`pu-compare-col ${c.hero ? 'pu-is-hero' : ''}`}>
                <div className="pu-compare-head">
                  <h3 className="pu-compare-name">{c.name}</h3>
                  <span className="pu-compare-tag">{c.tag}</span>
                </div>
                <ul className="pu-compare-list">
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
      <section className="pu-section" data-screen-label="04 Spaces">
        <div className="pu-container">
          <SecHead
            num="03"
            ko="적합한 공간"
            en="Spaces"
            title={
              <>
                폴리우레아는 <em>외부 공간</em>에 강합니다.
              </>
            }
            lede="자외선과 온도 변화가 큰 베란다·외부화장실·현관에 폴리우레아가 적합합니다. 실내 화장실은 케라폭시 전용."
          />
          <ul className="pu-spaces">
            {SPACES.map((s) => (
              <li key={s.code} className="pu-space-row">
                <span className="pu-space-code">{s.code}</span>
                <span className="pu-space-lbl">
                  <span className="pu-space-ko">{s.ko}</span>
                  <span className="pu-space-en">{s.en}</span>
                </span>
                <span className="pu-space-desc">{s.desc}</span>
                <span className="pu-space-more">
                  자세히 <span className="pu-space-arr">→</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 05 Before · After ===== */}
      {/* TODO: 폴리우레아 베란다 시공 전·후 이미지로 교체 (현재는 케라폭시 이미지 재사용) */}
      <section className="pu-section-dark" data-screen-label="05 Before · After">
        <div className="pu-container">
          <SecHead
            dark
            num="04"
            ko="시공 전 · 후 비교"
            en="Before · After"
            title={
              <>
                같은 베란다, <em>다른 마감</em>.
              </>
            }
            lede="실제 시공 현장에서 발견되는 변화를 정리했습니다. 노후 줄눈을 가성비로 되살리는 한 방."
          />
          <div className="pu-ba-grid">
            <figure className="pu-ba-item">
              <div className="pu-ba-photo">
                <img src={beforeImage} alt="시공 전 — 노후 베란다 줄눈" loading="lazy" />
                <span className="pu-ba-pill pu-ba-pill-light">Before</span>
              </div>
              <figcaption className="pu-ba-cap">
                <h4 className="pu-ba-cap-title">자외선·균열로 손상된 줄눈</h4>
                <p className="pu-ba-cap-body">
                  베란다의 시멘트 줄눈은 자외선과 온도 변화로 균열·박락이 빠르게 진행됩니다.
                </p>
              </figcaption>
            </figure>
            <figure className="pu-ba-item">
              <div className="pu-ba-photo">
                <img src={afterImage} alt="시공 후 — 폴리우레아 줄눈 마감" loading="lazy" />
                <span className="pu-ba-pill pu-ba-pill-accent">After</span>
              </div>
              <figcaption className="pu-ba-cap">
                <h4 className="pu-ba-cap-title">균일한 마감, 5년+ 수명</h4>
                <p className="pu-ba-cap-body">
                  탄성 있는 폴리우레아 마감으로 변형·균열 없이 깨끗한 상태가 유지됩니다.
                </p>
              </figcaption>
            </figure>
          </div>
          <ul className="pu-ba-bottom">
            {BA_STATS.map((s) => (
              <li key={s.k}>
                <span className="pu-ba-bot-k">{s.k}</span>
                <span className="pu-ba-bot-v">{s.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 06 Related ===== */}
      <section className="pu-section pu-bg-paper" data-screen-label="06 Related">
        <div className="pu-container">
          <SecHead
            num="05"
            ko="관련 정보 더 보기"
            en="Related"
            title={
              <>
                폴리우레아를 더 깊이 알아볼 <em>네 가지</em>.
              </>
            }
            lede="비교 · 가격 · 케라폭시 · 시공 — 네 가지 관점으로 줄눈을 살펴보세요."
          />
          <div className="pu-related-grid">
            {RELATED.map((r) => (
              <Link key={r.href} to={r.href} className="pu-related-card">
                <span className="pu-related-idx">{r.idx}</span>
                <h4 className="pu-related-title">{r.title}</h4>
                <p className="pu-related-desc">{r.desc}</p>
                <span className="pu-related-more">
                  more <span className="pu-related-arr">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Band ===== */}
      <section className="pu-cta-band" data-screen-label="CTA Band">
        <div className="pu-container pu-cta-row">
          <div className="pu-cta-text">
            <h3 className="pu-cta-title">
              베란다·외부 공간 줄눈, <em>무료 견적</em>으로 시작하세요.
            </h3>
            <p className="pu-cta-sub">평형 · 공간을 알려주시면 24시간 내에 회신드립니다. 강남구·서초구·송파구 베란다·외부화장실·현관 폴리우레아 줄눈 무료 견적.</p>
          </div>
          <div className="pu-cta-actions">
            <button type="button" className="pu-btn pu-btn-primary" onClick={goQuote}>
              무료 견적 받기 <span className="pu-btn-arr">→</span>
            </button>
            <a
              href="tel:010-8005-6674"
              onClick={() => Events.phoneClick('info_cta')}
              className="pu-btn pu-btn-ghost"
            >
              전화 상담 010-8005-6674
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{PU_CSS}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Styles — KerafoxyPage의 KF_CSS를 기반으로 클래스 접두만 pu-*로 교체
// ─────────────────────────────────────────────────────────────────────────────

const PU_CSS = `
.pu-page {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}
.pu-page ::selection { background: var(--accent); color: #fff; }

.pu-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 32px;
}
@media (max-width: 720px) {
  .pu-container { padding: 0 20px; }
}

.pu-section {
  padding: 120px 0;
  border-top: 1px solid var(--line);
}
.pu-section-dark {
  padding: 120px 0;
  background: var(--dark);
  color: var(--on-dark);
}
.pu-bg-paper { background: var(--paper); }
@media (max-width: 720px) {
  .pu-section, .pu-section-dark { padding: 72px 0; }
}

.pu-eyebrow {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.pu-eyebrow-light { color: #d9b790; }

.pu-page em {
  font-style: normal;
  color: var(--accent);
}
.pu-section-dark em, .pu-hero em { color: #e3c5a3; }

.pu-inline-link {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.pu-inline-link:hover { color: var(--accent-deep); }

/* ===== Hero ===== */
.pu-hero {
  position: relative;
  padding: 168px 0 84px;
  overflow: hidden;
  isolation: isolate;
}
@media (max-width: 720px) {
  .pu-hero { padding: 120px 0 64px; }
}
.pu-hero-bg {
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
  .pu-hero-bg {
    background:
      linear-gradient(180deg, rgba(20,16,12,.35) 0%, rgba(14,11,8,.78) 100%),
      radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
      var(--hero-img-m, none) center/cover no-repeat,
      linear-gradient(180deg, #251d14 0%, #18130e 100%);
  }
}
.pu-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.15), rgba(0,0,0,.55) 80%);
  pointer-events: none;
}
.pu-hero-inner { position: relative; z-index: 1; }
.pu-hero-title {
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
.pu-hero-lede {
  font-size: 15.5px;
  line-height: 1.75;
  color: rgba(255,255,255,.78);
  max-width: 56ch;
  margin: 0;
}
.pu-hero-meta {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  list-style: none;
  padding: 0;
  margin: 48px 0 0;
  border-top: 1px solid rgba(255,255,255,.16);
}
.pu-hero-meta li {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 22px 22px 0;
  border-right: 1px solid rgba(255,255,255,.16);
}
.pu-hero-meta li:last-child { border-right: none; }
.pu-hero-meta li:not(:first-child) { padding-left: 22px; }
.pu-meta-k {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
}
.pu-meta-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 17px;
  color: #fff;
  letter-spacing: -0.005em;
}
@media (max-width: 720px) {
  .pu-hero-meta { grid-template-columns: repeat(2, 1fr); }
  .pu-hero-meta li:nth-child(2) { border-right: none; }
  .pu-hero-meta li:nth-child(3) { padding-left: 0; }
  .pu-hero-meta li:nth-child(3), .pu-hero-meta li:nth-child(4) {
    border-top: 1px solid rgba(255,255,255,.16);
  }
}

/* ===== Breadcrumb ===== */
.pu-crumb {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.pu-crumb-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--muted-2);
}
@media (max-width: 720px) {
  .pu-crumb-inner { padding: 14px 20px; }
}
.pu-crumb-item {
  color: var(--muted-2);
  text-decoration: none;
  transition: color .2s ease;
}
.pu-crumb-item:hover { color: var(--accent); }
.pu-crumb-sep { opacity: .4; }
.pu-crumb-here { color: var(--ink); }

/* ===== Section Head ===== */
.pu-sec-head { margin-bottom: 64px; }
.pu-sec-bar {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 22px;
  margin-bottom: 36px;
  border-bottom: 1px solid var(--line);
}
.pu-sec-head-dark .pu-sec-bar { border-bottom-color: rgba(255,255,255,.14); }
.pu-sec-n {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: var(--accent);
  font-variant-numeric: lining-nums;
}
.pu-sec-head-dark .pu-sec-n { color: #d9b790; }
.pu-sec-rule {
  flex: 0 0 56px;
  height: 1px;
  background: var(--accent);
  opacity: .6;
}
.pu-sec-head-dark .pu-sec-rule { background: #d9b790; opacity: .7; }
.pu-sec-lbl {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.pu-sec-ko { color: var(--ink-2); }
.pu-sec-head-dark .pu-sec-ko { color: #fff; }
.pu-sec-en { color: var(--muted-2); margin-left: 10px; }
.pu-sec-head-dark .pu-sec-en { color: rgba(255,255,255,.5); }
.pu-sec-body {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: end;
}
@media (max-width: 820px) {
  .pu-sec-body { grid-template-columns: 1fr; gap: 24px; align-items: start; }
}
.pu-sec-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(30px, 3.6vw, 48px);
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin: 0;
  word-break: keep-all;
}
.pu-sec-head-dark .pu-sec-title { color: var(--on-dark); }
.pu-sec-lede {
  font-size: 16px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0;
}
.pu-sec-head-dark .pu-sec-lede { color: var(--dark-muted); }

/* ===== Intro ===== */
.pu-intro {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 80px;
  align-items: start;
}
@media (max-width: 820px) {
  .pu-intro { grid-template-columns: 1fr; gap: 40px; }
}
.pu-intro-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(28px, 3.2vw, 44px);
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 16px 0 28px;
  word-break: keep-all;
}
.pu-intro-body {
  font-size: 16px;
  line-height: 1.85;
  color: var(--ink-2);
  margin: 0 0 18px;
  word-break: keep-all;
}
.pu-hl {
  background: linear-gradient(180deg, transparent 62%, rgba(138,106,76,.18) 62%);
}
.pu-intro-photo {
  position: relative;
  width: 80%;
  margin-left: auto;
  aspect-ratio: 5 / 6;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--bg-2);
}
@media (max-width: 820px) {
  .pu-intro-photo { width: 100%; margin-left: 0; }
}
.pu-intro-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ===== Benefits ===== */
.pu-benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  margin-bottom: 80px;
}
@media (max-width: 900px) {
  .pu-benefits-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .pu-benefits-grid { grid-template-columns: 1fr; }
}
.pu-benefit {
  background: var(--bg);
  padding: 40px 36px 36px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  transition: background .25s ease;
}
.pu-benefit:hover { background: var(--paper); }
.pu-benefit-dark {
  background: var(--ink);
  color: var(--on-dark);
}
.pu-benefit-dark:hover { background: var(--ink); }
.pu-benefit-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}
.pu-benefit-lbl {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}
.pu-benefit-dark .pu-benefit-lbl { color: #d9b790; }
.pu-benefit-idx {
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
  .pu-benefit-idx { font-size: 32px; }
}
.pu-benefit-dark .pu-benefit-idx { color: #d9b790; opacity: .55; }
.pu-benefit-title {
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
.pu-benefit-dark .pu-benefit-title { color: #fff; }
.pu-benefit-title-line { display: block; }
.pu-benefit-body {
  font-size: 14px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0;
  min-height: calc(1.75em * 3);
}
.pu-benefit-dark .pu-benefit-body { color: rgba(255,255,255,.7); }
.pu-benefit-spec {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding-top: 18px;
  margin-top: auto;
  border-top: 1px solid var(--line);
}
.pu-benefit-dark .pu-benefit-spec { border-top-color: rgba(255,255,255,.14); }
.pu-spec-k {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.pu-benefit-dark .pu-spec-k { color: #d9b790; }
.pu-spec-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 16px;
  color: var(--ink);
  font-variant-numeric: lining-nums;
}
.pu-benefit-dark .pu-spec-v { color: #fff; }

/* ===== Compare ===== */
.pu-compare {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 1px solid var(--line);
}
@media (max-width: 820px) {
  .pu-compare { grid-template-columns: 1fr; }
}
.pu-compare-col {
  background: var(--bg);
  padding: 36px 32px;
  border-right: 1px solid var(--line);
}
.pu-compare-col:last-child { border-right: none; }
@media (max-width: 820px) {
  .pu-compare-col {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }
  .pu-compare-col:last-child { border-bottom: none; }
}
.pu-compare-col.pu-is-hero {
  background: var(--ink);
  color: var(--on-dark);
}
.pu-compare-head {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--line);
}
.pu-compare-col.pu-is-hero .pu-compare-head { border-bottom-color: rgba(255,255,255,.14); }
.pu-compare-name {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -0.005em;
  color: var(--ink);
  margin: 0;
}
.pu-compare-col.pu-is-hero .pu-compare-name { color: #fff; }
.pu-compare-tag {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.pu-compare-col.pu-is-hero .pu-compare-tag { color: #d9b790; }
.pu-compare-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.pu-compare-list li {
  font-size: 14px;
  line-height: 1.7;
  color: var(--ink-2);
  padding-left: 14px;
  position: relative;
}
.pu-compare-list li::before {
  content: '';
  position: absolute;
  left: 0; top: 0.75em;
  width: 6px; height: 1px;
  background: var(--muted-2);
}
.pu-compare-col.pu-is-hero .pu-compare-list li { color: rgba(255,255,255,.85); }
.pu-compare-col.pu-is-hero .pu-compare-list li::before { background: #d9b790; }

/* ===== Spaces ===== */
.pu-spaces { list-style: none; padding: 0; margin: 0; }
.pu-space-row {
  display: grid;
  grid-template-columns: 90px 1fr 2fr 100px;
  gap: 32px;
  align-items: center;
  padding: 32px 8px;
  border-bottom: 1px solid var(--line);
  transition: background .25s ease, padding .25s ease;
}
.pu-space-row:first-child { border-top: 1px solid var(--line); }
.pu-space-row:hover {
  background: var(--paper);
  padding-left: 28px;
}
.pu-space-row:hover .pu-space-more { color: var(--accent); }
.pu-space-row:hover .pu-space-arr { transform: translateX(4px); }
.pu-space-code {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.pu-space-lbl { display: flex; flex-direction: column; gap: 4px; }
.pu-space-ko {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 21px;
  color: var(--ink);
  letter-spacing: -0.005em;
}
.pu-space-en {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.pu-space-desc {
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--muted);
}
.pu-space-more {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
  text-align: right;
  transition: color .25s ease;
}
.pu-space-arr {
  display: inline-block;
  margin-left: 4px;
  transition: transform .3s ease;
}
@media (max-width: 820px) {
  .pu-space-row {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 24px 8px;
  }
  .pu-space-row:hover { padding-left: 18px; }
  .pu-space-code { display: none; }
  .pu-space-desc, .pu-space-more { grid-column: 1; }
  .pu-space-more { text-align: left; }
}

/* ===== Before · After ===== */
.pu-ba-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
@media (max-width: 820px) { .pu-ba-grid { grid-template-columns: 1fr; } }
.pu-ba-item { margin: 0; }
.pu-ba-photo {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #1f1a14;
  border: 1px solid rgba(255,255,255,.1);
}
.pu-ba-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.pu-ba-pill {
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
.pu-ba-pill-light {
  background: rgba(255,255,255,.92);
  color: var(--ink);
}
.pu-ba-pill-accent {
  background: #d9b790;
  color: var(--dark);
}
.pu-ba-cap { padding: 22px 4px 0; }
.pu-ba-cap-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 1.4;
  color: var(--on-dark);
  margin: 0 0 8px;
}
.pu-ba-cap-body {
  font-size: 14px;
  line-height: 1.7;
  color: var(--dark-muted);
  margin: 0;
}
.pu-ba-bottom {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 32px 0 0;
  margin: 80px 0 0;
  border-top: 1px solid rgba(255,255,255,.14);
  gap: 0;
}
@media (max-width: 820px) {
  .pu-ba-bottom { grid-template-columns: repeat(2, 1fr); row-gap: 24px; }
}
.pu-ba-bottom li {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 18px;
  border-right: 1px solid rgba(255,255,255,.14);
}
.pu-ba-bottom li:last-child { border-right: none; }
.pu-ba-bottom li:not(:first-child) { padding-left: 18px; }
@media (max-width: 820px) {
  .pu-ba-bottom li:nth-child(2) { border-right: none; }
  .pu-ba-bottom li:nth-child(3) { padding-left: 0; }
}
.pu-ba-bot-k {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
}
.pu-ba-bot-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 18px;
  color: var(--on-dark);
  letter-spacing: -0.005em;
}
@media (max-width: 820px) {
  .pu-ba-bot-v { font-size: 16px; }
}

/* ===== Related ===== */
.pu-related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .pu-related-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .pu-related-grid { grid-template-columns: 1fr; }
}
.pu-related-card {
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
.pu-related-card:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.pu-related-idx {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.pu-related-card:hover .pu-related-idx { color: #d9b790; }
.pu-related-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.35;
  color: var(--ink);
  margin: 0;
  letter-spacing: -0.005em;
}
.pu-related-card:hover .pu-related-title { color: #fff; }
.pu-related-desc {
  font-size: 13px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}
.pu-related-card:hover .pu-related-desc { color: rgba(255,255,255,.75); }
.pu-related-more {
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
.pu-related-card:hover .pu-related-more { color: #d9b790; }
.pu-related-arr { transition: transform .3s ease; }
.pu-related-card:hover .pu-related-arr { transform: translateX(4px); }

/* ===== CTA Band ===== */
.pu-cta-band {
  background: var(--bg-2);
  border-top: 1px solid var(--line);
  padding: 72px 0;
}
@media (max-width: 720px) {
  .pu-cta-band { padding: 56px 0; }
}
.pu-cta-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 32px;
  align-items: center;
}
@media (max-width: 820px) {
  .pu-cta-row { grid-template-columns: 1fr; gap: 24px; }
}
.pu-cta-text { display: flex; flex-direction: column; gap: 8px; }
.pu-cta-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(22px, 2.5vw, 30px);
  line-height: 1.4;
  letter-spacing: -0.005em;
  color: var(--ink);
  margin: 0;
  word-break: keep-all;
}
.pu-cta-sub {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}
.pu-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
}
@media (max-width: 820px) {
  .pu-cta-actions {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 8px;
  }
  .pu-cta-actions .pu-btn {
    flex: 1 1 0;
    min-width: 0;
    padding: 14px 12px;
    font-size: 13px;
    white-space: nowrap;
    justify-content: center;
  }
}

/* ===== Buttons ===== */
.pu-btn {
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
.pu-btn-arr { transition: transform .3s ease; }
.pu-btn:hover .pu-btn-arr { transform: translateX(4px); }
.pu-btn-primary {
  background: var(--ink);
  color: var(--paper);
}
.pu-btn-primary:hover { background: var(--accent-deep); }
.pu-btn-ghost {
  background: transparent;
  border: 1px solid var(--line-strong);
  color: var(--ink);
}
.pu-btn-ghost:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
`;
