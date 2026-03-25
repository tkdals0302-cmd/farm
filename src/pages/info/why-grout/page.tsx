import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';

const REASONS = [
  {
    num: '01',
    icon: 'ri-virus-off-line',
    title: '위생 관리 — 곰팡이와 세균 차단',
    desc: '타일 사이 줄눈은 습기가 모이기 쉬운 공간입니다. 시멘트 줄눈이 낡으면 균열과 기공이 생겨 곰팡이와 세균이 번식합니다. 정기적인 줄눈시공은 이러한 위생 문제를 근본적으로 차단합니다.',
    img: 'https://readdy.ai/api/search-image?query=microscopic%20view%20bathroom%20tile%20mold%20bacteria%20grout%20hygiene%20problem%20dirty%20old%20grout%20contrast%20clean%20white%20background%20abstract%20visualization%20minimalist%20neutral%20tones&width=500&height=350&seq=reason-hygiene-01&orientation=landscape',
  },
  {
    num: '02',
    icon: 'ri-sparkling-2-line',
    title: '미관 개선 — 공간의 첫인상을 바꾸다',
    desc: '낡고 변색된 줄눈은 아무리 깨끗한 타일이어도 공간 전체를 낡아 보이게 만듭니다. 반대로 깔끔한 줄눈 하나만으로도 화장실·주방이 리모델링한 것처럼 새로워집니다.',
    img: 'https://readdy.ai/api/search-image?query=beautiful%20modern%20bathroom%20interior%20fresh%20white%20clean%20grout%20lines%20renovated%20space%20bright%20natural%20light%20luxury%20tiles%20aesthetic%20minimalist%20design%20warm%20neutral%20tones&width=500&height=350&seq=reason-aesthetic-01&orientation=landscape',
  },
  {
    num: '03',
    icon: 'ri-shield-check-line',
    title: '방수 보강 — 구조물 손상 예방',
    desc: '줄눈이 갈라지면 물이 타일 아래로 스며들어 시멘트 바닥과 벽체에 수분이 침투합니다. 이는 장기적으로 곰팡이, 타일 박리, 구조물 부식으로 이어지며 훨씬 큰 수리 비용을 만듭니다.',
    img: 'https://readdy.ai/api/search-image?query=water%20damage%20tile%20floor%20cracked%20grout%20moisture%20infiltration%20bathroom%20wall%20structural%20damage%20before%20repair%20realistic%20photo%20neutral%20background%20close-up%20detail&width=500&height=350&seq=reason-waterproof-01&orientation=landscape',
  },
  {
    num: '04',
    icon: 'ri-money-dollar-circle-line',
    title: '비용 절감 — 조기 시공이 유리한 이유',
    desc: '줄눈 문제를 방치하면 타일 전체 교체, 방수 공사, 구조 보수 등 수백만 원대의 공사가 필요해집니다. 초기에 줄눈시공만 해도 이런 대규모 수리를 미연에 방지할 수 있습니다.',
    img: 'https://readdy.ai/api/search-image?query=cost%20saving%20home%20renovation%20early%20maintenance%20bathroom%20tile%20grout%20repair%20investment%20value%20professional%20contractor%20working%20clean%20interior%20warm%20light%20neutral%20tones&width=500&height=350&seq=reason-cost-01&orientation=landscape',
  },
];

const PROBLEMS = [
  { icon: 'ri-alert-line', title: '곰팡이 대량 번식', desc: '검은 곰팡이가 타일 줄눈을 따라 번지며 제거가 점점 어려워집니다.' },
  { icon: 'ri-drop-line', title: '물이 벽·바닥 내부로 침투', desc: '균열된 줄눈을 통해 물이 내부로 스며들어 구조 손상이 시작됩니다.' },
  { icon: 'ri-grid-line', title: '타일 박리·탈락', desc: '수분 침투로 접착력이 약해지며 타일이 들뜨거나 깨져나갑니다.' },
  { icon: 'ri-nose-line', title: '악취 발생', desc: '유기물과 습기가 결합해 욕실 특유의 불쾌한 냄새가 심해집니다.' },
];

const TIMING = [
  { period: '5년 이상 된 욕실·화장실', icon: 'ri-time-line', desc: '시멘트 줄눈의 평균 수명을 넘은 경우 교체 시공을 권장합니다.' },
  { period: '변색·흑화가 눈에 띄는 경우', icon: 'ri-eye-line', desc: '줄눈이 검게 변했다면 이미 곰팡이가 깊이 침투한 상태일 수 있습니다.' },
  { period: '균열·탈락이 발생한 경우', icon: 'ri-error-warning-line', desc: '방치하면 물 침투로 인한 구조 손상으로 이어질 수 있습니다.' },
  { period: '집 매매·임대 전후', icon: 'ri-home-smile-line', desc: '줄눈 시공만으로도 체감 상태가 크게 달라져 매도·임대에 유리합니다.' },
];

