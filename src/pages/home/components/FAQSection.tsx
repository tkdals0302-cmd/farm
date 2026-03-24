import { useState } from 'react';
import { faqItems } from '../../../mocks/faqData';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest text-stone-400 uppercase">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 mt-2">자주 묻는 질문</h2>
          <p className="text-stone-500 mt-3 text-base">궁금하신 점을 확인하세요</p>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`border-b ${index === 0 ? 'border-t' : ''} border-stone-100`}
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
              >
                <span
                  className={`text-base font-semibold leading-snug transition-colors ${
                    openId === item.id ? 'text-stone-900' : 'text-stone-500 group-hover:text-stone-500'
                  }`}
                >
                  {item.question}
                </span>
                <div
                  className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full transition-all ${
                    openId === item.id
                      ? 'bg-stone-900 text-white rotate-45'
                      : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  <i className="ri-add-line text-sm"></i>
                </div>
              </button>

              {openId === item.id && (
                <div className="pb-10 bg-stone-50">
                  <p className="px-5 pt-3 text-stone-600 text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-stone-100 rounded-2xl py-10 px-6">
          <p className="text-stone-600 font-medium mb-2">원하는 답을 찾지 못하셨나요?</p>
          <p className="text-stone-400 text-sm mb-6">전화 또는 카카오톡으로 편하게 문의해 주세요</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:010-8005-6674"
              className="inline-flex h-12 sm:min-w-[180px] items-center justify-center gap-2 px-7 text-sm font-semibold cursor-pointer rounded-full bg-[#967353] text-white transition-all hover:bg-[#7a5c3d]"
            >
              <i className="ri-phone-line"></i>
                010-8005-6674
            </a>
            <a
              href="https://pf.kakao.com"
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex h-12 sm:min-w-[180px] items-center justify-center gap-2 px-7 text-sm font-semibold rounded-full bg-yellow-400 text-stone-900 hover:bg-yellow-300 transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-kakao-talk-fill"></i>
              카카오톡 문의
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
