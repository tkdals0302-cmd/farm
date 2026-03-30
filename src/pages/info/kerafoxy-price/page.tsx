import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import PriceCalculator from '../../../components/feature/PriceCalculator';
import PriceTable from '../../../components/feature/PriceTable';

const FACTORS = [
  { icon: 'ri-home-2-line', title: '시공 면적', desc: '면적이 넓을수록 평단가가 내려가며, 협소한 공간은 작업 난이도로 인해 단가가 높아질 수 있습니다.' },
  { icon: 'ri-apps-line', title: '타일 크기·줄눈 간격', desc: '타일이 작을수록 줄눈 길이가 길어져 작업 시간과 자재비가 증가합니다.' },
  { icon: 'ri-stack-line', title: '기존 줄눈 상태', desc: '기존 줄눈 제거가 필요한 경우 추가 작업비가 발생하며, 손상이 심할수록 비용이 올라갑니다.' },
  { icon: 'ri-paint-brush-line', title: '색상 선택', desc: '특수 색상이나 다색 시공의 경우 단가가 다를 수 있습니다.' },
  { icon: 'ri-map-pin-line', title: '지역·접근성', desc: '지방이나 접근이 어려운 고층 건물의 경우 추가 출장비가 반영될 수 있습니다.' },
];

const RELATED = [
  { href: '/info/kerafoxy', title: '케라폭시 줄눈이란?', desc: '에폭시 줄눈 소재의 특징과 장점' },
  { href: '/info/kerafoxy-product', title: '케라폭시 제품 소개', desc: '제품 라인업과 색상 가이드' },
  { href: '/info/comparison', title: '폴리우레아 vs 케라폭시 비교', desc: '소재별 차이점 완벽 분석' },
  { href: '/info/why-grout', title: '줄눈시공 하는 이유', desc: '위생·미관·내구성을 위한 필수 시공' },
];

export default function KerafoxyPricePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '케라폭시 가격 안내 | 시공 비용과 영향 요인 총정리 | 줄눈시공 전문';
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20construction%20worker%20measuring%20bathroom%20tile%20area%20for%20grout%20renovation%20estimate%20clipboard%20measurement%20tape%20modern%20interior%20neutral%20tones%20natural%20light%20clean%20workspace%20realistic%20photo&width=1440&height=400&seq=price-hero-01&orientation=landscape"
          alt="케라폭시 가격 견적 안내"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-10">
          <span className="text-stone-300 text-sm tracking-widest uppercase mb-3">비용 안내</span>
          <h1 className="text-white text-3xl md:text-5xl font-black mb-3 leading-tight">케라폭시 가격 안내</h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl">시공 비용과 영향 요인을 투명하게 공개합니다</p>
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
            <span className="text-stone-800 font-medium">케라폭시 가격</span>
          </nav>
        </div>
      </div>

      {/* PriceTable */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-black text-stone-800 mb-2">2026 가격 테이블</h2>
        <PriceTable />
      </section>

      {/* Price Calculator */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-stone-800 mb-2">공간별 시공 가격 예시</h2>
          <p className="text-stone-500 text-sm mb-10">간편하게 시공 견적을 확인해보세요</p>
          <PriceCalculator />
        </div>
      </section>

      {/* Intro (주석 처리) */}
      {/*
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-stone-800 mb-5 leading-snug">
              <strong>케라폭시 가격</strong>, 어떻게 책정되나요?
            </h2>
            <p className="text-stone-600 text-base leading-relaxed mb-4">
              <strong>케라폭시 시공 가격</strong>은 시공 면적, 타일 종류, 기존 줄눈 상태에 따라 달라집니다. 일반적으로 화장실 기준 15~25만 원 선에서 시작하며, 아파트 전체 시공 시 50~80만 원 수준입니다.
            </p>
            <p className="text-stone-600 text-base leading-relaxed">
              저렴한 시멘트 줄눈과 비교하면 초기 비용이 높지만, 케라폭시는 수명이 길고 재시공 주기가 훨씬 길어 <strong>장기적으로는 더 경제적인 선택</strong>입니다.
            </p>
          </div>
          <div className="bg-stone-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-stone-800 rounded-xl">
                <i className="ri-money-dollar-circle-line text-white text-xl"></i>
              </div>
              <h3 className="font-black text-stone-800">평균 시공 단가</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-stone-200">
                <span className="text-stone-600 text-sm">케라폭시 줄눈</span>
                <span className="font-bold text-stone-800">평당 5~8만 원</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-200">
                <span className="text-stone-600 text-sm">폴리우레아 줄눈</span>
                <span className="font-bold text-stone-800">평당 4~6만 원</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-stone-600 text-sm">일반 시멘트 줄눈</span>
                <span className="font-bold text-stone-800">평당 2~4만 원</span>
              </div>
            </div>
            <p className="text-stone-400 text-xs mt-4">※ 현장 상황에 따라 가격이 달라질 수 있습니다</p>
          </div>
        </div>
      </section>
      */}

      {/* Factors */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-black text-stone-800 mb-2">시공 가격에 영향을 주는 요인</h2>
        <p className="text-stone-500 text-sm mb-10">이런 요소들로 인해 견적이 달라집니다</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FACTORS.map((f) => (
            <div key={f.title} className="bg-stone-50 rounded-2xl p-6">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl mb-4">
                <i className={`${f.icon} text-xl text-stone-600`}></i>
              </div>
              <h3 className="font-bold text-stone-800 mb-2">{f.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-stone-50 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-xl font-black text-stone-800 mb-3">정확한 시공 비용이 궁금하신가요?</h2>
          <p className="text-stone-500 text-sm mb-6">현장 상황에 따라 가격이 달라질 수 있습니다. 무료 현장 방문 후 공간별 맞춤 견적을 안내해 드립니다.</p>
          <a
            href="/#quote"
            className="call-bg inline-flex items-center gap-2 bg-stone-800 text-white text-sm font-bold px-7 py-3 rounded-full hover:bg-stone-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-line"></i>
            무료 견적 신청
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