const RELATED = [
  { href: '/info/kerafoxy', title: '케라폭시 줄눈이란?', desc: '에폭시 줄눈 소재의 특징과 장점' },
  { href: '/info/kerafoxy-price', title: '케라폭시 가격 안내', desc: '시공 비용과 영향 요인 총정리' },
  { href: '/info/kerafoxy-product', title: '케라폭시 제품 소개', desc: '제품 라인업과 색상 가이드' },
  { href: '/info/comparison', title: '폴리우레아 vs 케라폭시 비교', desc: '소재별 차이점 완벽 분석' },
];

export default function WhyGroutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '줄눈시공 하는 이유 | 위생·미관·방수를 위한 필수 관리 | 줄눈시공 전문';
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20tile%20grout%20renovation%20worker%20applying%20fresh%20white%20grout%20bathroom%20floor%20transformation%20before%20after%20clean%20modern%20interior%20warm%20light%20realistic%20photo%20neutral%20stone%20tones&width=1440&height=400&seq=why-grout-hero-01&orientation=landscape"
          alt="줄눈시공 하는 이유"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-10">
          <span className="text-stone-300 text-sm tracking-widest uppercase mb-3">시공 필요성</span>
          <h1 className="text-white text-3xl md:text-5xl font-black mb-3 leading-tight">줄눈시공 하는 이유</h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl">위생·미관·방수까지, 줄눈시공이 반드시 필요한 4가지 이유</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="w-full bg-stone-100">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-xs text-stone-500">
            <Link to="/" className="hover:text-stone-700 cursor-pointer">홈</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span>줄눈 정보</span>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-stone-800 font-medium">줄눈시공 하는 이유</span>
          </nav>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-black text-stone-800 mb-5">
          <strong>줄눈시공</strong>은 선택이 아니라 필수입니다
        </h2>
        <p className="text-stone-600 text-base leading-relaxed mb-4">
          많은 분들이 줄눈을 단순한 타일 사이 채움재로 생각하지만, 실제로는 <strong>방수·위생·구조 보호</strong>를 담당하는 핵심 요소입니다. 줄눈이 낡으면 눈에 보이는 미관 문제를 넘어 심각한 주거 환경 문제로 이어집니다.
        </p>
        <p className="text-stone-600 text-base leading-relaxed">
          특히 매일 물을 사용하는 욕실, 화장실, 주방에서 <strong>줄눈시공</strong>은 가장 효과적인 유지보수 방법 중 하나입니다. 작은 투자로 공간 수명을 크게 연장할 수 있습니다.
        </p>
      </section>

      {/* 4 Reasons */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-black text-stone-800 mb-12">줄눈시공을 해야 하는 4가지 이유</h2>
          <div className="space-y-14">
            {REASONS.map((r, i) => (
              <div key={r.num} className={`grid md:grid-cols-2 gap-6 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="mb-3">
                    <span className="text-4xl font-black text-stone-300">{r.num}</span>
                  </div>
                  <h3 className="text-lg font-black text-stone-800">{r.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
                <div className={`rounded-2xl overflow-hidden h-56 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img src={r.img} alt={r.title} className="w-full h-full object-cover object-top" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems When Not Done */}
      <section className="bg-stone-800 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-white text-2xl font-black mb-2">줄눈시공을 미루면 생기는 문제</h2>
          <p className="text-stone-400 text-sm mb-10">작은 균열이 큰 손상으로 이어집니다</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="bg-stone-700 rounded-2xl p-6">
                <div className="w-10 h-10 flex items-center justify-center bg-stone-600 rounded-xl mb-4">
                  <i className={`${p.icon} text-xl text-stone-300`}></i>
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{p.title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Right Timing */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-black text-stone-800 mb-2">줄눈시공이 필요한 시점</h2>
        <p className="text-stone-500 text-sm mb-10">이런 상황이라면 지금 당장 점검해 보세요</p>
        <div className="grid md:grid-cols-2 gap-5">
          {TIMING.map((t) => (
            <div key={t.period} className="flex items-start gap-5 bg-stone-50 rounded-2xl p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shrink-0">
                <i className={`${t.icon} text-xl text-stone-600`}></i>
              </div>
              <div>
                <h3 className="font-bold text-stone-800 mb-1 text-sm">{t.period}</h3>
                <p className="text-stone-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-5xl mx-auto px-6 py-4 pb-16">
        <h2 className="text-xl font-black text-stone-800 mb-6">관련 정보 더 보기</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {RELATED.map((r) => (
            <Link key={r.href} to={r.href} className="block bg-stone-50 hover:bg-stone-100 rounded-2xl p-5 transition-colors cursor-pointer">
              <h3 className="font-bold text-stone-800 text-sm mb-1">{r.title}</h3>
              <p className="text-stone-500 text-xs">{r.desc}</p>
              <div className="flex items-center gap-1 mt-3 text-stone-400 text-xs">
                <span>자세히 보기</span>
                <i className="ri-arrow-right-s-line"></i>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
