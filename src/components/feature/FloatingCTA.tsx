import { useEffect, useState } from 'react';
import { Events } from '../../lib/analytics';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-5 right-4 z-40 flex flex-col gap-3 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <a
        href="https://pf.kakao.com/_TsIAE"
        target="_blank"
        rel="nofollow noreferrer"
        onClick={() => Events.kakaoClick('floating')}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-400 text-stone-900 shadow-lg active:scale-95 transition-transform"
        aria-label="카카오톡 문의"
      >
        <i className="ri-kakao-talk-fill text-2xl"></i>
      </a>
      <a
        href="tel:010-8005-6674"
        onClick={() => Events.phoneClick('floating')}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-[#967353] text-white shadow-lg active:scale-95 transition-transform"
        aria-label="전화 상담"
      >
        <i className="ri-phone-fill text-2xl"></i>
      </a>
    </div>
  );
}
