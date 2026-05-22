import re1Img from '../../../assets/images/reviews/re_1.jpg';
import re2Img from '../../../assets/images/reviews/re_2.jpg';
import re3Img from '../../../assets/images/reviews/re_3.jpg';

interface Review {
  star: number;
  t: string;
  name: string;
  photo: { label: string; corner: string; src: string | null };
  body: string;
}

const items: Review[] = [
  {
    star: 5,
    t: '줄눈은 다 똑같은 줄 알았는데',
    name: '최OO 고객님',
    photo: { label: 'BANPO', corner: '거실 특', src: re1Img },
    body: '다른 곳에서 한 줄눈이 2년만에 변색됐어요. 디테일라인은 하루 종일 걸렸지만 마감이 차원이 다릅니다. 모서리, 코너, 실리콘까지 손이 갔어요. 비싸지만 다시 하라면 또 합니다.',
  },
  {
    star: 5,
    t: '대표님이 직접 오십니다',
    name: '정OO 고객님',
    photo: { label: 'HANNAM', corner: '욕실', src: re2Img },
    body: '견적부터 시공, A/S 안내까지 같은 분이세요. 중간에 누구한테 다시 설명할 필요가 없습니다. 시공도 깔끔하고, 시공 후에도 친절히 안내해 주시고요.',
  },
  {
    star: 5,
    t: '2년 보증서 진짜 줍니다',
    name: '강OO 고객님',
    photo: { label: 'JAMSIL', corner: '욕실', src: re3Img },
    body: '대부분 구두 보증인데 여기는 서면으로 보증서를 줍니다. 솔직히 그거 하나만으로도 결정 났어요. 시공도 깔끔하고 청소까지 다 해주고 가시는 게 인상 깊었습니다.',
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="rev-stars" role="img" aria-label={`별점 5점 만점에 ${n}점`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          className={i < n ? 'rev-star rev-star-filled' : 'rev-star rev-star-empty'}
          width="13"
          height="13"
          viewBox="0 0 13 13"
          aria-hidden="true"
        >
          <path d="M6.5 0l1.8 4.3 4.7.4-3.6 3 1.1 4.6L6.5 9.9 2.5 12.3l1.1-4.6L0 4.7l4.7-.4z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="rev-section bg-[var(--bg-2)] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase">Reviews</span>
          <h2
            className="text-4xl md:text-5xl font-medium text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            <span className="md:block text-[var(--accent)]">지금까지 2,000세대 이상의</span>{' '}
            <span className="md:block">가족이 맡겨 주셨습니다</span>
          </h2>
          <p className="text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]">
            실제 시공 후 30일 내 작성된 후기 중 일부입니다.<br />
            좋은 말씀도, 아쉬운 말씀도 모두 받고 있습니다.
          </p>
        </div>

        {/* Cards */}
        <div className="rev-grid mt-12">
          {items.map((r) => (
            <article className="rev-card" key={r.name}>
              <div className="rev-card-photo">
                <div className={`rev-imgph ${r.photo.src ? 'has-photo' : ''}`}>
                  {r.photo.src ? (
                    <img src={r.photo.src} alt={`${r.photo.label} · ${r.photo.corner}`} className="rev-imgph-img" loading="lazy" />
                  ) : (
                    <span className="rev-imgph-label" aria-hidden="true">{r.photo.label}</span>
                  )}
                  <span className="rev-imgph-corner" aria-hidden="true">{r.photo.corner}</span>
                </div>
              </div>
              <div className="rev-card-body">
                <Stars n={r.star} />
                <h3 className="rev-card-title">“{r.t}”</h3>
                <p className="rev-card-text">{r.body}</p>
                <div className="rev-card-footer">
                  <div className="rev-card-name">{r.name}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      <style>{REV_CSS}</style>
    </section>
  );
}

const REV_CSS = `
.rev-section {
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}

/* ===== Card grid ===== */
.rev-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
@media (max-width: 900px) {
  .rev-grid { grid-template-columns: 1fr; }
}

.rev-card {
  display: flex;
  flex-direction: column;
  background: var(--paper);
  border-right: 1px solid var(--line);
  height: 100%;
}
.rev-card:last-child { border-right: none; }
@media (max-width: 900px) {
  .rev-card {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }
  .rev-card:last-child { border-bottom: none; }
}

/* ===== Mobile: horizontal scroll-snap carousel ===== */
@media (max-width: 560px) {
  .rev-grid {
    display: flex;
    grid-template-columns: none;
    gap: 16px;
    overflow-x: auto;
    overflow-y: visible;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 20px;
    margin-left: -20px;
    margin-right: -20px;
    padding: 4px 20px 8px;
    border-top: none;
    border-bottom: none;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .rev-grid::-webkit-scrollbar { display: none; }
  .rev-card {
    flex: 0 0 85%;
    min-width: 0;
    scroll-snap-align: start;
    border-right: none;
    border-bottom: none;
  }
}

.rev-card-photo { padding: 0; }
.rev-imgph {
  position: relative;
  aspect-ratio: 4 / 3;
  width: 100%;
  overflow: hidden;
  background:
    radial-gradient(120% 80% at 30% 20%, rgba(255,255,255,0.07), transparent 50%),
    radial-gradient(100% 70% at 80% 100%, rgba(138,106,76,0.20), transparent 60%),
    linear-gradient(180deg, #221b13 0%, #18130e 60%, #120e09 100%);
  color: #f3ece1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rev-imgph.has-photo { background: var(--dark); }
.rev-imgph-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.rev-imgph.has-photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%);
  pointer-events: none;
}
.rev-imgph-label {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: clamp(13px, 1.4vw, 17px);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(243, 236, 225, 0.78);
}
.rev-imgph-corner {
  position: absolute;
  top: 14px;
  right: 16px;
  z-index: 1;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: rgba(243, 236, 225, 0.85);
  text-transform: uppercase;
}

.rev-card-body {
  padding: 32px 36px 36px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
@media (max-width: 560px) {
  .rev-card-body { padding: 28px 24px 28px; }
}

/* ===== Stars ===== */
.rev-stars { display: inline-flex; gap: 2px; margin-bottom: 18px; }
.rev-star-filled { fill: var(--accent); }
.rev-star-empty { fill: var(--bg-2); }

/* ===== Quote title ===== */
.rev-card-title {
  font-weight: 500;
  line-height: 1.3;
  font-size: clamp(20px, 1.5vw, 24px);
  color: var(--ink);
  margin: 0 0 18px;
  letter-spacing: -0.01em;
}

/* ===== Body ===== */
.rev-card-text {
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.7;
  margin: 0 0 32px;
}

/* ===== Card footer ===== */
.rev-card-footer {
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid var(--line);
}
.rev-card-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink);
}
`;
