const items = [
  {
    n: '01',
    t: '대표 직접 시공',
    en: 'Founder on every site',
    d: '외주·하청 없습니다. 첫 현장부터 마지막 줄눈까지 대표가 직접 와서 시공합니다. 7년차, 2,400 가구의 손맛 그대로.',
  },
  {
    n: '02',
    t: 'KC 인증 친환경 자재',
    en: 'Certified, low-VOC',
    d: '케라폭시·정품 폴리우레아만 사용합니다. 각 시공한 자재서에 가족이 있는 동네 수준의 친환경 등급을 고집합니다.',
  },
  {
    n: '03',
    t: '2년 무상 A/S · 서면',
    en: '2-year written warranty',
    d: '에폭시 계열 자재 시공에 한해 시공 후 2년간 무상 재시공. 들뜸·변색·곰팡이가 발생하면 서면 보증서대로 책임집니다.',
  },
  {
    n: '04',
    t: '정밀 기계 작업',
    en: 'Calibrated tooling',
    d: '커터·믹서·트랜퍼스 — 도구 하나하나를 매 현장 캘리브레이션. 균일한 폭, 균일한 마감, 균일한 광택.',
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-[var(--dark)] py-20 px-6 md:px-12 lg:px-20">
      <div className="why-bg" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase">Why Detailline</span>
          <h2
            className="text-4xl md:text-5xl font-medium text-[var(--on-dark)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            싸지 않습니다. 대신<br />
            10년 후에도 그 자리에 있습니다.
          </h2>
          <p className="text-white/70 mt-1 sm:mt-3 text-base max-w-[56ch]">
            저희는 가장 싼 업체가 아닙니다. 가장 오래 가게 만드는 업체입니다.<br />
            아래 네 가지는 디테일라인이 단 한 번도 타협한 적 없는 기준입니다.
          </p>
        </div>

        {/* 4 columns */}
        <div className="why-grid mt-12">
          {items.map((it) => (
            <div className="why-cell" key={it.n}>
              <span className="why-cell-num">— {it.n}</span>
              <h3 className="why-cell-title">{it.t}</h3>
              <p className="why-cell-en">{it.en}</p>
              <p className="why-cell-desc">{it.d}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="why-foot">
          <p className="why-quote-text">
            “줄눈은 결국 사람이 합니다. 그 위에 누가 잡고 있느냐가 10년을 가릅니다.”
          </p>
          <span className="why-quote-caption">— 대표 제이슨 —</span>
        </div>
      </div>

      <style>{WHY_CSS}</style>
    </section>
  );
}

const WHY_CSS = `
.why-bg {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  pointer-events: none;
  background:
    radial-gradient(60% 50% at 80% 10%, rgba(255,255,255,0.04), transparent 60%),
    radial-gradient(60% 50% at 10% 100%, rgba(255,255,255,0.03), transparent 60%);
}

/* ===== 4-cell grid ===== */
.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid var(--dark-line);
}
@media (max-width: 980px) {
  .why-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .why-grid { grid-template-columns: 1fr; }
}

.why-cell {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 48px 36px 20px;
  border-right: 1px solid var(--dark-line);
}
.why-cell:last-child { border-right: none; }

@media (max-width: 980px) {
  .why-cell { padding: 40px 28px 48px; }
  /* 2x2 grid: remove right border on 2nd col, add bottom border on first row */
  .why-cell:nth-child(2n) { border-right: none; }
  .why-cell:nth-child(-n+2) { border-bottom: 1px solid var(--dark-line); }
}
@media (max-width: 640px) {
  .why-cell {
    padding: 36px 4px 40px;
    border-right: none;
    border-bottom: 1px solid var(--dark-line);
  }
  .why-cell:last-child { border-bottom: none; }
}

.why-cell-num {
  display: block;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 20px;
}

.why-cell-title {
  font-size: 22px;
  font-weight: 500;
  color: var(--on-dark);
  margin: 0 0 6px;
  letter-spacing: -0.01em;
  line-height: 1.35;
}

.why-cell-en {
  font-family: 'Noto Serif KR', Georgia, serif;
  font-style: italic;
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.42);
  margin: 0 0 24px;
}

.why-cell-desc {
  font-size: 14.5px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin: auto 0 0;
}

/* ===== Footer ===== */
.why-foot {
  margin-top: 60px;
  padding-top: 28px;
  border-top: 1px solid var(--dark-line);
  text-align: center;
}

.why-quote-text {
  font-family: 'Noto Serif KR', Georgia, serif;
  font-style: italic;
  font-size: 22px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 10px;
  font-weight: 400;
  white-space: nowrap;
}
.why-quote-caption {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-style: normal;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
}

@media (max-width: 900px) {
  .why-quote-text { white-space: normal; font-size: 19px; }
}
`;
