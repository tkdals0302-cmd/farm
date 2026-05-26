import { useEffect, useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { portfolioItems, portfolioCategories, type PortfolioItem } from '../../../mocks/portfolioData';

export default function PortfolioAndReviews() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (!selectedItem) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };

    const scrollY = window.scrollY;
    const html = document.documentElement;
    const body = document.body;
    const prevInlineScrollBehavior = html.style.scrollBehavior;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';

    window.addEventListener('keydown', handleEsc);

    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = prevInlineScrollBehavior;
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedItem]);

  const filtered =
    activeCategory === '전체'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase">Our Work</span>
            <h2
              className="text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep"
              style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
            >
              완성된 프로젝트
            </h2>
            <p className="text-[var(--muted)] mt-1 sm:mt-3 text-base">고객님의 공간을 완벽하게 되살렸습니다</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">

            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-sm text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-white text-[var(--muted)] border border-[var(--line)] hover:border-[var(--line-strong)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-sm overflow-hidden cursor-pointer aspect-[3/4]"
              >
                <img
                  src={item.image}
                  alt={`${item.title} 줄눈시공 사례 - 디테일라인`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                {item.before && item.after && (
                  <span className="absolute top-2 right-2 inline-flex items-center gap-1 bg-[var(--accent)] text-white text-[10px] font-medium px-2 py-0.5 rounded-sm uppercase tracking-[0.12em]">
                    <i className="ri-contrast-2-line"></i>
                    시공 전·후
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-sm mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-sm leading-snug">{item.title}</h3>
                  <p className="text-white/70 text-xs mt-1">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Image Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center px-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute -top-11 right-0 w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              aria-label="닫기"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            <div className="rounded-sm overflow-hidden shadow-2xl bg-[var(--dark)]">
              {selectedItem.before && selectedItem.after ? (
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={selectedItem.before}
                      alt={`${selectedItem.title} 시공 전`}
                      style={{ objectFit: 'cover' }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={selectedItem.after}
                      alt={`${selectedItem.title} 시공 후`}
                      style={{ objectFit: 'cover' }}
                    />
                  }
                  style={{ width: '100%', maxHeight: '80vh' }}
                />
              ) : (
                <img
                  src={selectedItem.image}
                  alt={`${selectedItem.title} 줄눈시공 사례 - 디테일라인`}
                  onClick={() => setSelectedItem(null)}
                  className="w-full max-h-[80vh] object-contain cursor-zoom-out"
                />
              )}
            </div>
            <div className="mt-3 text-white">
              <p className="text-sm font-semibold">{selectedItem.title}</p>
              <p className="text-xs text-white/70 mt-1">{selectedItem.location}</p>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
