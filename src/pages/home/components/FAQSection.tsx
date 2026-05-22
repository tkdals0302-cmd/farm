import { useState } from 'react';
import { faqItems } from '../../../mocks/faqData';
import { Events } from '../../../lib/analytics';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg-2)]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase">FAQ</span>
          <h2
            className="text-4xl md:text-5xl font-medium text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            자주 묻는 질문
          </h2>
          <p className="text-[var(--muted)] mt-3 text-base">궁금하신 점을 확인하세요</p>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`border-b ${index === 0 ? 'border-t' : ''} border-[var(--line)]`}
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
              >
                <span
                  className={`text-base font-medium leading-snug transition-colors ${
                    openId === item.id ? 'text-[var(--ink)]' : 'text-[var(--muted)] group-hover:text-[var(--ink-2)]'
                  }`}
                >
                  {item.question}
                </span>
                <div
                  className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full transition-all ${
                    openId === item.id
                      ? 'bg-[var(--ink)] text-[var(--paper)] rotate-45'
                      : 'bg-[var(--paper)] text-[var(--muted)] border border-[var(--line)]'
                  }`}
                >
                  <i className="ri-add-line text-sm"></i>
                </div>
              </button>

              {openId === item.id && (
                <div className="pb-10 bg-[var(--paper)]">
                  <p className="px-5 pt-3 text-[var(--ink-2)] text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-[var(--paper)] border border-[var(--line)] rounded-sm py-10 px-6">
          <p className="text-stone-600 font-medium mb-2">원하는 답을 찾지 못하셨나요?</p>
          <p className="text-stone-400 text-sm mb-6">전화로 편하게 문의해 주세요</p>
          <div className="flex justify-center">
            <a
              href="tel:010-8005-6674"
              onClick={() => Events.phoneClick('faq')}
              className="inline-flex h-12 sm:min-w-[180px] items-center justify-center gap-2 px-7 text-sm font-medium cursor-pointer rounded-sm bg-[var(--accent)] text-white transition-all hover:bg-[var(--accent-deep)]"
            >
              <i className="ri-phone-line"></i>
                010-8005-6674
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
