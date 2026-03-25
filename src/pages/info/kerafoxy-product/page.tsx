import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';

const PRODUCTS = [
  {
    name: 'Kerafoxy Standard',
    tag: '기본형',
    tagColor: 'bg-stone-100 text-stone-600',
    desc: '가장 많이 사용되는 기본형 케라폭시 제품. 화장실·욕실·주방에 적합하며 20여 가지 색상으로 제공됩니다.',
    specs: [{ label: '경화 시간', value: '24~48시간' }, { label: '사용 면적', value: '실내 전 구역' }, { label: '수명', value: '10년 이상' }],
    img: 'https://readdy.ai/api/search-image?query=white%20epoxy%20grout%20product%20packaging%20kerafoxy%20standard%20tile%20grout%20construction%20material%20clean%20white%20background%20minimalist%20product%20photography%20professional%20studio%20shot&width=500&height=350&seq=product-standard-01&orientation=landscape',
  },
  {
    name: 'Kerafoxy Pro',
    tag: '프리미엄',
    tagColor: 'bg-amber-50 text-amber-700',
    desc: '고성능 항균 특수 배합 제품. 의료 시설, 수영장, 산업 시설에서도 사용할 수 있는 최상위 등급 줄눈재입니다.',
    specs: [{ label: '경화 시간', value: '12~24시간' }, { label: '사용 면적', value: '실내외 전 구역' }, { label: '수명', value: '15년 이상' }],
    img: 'https://readdy.ai/api/search-image?query=premium%20epoxy%20grout%20tile%20product%20kerafoxy%20pro%20high-end%20construction%20material%20elegant%20packaging%20neutral%20background%20professional%20product%20photography%20clean%20modern%20minimalist&width=500&height=350&seq=product-pro-01&orientation=landscape',
  },
  {
    name: 'Kerafoxy Exterior',
    tag: '외부용',
    tagColor: 'bg-green-50 text-green-700',
    desc: '자외선과 기온 변화에 강한 외부 전용 케라폭시 제품. 베란다, 테라스, 외벽 타일에 적합합니다.',
    specs: [{ label: '경화 시간', value: '24~72시간' }, { label: '사용 면적', value: '외부 전용' }, { label: '수명', value: '12년 이상' }],
    img: 'https://readdy.ai/api/search-image?query=exterior%20grout%20product%20outdoor%20tile%20joint%20sealant%20construction%20material%20green%20accent%20packaging%20clean%20white%20background%20professional%20product%20shot%20minimalist%20studio%20photography&width=500&height=350&seq=product-exterior-01&orientation=landscape',
  },
];

const COLORS = [
  { name: '순백(Pure White)', hex: '#FFFFFF', border: true },
  { name: '아이보리(Ivory)', hex: '#FFFFF0', border: true },
  { name: '베이지(Beige)', hex: '#F5F5DC', border: true },
  { name: '샌드(Sand)', hex: '#C2B280' },
  { name: '실버그레이(Silver Gray)', hex: '#C0C0C0' },
  { name: '다크그레이(Dark Gray)', hex: '#696969' },
  { name: '챠콜(Charcoal)', hex: '#36454F' },
  { name: '블랙(Black)', hex: '#1C1C1C' },
  { name: '카키(Khaki)', hex: '#8B7D6B' },
  { name: '브라운(Brown)', hex: '#6B4423' },
];

const RELATED = [
  { href: '/info/kerafoxy', title: '케라폭시 줄눈이란?', desc: '에폭시 줄눈 소재의 특징과 장점' },
  { href: '/info/kerafoxy-price', title: '케라폭시 가격 안내', desc: '시공 비용과 영향 요인 총정리' },
  { href: '/info/comparison', title: '폴리우레아 vs 케라폭시 비교', desc: '소재별 차이점 완벽 분석' },
  { href: '/info/why-grout', title: '줄눈시공 하는 이유', desc: '위생·미관·내구성을 위한 필수 시공' },
];

export default function KerafoxyProductPage() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '케라폭시 제품 소개 | 줄눈 소재 종류와 사양 안내 | 줄눈시공 전문';
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=array%20of%20tile%20grout%20color%20samples%20swatches%20kerafoxy%20epoxy%20grout%20product%20display%20clean%20minimalist%20white%20background%20professional%20material%20showcase%20neutral%20beige%20gray%20tones%20studio%20lighting&width=1440&height=400&seq=product-hero-01&orientation=landscape"
          alt="케라폭시 제품 소개"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-stone-300 text-sm tracking-widest uppercase mb-3">제품 안내</span>
          <h1 className="text-white text-3xl md:text-5xl font-black mb-3 leading-tight">케라폭시 제품 소개</h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl">목적에 맞는 케라폭시 제품 라인업과 색상을 알아보세요</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-xs text-stone-400">
          <Link to="/" className="hover:text-stone-600 cursor-pointer">홈</Link>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-stone-500">줄눈 정보</span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-stone-700 font-medium">케라폭시 제품소개</span>
        </nav>
      </div>

      {/* Product Selector */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-black text-stone-800 mb-2">제품 라인업</h2>
        <p className="text-stone-500 text-sm mb-8">시공 환경에 맞는 최적의 케라폭시 제품을 선택하세요</p>
        <div className="flex gap-3 mb-8 flex-wrap">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setSelected(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${selected === i ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
            >
              {p.name}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start bg-stone-50 rounded-2xl p-8">
          <div className="rounded-xl overflow-hidden h-56">
            <img src={PRODUCTS[selected].img} alt={PRODUCTS[selected].name} className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-black text-stone-800">{PRODUCTS[selected].name}</h3>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${PRODUCTS[selected].tagColor}`}>{PRODUCTS[selected].tag}</span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">{PRODUCTS[selected].desc}</p>
            <div className="space-y-3">
              {PRODUCTS[selected].specs.map((s) => (
                <div key={s.label} className="flex items-center justify-between py-2 border-b border-stone-200">
                  <span className="text-stone-500 text-sm">{s.label}</span>
                  <span className="font-bold text-stone-800 text-sm">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Color Guide */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-stone-800 mb-2">색상 선택 가이드</h2>
          <p className="text-stone-500 text-sm mb-10">케라폭시 제품은 20여 가지 색상을 제공합니다. 타일 색상과 인테리어 스타일에 맞게 선택하세요.</p>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-3 mb-8">
            {COLORS.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: c.hex, border: c.border ? '1px solid #e7e5e4' : 'none' }}
                />
                <span className="text-stone-500 text-xs text-center leading-tight">{c.name.split('(')[0]}</span>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-bold text-stone-800 mb-4">색상 선택 팁</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone-600">
                <i className="ri-checkbox-circle-line text-stone-400 mt-0.5"></i>
                <span><strong>화이트 계열</strong>은 타일 색상과 통일감을 주어 깔끔하고 넓어 보이는 효과가 있습니다.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-600">
                <i className="ri-checkbox-circle-line text-stone-400 mt-0.5"></i>
                <span><strong>그레이 계열</strong>은 오염이 덜 눈에 띄어 유지관리가 편하고, 모던한 분위기를 연출합니다.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-600">
                <i className="ri-checkbox-circle-line text-stone-400 mt-0.5"></i>
                <span><strong>다크 계열</strong>은 타일과 대비를 주어 인테리어 포인트로 활용할 수 있습니다.</span>
              </li>
            </ul>
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
