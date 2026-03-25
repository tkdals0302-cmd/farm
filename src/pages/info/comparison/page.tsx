import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';

const COMPARE_ROWS = [
  { category: '소재 성분', kerafoxy: '에폭시 수지 + 경화제 (2액형)', polyurea: '폴리우레아 수지 (1액형)' },
  { category: '경화 방식', kerafoxy: '화학 반응 경화 (수동 혼합)', polyurea: '자연 경화 (습기·공기 반응)' },
  { category: '내수성', kerafoxy: '★★★★★ 탁월', polyurea: '★★★★☆ 우수' },
  { category: '항균성', kerafoxy: '★★★★★ 탁월', polyurea: '★★★☆☆ 보통' },
  { category: '내구성·수명', kerafoxy: '10~15년 이상', polyurea: '7~10년' },
  { category: '탄성·신축성', kerafoxy: '★★☆☆☆ 낮음', polyurea: '★★★★★ 탁월' },
  { category: '시공 난이도', kerafoxy: '중~고 (전문 기술 필요)', polyurea: '중 (비교적 간단)' },
  { category: '가격', kerafoxy: '평당 5~8만 원', polyurea: '평당 4~6만 원' },
  { category: '색상 선택', kerafoxy: '20여 가지', polyurea: '10여 가지' },
  { category: '적합 환경', kerafoxy: '욕실·주방·수영장 등 수분 多', polyurea: '베란다·외벽 등 진동·충격 多' },
];

const RECOMMENDATIONS = [
  {
    icon: 'ri-home-4-line',
    title: '케라폭시 줄눈 추천',
    subtitle: '이런 분께 적합합니다',
    items: [
      '화장실·욕실·주방처럼 상시 수분에 노출되는 공간',
      '위생이 특히 중요한 가정 (어린이, 노약자)',
      '오랫동안 재시공 없이 사용하고 싶은 경우',
      '다양한 색상으로 인테리어를 연출하고 싶은 경우',
    ],
    color: 'bg-stone-800 text-white',
    btnColor: 'bg-white text-stone-800',
  },
  {
    icon: 'ri-sun-line',
    title: '폴리우레아 줄눈 추천',
    subtitle: '이런 분께 적합합니다',
    items: [
      '베란다·테라스 등 온도 변화와 진동이 많은 공간',
      '건물 외벽·주차장처럼 하중과 충격이 큰 환경',
      '빠른 시공과 조기 경화가 필요한 경우',
      '비용을 절감하면서도 품질을 원하는 경우',
    ],
    color: 'bg-stone-100',
    btnColor: 'bg-stone-800 text-white',
  },
];

const RELATED = [
  { href: '/info/kerafoxy', title: '케라폭시 줄눈이란?', desc: '에폭시 줄눈 소재의 특징과 장점' },
  { href: '/info/kerafoxy-price', title: '케라폭시 가격 안내', desc: '시공 비용과 영향 요인 총정리' },
  { href: '/info/kerafoxy-product', title: '케라폭시 제품 소개', desc: '제품 라인업과 색상 가이드' },
  { href: '/info/why-grout', title: '줄눈시공 하는 이유', desc: '위생·미관·내구성을 위한 필수 시공' },
];

