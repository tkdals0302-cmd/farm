import { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import FloatingCTA from '../../components/feature/FloatingCTA';
import { useSeo } from '../../lib/useSeo';
import {
  filterPortfolio,
  SPACES,
  REGIONS,
  MATERIALS,
  type Space,
  type Region,
  type Material,
} from '../../data/portfolio';
import PortfolioCard from './PortfolioCard';

const PAGE_SIZE = 9;

export default function PortfolioListPage() {
  useSeo();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [spaces, setSpaces] = useState<Space[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => filterPortfolio({ spaces, regions, materials }),
    [spaces, regions, materials]
  );

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [spaces, regions, materials]);

  const visibleItems = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const totalCount = filtered.length;
  const hasFilter = spaces.length + regions.length + materials.length > 0;

  const resetFilters = () => {
    setSpaces([]);
    setRegions([]);
    setMaterials([]);
  };

  return (
    <div className="pf-page min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* ===== Hero ===== (info/why-grout의 wg-hero 패턴 통일) */}
      <header className="pf-hero" data-screen-label="Hero">
        <div className="pf-hero-bg" aria-hidden="true" />
        <div className="pf-container pf-hero-inner">
          <div className="pf-eyebrow pf-eyebrow-light">Portfolio</div>
          <h1 className="pf-hero-title">
            줄눈 한 줄로
            <br />
            <em>달라진 공간들</em>.
          </h1>
          <p className="pf-hero-lede">
            디테일라인이 시공한 시공 사례 모음입니다.<br />
            욕실·베란다·현관·주방등 케라폭시·폴리우레아 시공 결과를 단지·평수·자재별로 직접 확인하세요.
          </p>
        </div>
      </header>

      {/* ===== Breadcrumb (info/why-grout의 wg-crumb 패턴 동일) ===== */}
      <nav className="pf-crumb" aria-label="현재 위치">
        <div className="pf-container pf-crumb-inner">
          <Link to="/" className="pf-crumb-item">홈</Link>
          <span className="pf-crumb-sep">/</span>
          <span className="pf-crumb-here">시공사례</span>
        </div>
      </nav>

      <main className="pt-6 md:pt-6 pb-24">
        {/* Filter Bar */}
        <div className="px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto mb-8 pb-6 border-b border-[var(--line)]">
          <div className="flex flex-wrap gap-2 items-center">
            <FilterChip
              label="공간"
              options={SPACES}
              selected={spaces}
              onChange={setSpaces}
            />
            <FilterChip
              label="지역"
              options={REGIONS}
              selected={regions}
              onChange={setRegions}
            />
            <FilterChip
              label="자재"
              options={MATERIALS}
              selected={materials}
              onChange={setMaterials}
            />
            {hasFilter && (
              <button
                onClick={resetFilters}
                className="ml-1.5 text-xs text-[var(--muted)] hover:text-[var(--ink)] underline underline-offset-2 cursor-pointer"
              >
                필터 초기화
              </button>
            )}
            <span className="ml-auto text-[12.5px] tracking-[0.06em] text-[var(--muted-2)] font-medium">
              총 <span className="text-[var(--ink)]">{totalCount}</span>건
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto">
          {visibleItems.length === 0 ? (
            <EmptyState onReset={resetFilters} hasFilter={hasFilter} />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {visibleItems.map((item) => (
                  <PortfolioCard key={item.slug} item={item} />
                ))}
              </div>
              {hasMore && (
                <div className="text-center mt-14">
                  <button
                    onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-[var(--line-strong)] rounded-[2px] text-sm font-medium text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors cursor-pointer"
                  >
                    더보기
                    <span className="text-[var(--muted-2)]">
                      ({filtered.length - visibleCount}건 남음)
                    </span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <FloatingCTA />
      <Footer />

      <style>{PF_CSS}</style>
    </div>
  );
}

// ─── FilterChip ───
function FilterChip<T extends string>({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: readonly T[];
  selected: T[];
  onChange: (next: T[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const toggle = (o: T) => {
    onChange(selected.includes(o) ? selected.filter((s) => s !== o) : [...selected, o]);
  };

  const active = selected.length > 0;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`h-9 px-4 rounded-full text-[13px] border transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
          active
            ? 'bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)]'
            : 'bg-[var(--paper)] border-[var(--line)] text-[var(--ink)] hover:border-[var(--line-strong)]'
        }`}
      >
        {label}
        {active && (
          <span className="text-[11px] text-[var(--accent-soft)]">
            ({selected.length})
          </span>
        )}
        <i className={`ri-arrow-down-s-line text-base leading-none transition-transform ${open ? 'rotate-180' : ''}`}></i>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] shadow-[0_18px_36px_-20px_rgba(28,25,22,0.22)] z-20 min-w-[180px] py-2">
          {options.map((o) => (
            <button
              key={o}
              onClick={() => toggle(o)}
              className="w-full px-4 py-2.5 text-left text-[13.5px] flex items-center gap-2.5 hover:bg-[var(--bg-2)] cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(o)}
                readOnly
                className="accent-[var(--accent)] cursor-pointer"
              />
              <span className={selected.includes(o) ? 'text-[var(--ink)] font-medium' : 'text-[var(--ink-2)]'}>
                {o}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── EmptyState ───
function EmptyState({ onReset, hasFilter }: { onReset: () => void; hasFilter: boolean }) {
  return (
    <div className="text-center py-24 border border-dashed border-[var(--line)] bg-[var(--paper)]">
      <i className="ri-search-line text-5xl text-[var(--muted-2)] opacity-60"></i>
      <p
        className="mt-5 text-[20px] text-[var(--ink)]"
        style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
      >
        {hasFilter ? '해당 조건의 사례가 없습니다' : '시공 사례가 곧 공개됩니다'}
      </p>
      <p className="mt-2 text-sm text-[var(--muted)]">
        {hasFilter ? '다른 조건으로 다시 시도해보세요' : '실제 현장 사례를 정리해 업로드 중입니다'}
      </p>
      {hasFilter && (
        <button
          onClick={onReset}
          className="mt-7 px-5 py-2.5 border border-[var(--line-strong)] rounded-[2px] text-sm text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors cursor-pointer"
        >
          필터 초기화
        </button>
      )}
    </div>
  );
}

// ─── PF Hero CSS (info/why-grout의 wg-hero 패턴과 동일, prefix만 pf-*) ───
const PF_CSS = `
.pf-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 32px;
}
@media (max-width: 720px) {
  .pf-container { padding: 0 20px; }
}

.pf-eyebrow {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.pf-eyebrow-light { color: #d9b790; }

.pf-page em { font-style: normal; color: var(--accent); }
.pf-hero em { color: #e3c5a3; }

/* ===== Hero ===== */
.pf-hero {
  position: relative;
  padding: 168px 0 84px;
  overflow: hidden;
  isolation: isolate;
  color-scheme: dark;
}
@media (max-width: 720px) {
  .pf-hero { padding: 120px 0 64px; }
}
.pf-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 1px, transparent 1px 24px),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.25), transparent 60%),
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
.pf-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.25), rgba(0,0,0,.65) 80%);
  pointer-events: none;
}
.pf-hero-inner { position: relative; z-index: 1; }
.pf-hero-title {
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
.pf-hero-lede {
  font-size: 15.5px;
  line-height: 1.75;
  color: rgba(255,255,255,.78);
  margin: 0;
  word-break: keep-all;
}

/* ===== Breadcrumb ===== */
.pf-crumb {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.pf-crumb-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--muted-2);
}
@media (max-width: 720px) {
  .pf-crumb-inner { padding: 14px 20px; }
}
.pf-crumb-item {
  color: var(--muted-2);
  text-decoration: none;
  transition: color .2s ease;
}
.pf-crumb-item:hover { color: var(--accent); }
.pf-crumb-sep { opacity: .4; }
.pf-crumb-here { color: var(--ink); }
`;
