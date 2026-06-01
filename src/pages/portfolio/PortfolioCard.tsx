import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCardImages, getRegionLabel, type PortfolioItem } from '../../data/portfolio';
import ImagePlaceholder from './ImagePlaceholder';

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const { main, before } = getCardImages(item);
  const [showBefore, setShowBefore] = useState(false);
  const [mainErrored, setMainErrored] = useState(false);
  const [beforeErrored, setBeforeErrored] = useState(false);
  const isTouchRef = useRef(false);

  useEffect(() => {
    isTouchRef.current = window.matchMedia('(hover: none)').matches;
  }, []);

  const enter = () => { if (!isTouchRef.current) setShowBefore(true); };
  const leave = () => { if (!isTouchRef.current) setShowBefore(false); };
  // 모바일: 첫 탭은 Before 토글, 다음 탭은 상세 이동
  const handleTouchClick = (e: React.MouseEvent) => {
    if (isTouchRef.current && before && !showBefore) {
      e.preventDefault();
      setShowBefore(true);
    }
  };

  return (
    <Link
      to={`/portfolio/${item.slug}`}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={handleTouchClick}
      className="block group"
    >
      {/* 4:3 이미지 영역 */}
      <div className="relative aspect-[4/3] overflow-hidden border border-[var(--line)] bg-[var(--bg-2)]">
        {/* After (대표) */}
        {main && !mainErrored ? (
          <img
            src={main.src}
            alt={main.alt}
            onError={() => setMainErrored(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              showBefore && before && !beforeErrored ? 'opacity-0' : 'opacity-100'
            }`}
            loading="lazy"
          />
        ) : (
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              showBefore && before ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <ImagePlaceholder corner="AFTER · 1200×900" label={main?.alt ?? '시공 후'} />
          </div>
        )}

        {/* Before */}
        {before && (
          beforeErrored ? (
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                showBefore ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ImagePlaceholder dark corner="BEFORE · 1200×900" label={before.alt} />
            </div>
          ) : (
            <img
              src={before.src}
              alt={before.alt}
              onError={() => setBeforeErrored(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                showBefore ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          )
        )}

        {/* Before/After 코너 배지 */}
        <span
          className={`absolute top-3 left-3 text-[10.5px] font-medium tracking-[0.14em] uppercase px-2.5 py-1 rounded-[2px] transition-colors ${
            showBefore
              ? 'bg-[var(--ink)] text-white'
              : 'bg-white/95 text-[var(--ink)]'
          }`}
        >
          {showBefore ? 'Before' : 'After'}
        </span>
      </div>

      {/* 정보 영역 — design_guide §05 reason/case 카드 톤 */}
      <div className="pt-3.5">
        <span className="text-[10.5px] font-medium tracking-[0.14em] text-[var(--muted-2)] uppercase">
          {getRegionLabel(item)}
        </span>
        <h3
          className="text-[17px] text-[var(--ink)] mt-1 leading-[1.35] tracking-[-0.005em] group-hover:text-[var(--accent)] transition-colors break-keep"
          style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
        >
          {item.apartment} {item.area}평
        </h3>
        <p className="text-[13px] text-[var(--muted)] mt-1">
          {item.space} · {item.material}
          {item.materialDetail ? ` ${item.materialDetail}` : ''}
        </p>
      </div>
    </Link>
  );
}
