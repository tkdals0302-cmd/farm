import { useState, useRef, useEffect } from 'react';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [count, setCount] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 2400 ? prev + 30 : 2400));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const scrollToQuote = () => {
    const el = document.querySelector('#quote');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const el = document.querySelector('#portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // YouTube IFrame API video ID for grout work
  const videoId = 'YOUR_VIDEO_ID'; // 실제 시공 영상 ID로 교체하세요

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100dvh', minHeight: '600px' }}>
      {/* Background Image (Video Placeholder) */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20grout%20tile%20work%20worker%20applying%20white%20grout%20bathroom%20tiles%20close%20up%20dramatic%20lighting%20professional%20craftsmanship%20renovation%20interior%20construction%20dark%20moody%20tones%20high%20contrast%20detailed&width=1920&height=1080&seq=hero1&orientation=landscape"
          alt="줄눈시공 메인 배너"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
      </div>

      {/* Video Embed (실제 영상 사용 시 주석 해제) */}
      {/*
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
      </div>
      */}

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center pt-[24dvh] sm:pt-[24dvh] pb-[20px] sm:pb-[60px] px-6 text-center">
        <div className="mb-3 flex gap-2 justify-center flex-wrap text-xs md:text-sm font-medium md:font-light">
          {/* <span className="inline-block bg-white/20 backdrop-blur-sm text-white tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/30">
            업계 최초 가격 투명성 보장
          </span> */}

          {/* 반짝이는 효과 */}
          <span className="shine-border text-white tracking-widest uppercase px-7 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
          
          {/* {이건 일반 버전 } */}
          {/* <span className="inline-block bg-white/20 backdrop-blur-sm text-white tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/30"> */}

            케어 플랜 3년 무상보장
          </span>
        </div>

        <h1 className="text-3xl md:text-6xl font-black text-white leading-tight mb-3 pb-1 tracking-tight"
          style={{ lineHeight: '1.3' }}>
          디테일이 다른 공간의 시작<br />
          <span className="text-stone-300">디테일라인</span>
        </h1>
        
        {/* pc에서 표기 */}
        <p className="hidden md:block text-white/80 text-sm md:text-base mb-10 max-w-xl leading-relaxed">
          1px의 디테일까지 완성하는 시공, 차원이 다른 마감을 경험하세요
        </p>

        {/* mobile에서 표기 */}
        <p className="block md:hidden text-white/80 text-sm md:text-base mb-10 max-w-xl leading-relaxed">
          1px의 디테일까지 완성하는 시공, 차원이 다른 마감을 경험하세요
        </p>


        <div className="flex flex-row sm:flex-row gap-3 w-full justify-center">
          <button
            onClick={scrollToPortfolio}
            className="btn-primary"
          >
            포트폴리오 보기
          </button>
          <button
            onClick={scrollToQuote}
            className="btn-secondary"
          >
            무료 견적 상담
          </button>
        </div>

        {/* Scroll Down */}
        <button
          onClick={scrollToPortfolio}
          className="absolute bottom-[110px] flex flex-col items-center gap-1 animate-bounce bg-transparent border-none cursor-pointer pt-4"
        >
          <span className="text-white/40 text-xs tracking-widest">SCROLL</span>
          <i className="ri-arrow-down-line text-white/40 text-lg"></i>
        </button>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="max-w-3xl mx-auto px-1 sm:px-6 py-3 sm:py-5 grid grid-cols-3 divide-x divide-white/20">
            {[
              { value: count, label: '시공 완료', suffix: '+' },
              { value: '3년 AS', label: '무상 AS', suffix: '' },
              { value: '99.8%', label: '고객 만족도', suffix: '' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-4">
                <span className="text-xl md:text-3xl font-black text-white">
                  {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}{stat.suffix}
                </span>
                <span className="text-white/60 text-xs mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
