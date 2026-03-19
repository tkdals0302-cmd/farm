import { useState } from 'react';
import { portfolioItems, portfolioCategories } from '../../../mocks/portfolioData';

const processSteps = [
  {
    step: '01',
    title: '무료 상담 신청',
    summary: '간편하게 연락주세요',
    description: '전화, 카카오톡, 또는 홈페이지를 통해 간단히 시공 신청을 남겨주세요. 담당자가 24시간 내 연락드리며, 시공 범위와 예산에 맞는 최적의 방향을 안내해 드립니다.',
    tags: [
      { label: '전화 상담', href: 'tel:010-2422-7744' },
      { label: '카카오톡', href: 'https://pf.kakao.com/_TsIAE' },
      { label: '온라인 신청', href: '#quote' }
    ],
    icon: 'ri-phone-line',
    color: 'bg-amber-50 border-amber-100',
    numberColor: 'text-amber-400',
  },
  {
    step: '02',
    title: '현장 방문 & 견적',
    summary: '정확한 현장 실측',
    description: '전문 상담사가 직접 현장을 방문하여 꼼꼼히 측정하고 상태를 확인합니다. 줄눈 상태, 타일 종류, 시공 면적을 분석해 합리적인 견적서를 제공해 드립니다.',
    tags: [
      { label: '무료 방문 견적', href: '#quote' },
      { label: '현장 실측', href: '#quote' },
      { label: '상태 진단', href: '#quote' }
    ],
    icon: 'ri-map-pin-line',
    color: 'bg-stone-50 border-stone-100',
    numberColor: 'text-stone-300',
  },
  {
    step: '03',
    title: '시공 진행',
    summary: '숙련된 전문가의 손길',
    description: '20년 경력의 줄눈시공 전문 팀이 기존 줄눈을 완전히 제거하고, 항균·방수 기능성 줄눈재를 꼼꼼히 충전합니다. 작업 중 발생하는 분진·오염 최소화를 위해 보양작업도 철저히 진행합니다.',
    tags: [
      { label: '기존 줄눈 제거', href: '#quote' },
      { label: '기능성 줄눈재', href: '#quote' },
      { label: '분진 최소화', href: '#quote' }
    ],
    icon: 'ri-tools-line',
    color: 'bg-stone-50 border-stone-100',
    numberColor: 'text-stone-300',
  },
  {
    step: '04',
    title: '완료 & 사후 관리',
    summary: '완벽한 마무리와 AS 보장',
    description: '시공 완료 후 전문가와 함께 꼼꼼히 품질 점검을 진행합니다. 완료 후에도 하자가 발생하면 무상 AS를 지원하며, 유지보수 방법 가이드도 함께 제공해 드립니다.',
    tags: [
      { label: '품질 점검', href: '#quote' },
      { label: '무상 AS 보장', href: '#quote' },
      { label: '유지보수 안내', href: '#quote' }
    ],
    icon: 'ri-shield-check-line',
    color: 'bg-stone-50 border-stone-100',
    numberColor: 'text-stone-300',
  },
];

export default function PortfolioAndReviews() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [activeStep, setActiveStep] = useState(0);

  const filtered =
    activeCategory === '전체'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 md:px-12 lg:px-20 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest text-stone-400 uppercase">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 mt-2 leading-tight">
              완성된 프로젝트
            </h2>
            <p className="text-stone-500 mt-3 text-base">고객님의 공간을 완벽하게 되살렸습니다</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#967353] text-white'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full mb-2">
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

      {/* Construction Process Section */}
      <section id="process" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-stone-400 uppercase">how it work</span>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 mt-3 leading-tight"
            style={{ lineHeight: '1.1' }}>
              상담부터 완료까지<br />
              <span className="text-[#967353]">단 4단계</span>
            </h2>
            <p className="text-stone-500 mt-3 text-base">상담부터 마무리 점검까지, 모든 과정을 함께합니다</p>
          </div>

          {/* Step Progress Bar */}
          <div className="relative flex items-start justify-between mb-14 px-4">
            {/* Connecting line */}
            <div className="absolute top-7 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-stone-200 z-0"></div>
            <div
              className="absolute top-7 left-[calc(12.5%)] h-px bg-stone-800 z-0 transition-all duration-500"
              style={{ width: `${(activeStep / (processSteps.length - 1)) * 75}%` }}
            ></div>

            {processSteps.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center gap-3 w-1/4 cursor-pointer group"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-black transition-all duration-300 ${
                    idx === activeStep
                      ? 'bg-stone-900 text-white shadow-lg scale-110'
                      : idx < activeStep
                      ? 'bg-stone-700 text-white'
                      : 'bg-stone-100 text-stone-400 group-hover:bg-stone-200'
                  }`}
                >
                  {s.step}
                </div>
                <div className="text-center">
                  <p className={`text-sm font-bold leading-snug ${idx === activeStep ? 'text-stone-900' : 'text-stone-400'}`}>
                    {s.title}
                  </p>
                  <p className={`text-xs mt-0.5 ${idx === activeStep ? 'text-stone-500' : 'text-stone-300'}`}>
                    {s.summary}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Detail Card */}
          <div className={`rounded-3xl border-2 p-10 transition-all duration-300 ${processSteps[activeStep].color}`}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Icon & Number */}
              <div className="flex-shrink-0">
                <div className={`text-8xl font-black leading-none select-none ${processSteps[activeStep].numberColor}`}>
                  {processSteps[activeStep].step}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-stone-100 mb-4">
                  <i className={`${processSteps[activeStep].icon} text-2xl text-stone-700`}></i>
                </div>
                <h3 className="text-2xl font-black text-stone-900">{processSteps[activeStep].title}</h3>
                <p className="text-stone-600 mt-3 leading-relaxed text-base max-w-xl">
                  {processSteps[activeStep].description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {processSteps[activeStep].tags.map((tag) => (
                    activeStep === 0 ? (
                      <a
                        key={tag.label}
                        href={tag.href}
                        onClick={(e) => {
                          if (tag.href.startsWith('#')) {
                            e.preventDefault();
                            const el = document.querySelector(tag.href);
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        target={tag.href.startsWith('http') ? '_blank' : undefined}
                        rel={tag.href.startsWith('http') ? 'nofollow noreferrer' : undefined}
                        className="px-4 py-1.5 rounded-full border border-stone-200 bg-white text-stone-600 text-sm font-medium hover:bg-stone-100 hover:border-stone-300 transition-all cursor-pointer"
                      >
                        {tag.label}
                      </a>
                    ) : (
                      <span
                        key={tag.label}
                        className="px-4 py-1.5 rounded-full border border-stone-200 bg-white text-stone-600 text-sm font-medium"
                      >
                        {tag.label}
                      </span>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-200/70">
              <div className="flex gap-2">
                {processSteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeStep ? 'w-6 bg-stone-800' : 'w-2 bg-stone-300'
                    }`}
                  ></button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 hover:border-stone-400 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <i className="ri-arrow-left-line"></i>
                </button>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                  disabled={activeStep === processSteps.length - 1}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-900 text-white hover:bg-stone-700 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
