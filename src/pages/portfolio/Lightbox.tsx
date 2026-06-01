import { useEffect, useState } from 'react';
import type { PortfolioImage } from '../../data/portfolio';

type Props = {
  images: PortfolioImage[];
  startIndex: number;
  onClose: () => void;
};

export default function Lightbox({ images, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1));
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(images.length - 1, i + 1));
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, images.length]);

  const img = images[index];
  if (!img) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-5 right-5 text-white text-3xl w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full cursor-pointer"
        aria-label="닫기"
      >
        <i className="ri-close-line"></i>
      </button>

      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); setIndex((i) => i - 1); }}
          className="absolute left-4 md:left-8 text-white text-3xl w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full cursor-pointer"
          aria-label="이전 사진"
        >
          <i className="ri-arrow-left-s-line text-4xl"></i>
        </button>
      )}

      <img
        src={img.src}
        alt={img.alt}
        className="max-w-[92vw] max-h-[82vh] object-contain cursor-zoom-out"
      />

      {index < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); setIndex((i) => i + 1); }}
          className="absolute right-4 md:right-8 text-white text-3xl w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full cursor-pointer"
          aria-label="다음 사진"
        >
          <i className="ri-arrow-right-s-line text-4xl"></i>
        </button>
      )}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium tracking-[0.1em]">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
