import bathroomImg from '../../../assets/images/scope/bathroom.JPG';
import outdoorWcImg from '../../../assets/images/scope/outdoor_wc.JPG';
import livingImg from '../../../assets/images/scope/living.jpg';
import entranceImg from '../../../assets/images/scope/entrance.jpg';
import verandaImg from '../../../assets/images/scope/veranda.jpg';
import commercialImg from '../../../assets/images/scope/commercial.jpg';

interface ScopeItem {
  n: string;
  t: string;
  en: string;
  d: string;
  tag: string;
  photo: string | null;
}

const items: ScopeItem[] = [
  {
    n: '01',
    t: '욕실 · 화장실',
    en: 'Bathroom',
    d: '에폭시 계열 전용. 물이 닿는 환경엔 폴리우레아 시공 불가 → 2년 무상 A/S 대상.',
    tag: '에폭시 계열',
    photo: bathroomImg,
  },
  {
    n: '02',
    t: '외부 화장실',
    en: 'Outdoor WC',
    d: '내부 화장실과 동일 → 에폭시 계열만 시공. 물 접촉 환경에서 폴리우레아 시공 불가.',
    tag: '에폭시 계열',
    photo: outdoorWcImg,
  },
  {
    n: '03',
    t: '거실',
    en: 'Living',
    d: '바닥 줄눈. 20평대 기준 폴리우레아 100만원 · 에폭시 150만원. 30평+ 별도 견적.',
    tag: '에폭시 / 폴리우레아',
    photo: livingImg,
  },
  {
    n: '04',
    t: '현관',
    en: 'Entrance',
    d: '첫인상을 결정짓는 1평. 외부 접촉 폴리우레아 가성비 선택 권장.',
    tag: '폴리우레아 권장',
    photo: entranceImg,
  },
  {
    n: '05',
    t: '베란다',
    en: 'Veranda',
    d: '결로·온도차에 폴리우레아 권장. 빠른 경화 2~4시간 마무리.',
    tag: '폴리우레아 권장',
    photo: verandaImg,
  },
  {
    n: '06',
    t: '상업 공간',
    en: 'Commercial',
    d: '카페·매장·호텔·수영장. 야간·새벽 시공 협의 가능. 환경별 자재 매칭.',
    tag: '맞춤 자재',
    photo: commercialImg,
  },
];

export default function Scope() {
  return (
    <section id="scope" className="scope-section bg-[var(--bg)] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase">Scope</span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--ink)] mt-2 leading-[1.25]">
            줄눈이 필요한 <span className="text-[var(--accent)]">모든 곳에</span>
          </h2>
          <p className="text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]">
            주거 · 상업 · 시설까지. 디테일라인은 환경별로 자재와 시공 방식을 다르게 가져갑니다.<br />
            한 가지 방법으로 모든 곳을 시공하지 않습니다.
          </p>
        </div>

        {/* Card grid */}
        <div className="scope-grid mt-12">
          {items.map((it) => (
            <article className="scope-card" key={it.n}>
              <div className={`scope-imgph ${it.photo ? 'has-photo' : ''}`}>
                {it.photo ? (
                  <img src={it.photo} alt={it.t} className="scope-imgph-img" loading="lazy" />
                ) : (
                  <span className="scope-imgph-label" aria-hidden="true">{it.en.toUpperCase()}</span>
                )}
                <span className="scope-imgph-corner" aria-hidden="true">{it.n}</span>
              </div>
              <div className="scope-meta">
                <span className="scope-meta-mono">— {it.n} · {it.en.toUpperCase()}</span>
                <h3 className="scope-meta-title">{it.t}</h3>
                <p className="scope-meta-body">{it.d}</p>
                <span className="scope-meta-tag">
                  <span className="scope-tag-dot" aria-hidden="true" />
                  {it.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{SCOPE_CSS}</style>
    </section>
  );
}

const SCOPE_CSS = `
.scope-section {
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}

/* ===== Card grid ===== */
.scope-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 32px;
}
@media (max-width: 980px) {
  .scope-grid { grid-template-columns: repeat(2, 1fr); gap: 40px 24px; }
}

.scope-card {
  display: flex;
  flex-direction: column;
}

/* ===== Mobile: horizontal scroll-snap carousel ===== */
@media (max-width: 560px) {
  .scope-grid {
    display: flex;
    grid-template-columns: none;
    gap: 16px;
    overflow-x: auto;
    overflow-y: visible;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 20px;
    /* bleed past section padding so cards can edge-peek */
    margin-left: -20px;
    margin-right: -20px;
    padding: 4px 20px 8px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .scope-grid::-webkit-scrollbar { display: none; }
  .scope-card {
    flex: 0 0 78%;
    min-width: 0;
    scroll-snap-align: start;
  }
}

/* ===== Image / placeholder ===== */
.scope-imgph {
  position: relative;
  aspect-ratio: 4 / 5;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  background:
    radial-gradient(120% 80% at 30% 20%, rgba(255,255,255,0.06), transparent 50%),
    radial-gradient(100% 70% at 80% 100%, rgba(138,106,76,0.18), transparent 60%),
    linear-gradient(180deg, #221b13 0%, #18130e 60%, #120e09 100%);
  color: var(--on-dark);
  display: flex;
  align-items: center;
  justify-content: center;
}
.scope-imgph.has-photo {
  background: var(--dark);
}
.scope-imgph-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.scope-imgph.has-photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%);
  pointer-events: none;
}
.scope-imgph-label {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: clamp(13px, 1.4vw, 17px);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(243, 236, 225, 0.78);
}
.scope-imgph-corner {
  position: absolute;
  top: 14px;
  right: 16px;
  z-index: 1;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: rgba(243, 236, 225, 0.7);
}

/* ===== Meta ===== */
.scope-meta {
  padding-top: 20px;
}
.scope-meta-mono {
  display: block;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
  margin-bottom: 8px;
}
.scope-meta-title {
  font-size: 19px;
  font-weight: 500;
  color: var(--ink);
  margin: 0 0 8px;
  letter-spacing: -0.01em;
  line-height: 1.35;
}
.scope-meta-body {
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0 0 14px;
}
.scope-meta-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  border-top: 1px solid var(--line);
  padding-top: 8px;
}
.scope-tag-dot {
  width: 5px;
  height: 5px;
  background: var(--accent);
  display: inline-block;
  border-radius: 0;
}
`;