export default function ComparisonPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '폴리우레아 줄눈 vs 케라폭시 줄눈 비교 | 소재별 차이점 완벽 분석 | 줄눈시공 전문';
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=two%20different%20tile%20grout%20material%20samples%20side%20by%20side%20comparison%20epoxy%20polyurea%20construction%20materials%20clean%20white%20studio%20background%20professional%20product%20photography%20neutral%20tones%20minimalist&width=1440&height=400&seq=comparison-hero-01&orientation=landscape"
          alt="폴리우레아 줄눈과 케라폭시 줄눈 비교"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-10">
          <span className="text-stone-300 text-sm tracking-widest uppercase mb-3">소재 비교 가이드</span>
          <h1 className="text-white text-3xl md:text-5xl font-black mb-3 leading-tight">폴리우레아 vs 케라폭시</h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl">두 소재의 차이점을 한눈에 비교해 최적의 선택을 하세요</p>
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
            <span className="text-stone-800 font-medium">폴리우레아 vs 케라폭시 비교</span>
          </nav>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-black text-stone-800 mb-5">
          <strong>폴리우레아 줄눈</strong>과 <strong>케라폭시 줄눈</strong>, 어떻게 다를까?
        </h2>
        <p className="text-stone-600 text-base leading-relaxed mb-4">
          줄눈 시공을 알아보다 보면 <strong>폴리우레아 줄눈</strong>과 <strong>케라폭시 줄눈</strong> 두 가지 선택지를 마주하게 됩니다. 두 소재 모두 기존 시멘트 줄눈보다 월등히 우수한 성능을 자랑하지만, 각자 강점이 다릅니다.
        </p>
        <p className="text-stone-600 text-base leading-relaxed">
          간단히 말하면, 케라폭시는 <strong>방수·항균 성능</strong>이 극강이고 폴리우레아는 <strong>탄성·신축성</strong>이 뛰어납니다. 공간의 특성에 따라 알맞은 소재를 선택하는 것이 핵심입니다.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-black text-stone-800 mb-8">상세 비교표</h2>
          <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-stone-100">
                  <th className="px-6 py-4 text-left font-bold text-stone-500 w-1/3">비교 항목</th>
                  <th className="px-6 py-4 text-left font-bold text-stone-800">케라폭시 줄눈</th>
                  <th className="px-6 py-4 text-left font-bold text-stone-500">폴리우레아 줄눈</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={row.category} className={`border-b border-stone-50 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}`}>
                    <td className="px-6 py-4 font-medium text-stone-500 text-xs">{row.category}</td>
                    <td className="px-6 py-4 text-stone-800 font-medium">{row.kerafoxy}</td>
                    <td className="px-6 py-4 text-stone-500">{row.polyurea}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-black text-stone-800 mb-2">어떤 소재를 선택해야 할까요?</h2>
        <p className="text-stone-500 text-sm mb-10">공간 용도와 목적에 따라 최적의 줄눈 소재를 선택하세요</p>
        <div className="grid md:grid-cols-2 gap-6">
          {RECOMMENDATIONS.map((rec) => (
            <div key={rec.title} className={`rounded-2xl p-8 ${rec.color}`}>
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 ${rec.color.includes('stone-800') ? 'bg-white/20' : 'bg-stone-200'}`}>
                <i className={`${rec.icon} text-2xl ${rec.color.includes('stone-800') ? 'text-white' : 'text-stone-600'}`}></i>
              </div>
              <h3 className={`text-xl font-black mb-1 ${rec.color.includes('stone-800') ? 'text-white' : 'text-stone-800'}`}>{rec.title}</h3>
              <p className={`text-sm mb-5 ${rec.color.includes('stone-800') ? 'text-stone-300' : 'text-stone-500'}`}>{rec.subtitle}</p>
              <ul className="space-y-2">
                {rec.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <i className={`ri-check-line mt-0.5 ${rec.color.includes('stone-800') ? 'text-stone-300' : 'text-stone-400'}`}></i>
                    <span className={rec.color.includes('stone-800') ? 'text-stone-200' : 'text-stone-600'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-stone-50 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-xl font-black text-stone-800 mb-3">어떤 소재가 맞을지 아직 고민되시나요?</h2>
          <p className="text-stone-500 text-sm mb-6">현장 상황과 요구 사항을 듣고 최적의 소재를 추천해 드립니다. 무료 현장 방문 후 소재별 견적을 함께 비교해 보세요.</p>
          <a
            href="/#quote"
            className="call-bg inline-flex items-center gap-2 bg-stone-800 text-white text-sm font-bold px-7 py-3 rounded-full hover:bg-stone-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-line"></i>
            무료 상담 신청
          </a>
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
