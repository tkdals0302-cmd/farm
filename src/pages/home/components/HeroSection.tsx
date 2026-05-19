import { useEffect, useState } from 'react';
import bathroomAfter from '../../../assets/images/after/bathroom.JPG';
import bathroomDetail from '../../../assets/images/after/bathroom_detail.JPG';
import bathroom2After from '../../../assets/images/after/bathroom_2.JPG';
import bathroom2Detail from '../../../assets/images/after/bathroom_2_detail.JPG';
import bathroom3After from '../../../assets/images/after/bathroom_3.JPG';
import bathroom3Detail from '../../../assets/images/after/bathroom_3_detail.JPG';
import balconyAfter from '../../../assets/images/after/balcony.jpg';
import balconyDetail from '../../../assets/images/after/balcony_detail.jpg';
import utilityAfter from '../../../assets/images/after/utilityroom.jpg';
import utilityDetail from '../../../assets/images/after/utilityroom_detail.jpg';

const ACCENT = '#C89770';
const ACCENT_SOFT = '#E6CDB3';
const DARK = '#14110F';

type Case = {
  id: string;
  title: string;
  afterLabel: string;
  beforeLabel: string;
  afterImage: string;
  beforeImage: string;
};

const CASES: Case[] = [
  {
    id: 'bath',
    title: 'BATHROOM · 욕실',
    afterLabel: 'GROUT DETAIL · BATHROOM',
    beforeLabel: '욕실',
    afterImage: bathroomAfter,
    beforeImage: bathroomDetail,
  },
  {
    id: 'bath-2',
    title: 'BATHROOM 02 · 욕실',
    afterLabel: 'GROUT DETAIL · BATHROOM',
    beforeLabel: '욕실',
    afterImage: bathroom2After,
    beforeImage: bathroom2Detail,
  },
  {
    id: 'bath-3',
    title: 'BATHROOM 03 · 욕실',
    afterLabel: 'GROUT DETAIL · BATHROOM',
    beforeLabel: '욕실',
    afterImage: bathroom3After,
    beforeImage: bathroom3Detail,
  },
  {
    id: 'balcony',
    title: 'BALCONY · 베란다',
    afterLabel: 'GROUT DETAIL · BALCONY',
    beforeLabel: '베란다',
    afterImage: balconyAfter,
    beforeImage: balconyDetail,
  },
  {
    id: 'utility',
    title: 'UTILITY · 다용도실',
    afterLabel: 'GROUT DETAIL · UTILITY',
    beforeLabel: '다용도실',
    afterImage: utilityAfter,
    beforeImage: utilityDetail,
  },
];

