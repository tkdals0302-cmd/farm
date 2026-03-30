import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import beforeImage from '../../../assets/images/info/kerafoxy/before.jpg';
import afterImage from '../../../assets/images/info/kerafoxy/after.jpg';

const FEATURES = [
  { icon: 'ri-shield-check-line', title: '강력한 내수성', desc: '물에 강한 에폭시 성분으로 화장실·욕실의 지속적인 수분 노출에도 변형 없이 오래 유지됩니다.' },
  { icon: 'ri-bug-line', title: '곰팡이·세균 차단', desc: '항균 성분이 배합되어 습한 환경에서도 곰팡이와 세균이 번식하지 않아 위생적인 공간을 유지합니다.' },
  { icon: 'ri-palette-line', title: '다양한 색상 선택', desc: '화이트, 베이지, 그레이, 블랙 등 20여 가지 색상으로 인테리어 스타일에 맞는 선택이 가능합니다.' },
  { icon: 'ri-timer-line', title: '월등한 내구성', desc: '일반 시멘트 줄눈 대비 3~5배 긴 수명을 자랑하며, 균열·탈락 없이 깔끔한 마감이 오래 유지됩니다.' },
  { icon: 'ri-sparkling-line', title: '손쉬운 유지관리', desc: '표면이 매끄럽고 오염이 잘 스며들지 않아 간단한 물 청소만으로 항상 깨끗한 상태를 유지할 수 있습니다.' },
];

const SUITABLE_PLACES = [
  { icon: 'ri-home-4-line', place: '화장실·욕실', desc: '가장 많이 사용하는 공간으로, 케라폭시의 내수성과 항균 기능이 극대화됩니다.' },
  { icon: 'ri-restaurant-line', place: '주방·싱크대 주변', desc: '음식물 오염과 물에 강해 주방 타일 줄눈에 이상적인 소재입니다.' },
  { icon: 'ri-sun-line', place: '베란다·발코니', desc: '자외선과 온도 변화에도 변색이 거의 없어 실외 공간에도 탁월합니다.' },
  { icon: 'ri-door-line', place: '현관 바닥', desc: '먼지와 오염이 많은 현관 바닥에서도 변색 없이 깔끔한 마감을 유지합니다.' },
  { icon: 'ri-water-flash-line', place: '수영장·목욕탕', desc: '항시 수분에 노출되는 환경에서도 박리 없이 완벽한 방수 성능을 발휘합니다.' },
];

const RELATED = [
  { href: '/info/kerafoxy-price', title: '케라폭시 가격 안내', desc: '시공 비용과 영향 요인 총정리' },
  { href: '/info/kerafoxy-product', title: '케라폭시 제품 소개', desc: '제품 라인업과 색상 가이드' },
  { href: '/info/comparison', title: '폴리우레아 vs 케라폭시 비교', desc: '소재별 차이점 완벽 분석' },
  { href: '/info/why-grout', title: '줄눈시공 하는 이유', desc: '위생·미관·내구성을 위한 필수 시공' },
];

export default function KerafoxyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '케라폭시 줄눈이란? 특징과 장점 완벽 가이드 | 줄눈시공 전문';
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=close-up%20ceramic%20tile%20grout%20lines%20bathroom%20floor%20clean%20white%20epoxy%20grout%20kerafoxy%20professional%20tiling%20minimalist%20interior%20neutral%20tones%20soft%20natural%20light%20crisp%20details%20high%20resolution%20modern%20bathroom%20renovation&width=1440&height=400&seq=kerafoxy-hero-01&orientation=landscape"
          alt="케라폭시 줄눈 시공 결과"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-10">
          <span className="text-stone-300 text-sm tracking-widest uppercase mb-3">줄눈 소재 가이드</span>
          <h1 className="text-white text-3xl md:text-5xl font-black mb-3 leading-tight">케라폭시 줄눈이란?</h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl">에폭시 기반 고성능 줄눈 소재의 특징과 장점을 알아보세요</p>
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
            <span className="text-stone-800 font-medium">케라폭시 줄눈</span>
          </nav>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-stone-800 mb-5 leading-snug">
              <strong>케라폭시 줄눈</strong>, 왜 프리미엄 소재인가요?
            </h2>
            <p className="text-stone-600 text-base leading-relaxed mb-4">
              <strong>케라폭시(Kerafoxy)</strong>는 에폭시 수지와 경화제를 혼합한 2액형 고성능 줄눈 소재입니다. 기존 시멘트 줄눈과 달리 화학적 결합으로 굳기 때문에 탁월한 강도와 방수성을 자랑합니다.
            </p>
            <p className="text-stone-600 text-base leading-relaxed mb-4">
              이탈리아 건설 소재 전문 브랜드가 개발한 케라폭시는 국내외 수많은 고급 주택, 호텔, 상업 공간에서 사용되며 <strong>케라폭시 줄눈</strong>의 우수성이 입증됐습니다.
            </p>
            <p className="text-stone-600 text-base leading-relaxed">
              특히 곰팡이가 쉽게 번식하는 욕실·주방 환경에서 케라폭시는 일반 줄눈 대비 압도적인 위생 유지 효과를 보여줍니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden h-72">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20tile%20grout%20application%20process%20worker%20applying%20white%20epoxy%20kerafoxy%20grout%20between%20large%20format%20tiles%20bathroom%20renovation%20clean%20bright%20workspace%20detailed%20craftsmanship%20warm%20neutral%20background&width=600&height=400&seq=kerafoxy-intro-01&orientation=landscape"
              alt="케라폭시 줄눈 시공 과정"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-stone-800 mb-2 text-center">케라폭시 줄눈의 5가지 핵심 장점</h2>
          <p className="text-stone-500 text-center mb-10 text-sm">일반 시멘트 줄눈과 비교할 수 없는 성능 차이</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-stone-100 rounded-xl mb-4">
                  <i className={`${f.icon} text-2xl text-stone-700`}></i>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">{f.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable Places */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-black text-stone-800 mb-2">케라폭시 줄눈이 적합한 공간</h2>
        <p className="text-stone-500 mb-10 text-sm">어떤 공간에 케라폭시를 시공해야 할까요?</p>
        <div className="space-y-4">
          {SUITABLE_PLACES.map((p) => (
            <div key={p.place} className="flex items-start gap-5 bg-stone-50 rounded-2xl p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shrink-0">
                <i className={`${p.icon} text-2xl text-stone-600`}></i>
              </div>
              <div>
                <h3 className="font-bold text-stone-800 mb-1">{p.place}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-stone-800 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-white text-2xl md:text-3xl font-black mb-2 text-center">시공 전·후 비교</h2>
          <p className="text-stone-400 text-sm text-center mb-10">케라폭시 줄눈 시공이 만들어내는 변화</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden">
              <div className="h-56">
                <img
                  src={beforeImage}
                  alt="줄눈 시공 전 상태"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="bg-stone-900 px-5 py-3">
                <span className="text-stone-300 text-base font-medium">시공 전 — 시멘트 줄눈</span>
                <p className="text-stone-400 text-xs mt-1">변색·균열·곰팡이 발생, 청소 어려움</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <div className="h-56">
                <img
                  src={afterImage}
                  alt="케라폭시 줄눈 시공 후 결과"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="bg-stone-600 px-5 py-3">
                <span className="text-white text-base font-medium">시공 후 — 케라폭시 줄눈</span>
                <p className="text-stone-200 text-xs mt-1">깨끗하고 균일한 마감, 위생적인 공간 유지</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-5xl mx-auto px-6 py-16">
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
