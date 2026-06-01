import { useState, useMemo, useEffect, useRef } from 'react';
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
    <div className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      <main className="pt-24 md:pt-28 pb-24">
        {/* Header — v2 §5 */}
        <header className="px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto mb-12">
          <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.18em] text-[var(--accent)] uppercase">
            <span className="inline-block w-1.5 h-1.5 bg-[var(--accent)]" />
            Portfolio
          </span>
          <h1
            className="text-[clamp(34px,4.8vw,56px)] text-[var(--ink)] mt-4 leading-[1.18] tracking-[-0.02em] break-keep"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 400 }}
          >
            줄눈 한 줄로 <em className="not-italic text-[var(--accent)]">달라진 공간들</em>
          </h1>
          <p className="text-[var(--muted)] mt-5 text-[15.5px] md:text-[17px] leading-[1.75] break-keep max-w-[60ch]">
            디테일라인이 시공한 시공 사례 모음입니다. 욕실·베란다·현관·주방등 케라폭시·폴리우레아 시공 결과를 단지·평수·자재별로 직접 확인하세요.
          </p>
        </header>

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
