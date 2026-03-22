const SCOPE_ITEMS = [
  {
    icon: 'ri-home-3-line',
    title: '현관 & 거실',
    description: '대리석, 포세린, 자기질 타일 등 다양한 소재에 맞는 줄눈재 선택 및 시공',
  },
  {
    icon: 'ri-contrast-drop-2-line',
    title: '욕실 & 화장실',
    description: '항균·방수 전용 줄눈재 사용. 곰팡이 방지 처리로 위생적인 환경 유지',
  },
  {
    icon: 'ri-restaurant-2-fill',
    title: '주방',
    description: '열변색, 오염에 강한 에폭시 줄눈재 시공. 음식물 오염에 탁월한 내구성',
  },
  {
    icon: 'ri-plant-line',
    title: '베란다 & 테라스',
    description: '자외선·동결 융해에 강한 외부용 줄눈재 사용. 방수 성능 우선 설계',
  },
  {
    icon: 'ri-water-flash-line',
    title: '수영장 & 목욕탕',
    description: '수중 전용 방수 줄눈재 시공. 상시 물 접촉 환경에 최적화된 시공법',
  },
  {
    icon: 'ri-building-line',
    title: '상업 & 공공 시설',
    description: '빌딩, 호텔, 공공시설 등 대형 면적 시공 가능. 야간·주말 작업 협의 가능',
  },
];

const DIFF_ITEMS = [
  {
    number: '01',
    title: '대표 직접 시공',
    description: '2,400건 이상의 시공 경험. 현장마다 최적의 자재와 기법을 적용합니다.',
  },
  {
    number: '02',
    title: '친환경 인증 자재',
    description: 'KC 인증 친환경 줄눈재만 사용. 어린이, 반려동물 가정에도 안심 시공.',
  },
  {
    number: '03',
    title: '3년 품질 보증',
    description: '시공 완료 후 3년간 품질 이상 시 무상 A/S 제공. 책임감 있는 사후 관리.',
  },
  {
    number: '04',
    title: '당일 견적 & 빠른 시공',
    description: '현장 방문 후 당일 견적 확정. 일정에 맞는 빠른 시공 일정을 잡아드립니다.',
  },
];

export default function WorkScopeSection() {
  return (
    <section id="scope" className="py-20 px-6 md:px-12 lg:px-20 bg-stone-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-stone-400 uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 leading-tight">
            전문 시공 범위
          </h2>
          <p className="text-stone-500 text-sm font-medium leading-relaxed mt-4">
            주거 공간부터 대형 상업 시설까지,<br />
           <span className= "text-stone-400">어떤 환경에도 최적화된 줄눈 솔루션을 제공합니다.</span>
          </p>
        </div>

        {/* Scope Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-20">
          {SCOPE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-stone-800 rounded-2xl p-6 hover:bg-stone-700 transition-colors"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-stone-900 rounded-xl mb-4">
                <i className={`${item.icon} text-stone-300 text-xl`}></i>
              </div>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="border-t border-stone-700 pt-16">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-widest text-stone-400 uppercase">Why Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2 leading-tight"
            style={{ lineHeight: '1.2' }}>
              수많은 고객님들이<br />
              <span className="text-[#967353]">먼저 경험하셨습니다</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 ">
            {DIFF_ITEMS.map((item) => (
              <div key={item.number} className="flex gap-4">
                <span className="text-4xl font-black text-stone-700 leading-none flex-shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-white font-bold text-xl sm:text-lg mb-1">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 bg-stone-800 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-6 text-center">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-black">지금 바로 무료 견적 받기</h3>
            <p className="text-stone-500 mt-2 text-sm">24시간 내 연락드립니다. 부담 없이 문의해 주세요.</p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#quote');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-16 sm:px-20 py-3 sm:py-4 bg-stone-50 text-stone-700 font-semibold rounded-full hover:bg-[#967353] hover:text-white transition-all cursor-pointer whitespace-nowrap"
          >
            지금 견적 신청하기
          </button>
        </div>
      </div>
    </section>
  );
}
