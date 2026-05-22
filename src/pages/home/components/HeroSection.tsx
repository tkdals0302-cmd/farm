import './HeroSection.css';

const COPY = {
  eyebrow: '오직 줄눈, 6년간 한 길',
  headlineL1: '손끝이 남기는',
  headlineAccent: '줄눈시공',
  headlineTail: '',
  headlineL3: '디테일라인',
  subL1: '시공 전, 후 사진으로 먼저 확인하고 결정하세요.',
  subL2: '무료 견적은 24시간 실시간 답변 드립니다.',
  ctaPrimary: '실시간 무료 견적 상담',
  ctaSecondary: '시공 포트폴리오 →',
  captionTag: 'KERAPOXY',
  captionMeta: '프리미엄 줄눈 시공',
  signatureMeta: '모든 주거공간, 상업공간 시공 가능',
  footerItems: ['2,000세대 이상 시공 경력', '하루 한집 시공', '2년 무상 AS'],
  scrollLabel: 'SCROLL',
  // SEO-only — visually hidden, indexed by crawlers
  srHeading: '서울·경기 줄눈시공 전문 디테일라인 — 화장실·주방·베란다·현관 케라폭시 줄눈 시공',
};

function scrollTo(selector: string) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroSection() {
  return (
    <section className="hero-b-wrap" aria-label="히어로">
      {/* Full-bleed decorative layers */}
      <div className="tile-floor" aria-hidden="true">
        <div className="tile-floor__plane">
          <div className="tile-floor__shine" />
        </div>
      </div>
      <div className="hero-b__tint" aria-hidden="true" />
      <div className="hero-b__vignette" aria-hidden="true" />
      <div className="hero-b__glow" aria-hidden="true" />
      <div className="hero-b__grain" aria-hidden="true" />

      {/* Content — matches portfolio's px-6 md:px-12 lg:px-20 + max-w-7xl pattern */}
      <div className="hero-b__padded">
        <div className="hero-b">
          {/* Hidden keyword-rich heading for crawlers; visual headline below is brand voice */}
          <h2 className="sr-only">{COPY.srHeading}</h2>

          {/* Lead (left) */}
        <div className="hero-b__lead">
          <div className="hero-b__eyebrow">
            <span className="hero-b__eyebrow-line" aria-hidden="true" />
            <span>{COPY.eyebrow}</span>
          </div>
          <h1 className="hero-b__headline">
            {COPY.headlineL1}
            <br />
            <em>{COPY.headlineAccent}</em>
            {COPY.headlineTail}
            <br />
            {COPY.headlineL3}
          </h1>
          <p className="hero-b__sub">
            {COPY.subL1}
            <br />
            {COPY.subL2}
          </p>
          <div className="hero-b__cta-row">
            <button
              type="button"
              className="hero-b__btn"
              onClick={() => scrollTo('#quote')}
            >
              {COPY.ctaPrimary}
              <span className="hero-b__btn-arrow" aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              className="hero-b__btn-link"
              onClick={() => scrollTo('#portfolio')}
            >
              {COPY.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Caption (right top) */}
        <div className="hero-b__caption">
          <div className="hero-b__caption-row">
            <span className="hero-b__caption-dot" aria-hidden="true" />
            <span className="hero-b__caption-after">{COPY.captionTag}</span>
          </div>
          <div className="hero-b__caption-meta">{COPY.captionMeta}</div>
        </div>

        {/* Signature (left bottom) */}
        <div className="hero-b__signature">
          <div className="hero-b__signature-meta">{COPY.signatureMeta}</div>
        </div>

        {/* Footer meta (right bottom) */}
        <div className="hero-b__footer-meta">
          <ul className="hero-b__footer-items">
            {COPY.footerItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero-b__scroll" aria-hidden="true">
            <span>{COPY.scrollLabel}</span>
            <span className="hero-b__scroll-bar" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