const TRUST_ITEMS = ['2년 무상 AS 보장', '국내산 친환경 자재', '24시간 무료 견적 상담'];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="shrink-0">
      <circle cx="7" cy="7" r="6.5" fill="none" stroke={ACCENT} strokeWidth="1" />
      <path
        d="M4 7l2 2 4-4"
        stroke={ACCENT}
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0">
      <path
        d="M2 8h12M9 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GalleryPrevIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GalleryNextIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroSection() {
  const [caseIdx, setCaseIdx] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setCaseIdx((i) => (i - 1 + CASES.length) % CASES.length);
      if (e.key === 'ArrowRight') setCaseIdx((i) => (i + 1) % CASES.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Auto-advance gallery every 3s; resets on manual change
  useEffect(() => {
    const id = setInterval(() => {
      setCaseIdx((i) => (i + 1) % CASES.length);
    }, 3000);
    return () => clearInterval(id);
  }, [caseIdx]);

  const scrollToQuote = () => {
    const el = document.querySelector('#quote');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const el = document.querySelector('#portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const total = CASES.length;
  const current = CASES[caseIdx];
  const progress = ((caseIdx + 1) / total) * 100;
  const next = () => setCaseIdx((i) => (i + 1) % total);
  const prev = () => setCaseIdx((i) => (i - 1 + total) % total);

  return (
    <section
      className="relative w-full overflow-hidden hero-bg hero-grid-texture"
      style={{ minHeight: '100svh' }}
    >
      {/* Main two-column grid */}
      <div className="hero-v2-grid">
        {/* LEFT — Content */}
        <div className="w-full max-w-[640px]">
          <div
            className="flex items-center hero-reveal hero-reveal-eyebrow"
            style={{ gap: '14px', marginBottom: '28px' }}
          >
            <span
              className="inline-block"
              style={{ width: '28px', height: '1px', backgroundColor: ACCENT }}
              aria-hidden="true"
            />
            <span
              className="hero-mono uppercase"
              style={{ color: ACCENT_SOFT, fontSize: '12px', letterSpacing: '2.4px' }}
            >
              프리미엄 줄눈 시공 · SINCE 2018
            </span>
          </div>

          <h1
            className="text-white hero-reveal hero-reveal-headline"
            style={{
              fontSize: 'clamp(40px, 4.6vw, 68px)',
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: '-2px',
              textWrap: 'balance',
              margin: 0,
            }}
          >
            낡은 줄눈,
            <br />
            하루 만에 <span style={{ color: ACCENT }}>새것처럼.</span>
          </h1>

          <p
            className="hero-reveal hero-reveal-sub"
            style={{
              fontSize: 'clamp(15px, 1.1vw, 17px)',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: '480px',
              marginTop: '28px',
            }}
          >
            시공 전·후 사진으로 먼저 확인하고 결정하세요.
            <br />
            무료 견적은 24시간 이내 답변드립니다.
          </p>

          <ul
            className="flex flex-wrap items-center hero-reveal hero-reveal-trust"
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              marginTop: '28px',
              gap: '8px 22px',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.72)',
            }}
          >
            {TRUST_ITEMS.map((item) => (
              <li key={item} className="flex items-center" style={{ gap: '8px' }}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div
            className="flex flex-col sm:flex-row hero-reveal hero-reveal-ctas"
            style={{ gap: '12px', marginTop: '40px', flexWrap: 'wrap' }}
          >
            <button
              onClick={scrollToQuote}
              className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap"
              style={{
                gap: '10px',
                backgroundColor: ACCENT,
                color: DARK,
                padding: '16px 26px',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 600,
                border: 0,
                boxShadow: '0 12px 30px -10px rgba(241, 127, 33, 0.6)',
                transition: 'transform .15s ease, box-shadow .2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 16px 36px -10px rgba(200, 151, 112, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 30px -10px rgba(200, 151, 112, 0.6)';
              }}
            >
              1분 무료 견적받기
              <ArrowRightIcon />
            </button>
            <button
              onClick={scrollToPortfolio}
              className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-white"
              style={{
                gap: '10px',
                padding: '16px 26px',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 500,
                border: '1px solid rgba(255,255,255,0.3)',
                backgroundColor: 'transparent',
                transition: 'background .15s, border-color .15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              시공 사례 먼저 보기
              <span className="hero-mono" style={{ opacity: 0.5, fontSize: '12px' }}>
                →
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT — Gallery */}
        <div className="gallery">
          {/* Animated content (title + cards) — remounts on case change */}
          <div className="gallery__animated gallery-slide-in" key={current.id}>
            <div className="gallery__title">
              <span className="gallery__title__line" />
              {current.title}
            </div>

            {/* Big AFTER card */}
            <article className="gallery-card gallery-card--big">
              <img
                src={current.afterImage}
                alt={current.afterLabel}
                className="gallery-card__media"
                loading="eager"
              />
              <div className="gallery-card__tag">
                {String(caseIdx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </div>
              <div className="gallery-card__caption">
                <span className="gallery-card__caption__dot" />
                {current.afterLabel}
              </div>
            </article>

            {/* Small BEFORE card (overlap) */}
            <article className="gallery-card gallery-card--small">
              <img
                src={current.beforeImage}
                alt={current.beforeLabel}
                className="gallery-card__media"
                loading="eager"
              />
              <div className="gallery-card__tag gallery-card__tag--dark">DETAIL</div>
              <div className="gallery-card__caption gallery-card__caption--dark">
                <span className="gallery-card__caption__dot" />
                {current.beforeLabel}
              </div>
            </article>
          </div>

          {/* Controls — outside the animated wrapper, stays fixed */}
          <div className="gallery__controls">
            <div className="gallery__nums">
              <b>{String(caseIdx + 1).padStart(2, '0')}</b>
              <span>/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </div>
            <div
              className="gallery__bar"
              style={{ ['--progress' as string]: `${progress}%` }}
            />
            <div className="gallery__arrows">
              <button className="gallery__arrow" onClick={prev} aria-label="이전 케이스">
                <GalleryPrevIcon />
              </button>
              <button className="gallery__arrow" onClick={next} aria-label="다음 케이스">
                <GalleryNextIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Side meta */}
      {/* <div className="hero-side-meta-wrap">
        <span>↓</span>
        SCROLL TO EXPLORE
      </div> */}
    </section>
  );
}
