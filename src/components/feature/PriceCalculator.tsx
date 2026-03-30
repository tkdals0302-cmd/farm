import { useState, useEffect } from 'react';
import { PRICE_DATA, SPACES, HOUSE_TYPES, SET_CARDS } from './priceData';
import type { HouseType } from './priceData';

const INCLUDES = ['자재비 포함', '인건비 포함', '출장비 포함', '5년 무상 A/S'];

export default function PriceCalculator() {
  const [space, setSpace] = useState('');
  const [r1, setR1] = useState('');
  const [r2, setR2] = useState('');
  const [houseType, setHouseType] = useState<HouseType>('신축');

  const data = space ? PRICE_DATA[space] : null;
  const r1Options = data?.r1 ?? [];
  const r2Map = data?.r2;
  const r2Options = r2Map && r1 ? r2Map[r1] ?? [] : [];
  const showR2 = !!r2Map;

  // 공간 변경 시 하위 선택 초기화
  useEffect(() => {
    if (!data) { setR1(''); setR2(''); return; }
    // 현관·베란다·외부화장실은 r1 자동 선택
    if (data.r1.length === 1) {
      setR1(data.r1[0]);
    } else {
      setR1('');
    }
    setR2('');
  }, [space]);

  // r1 변경 시 r2 초기화
  useEffect(() => {
    setR2('');
  }, [r1]);

  // 가격 조회
  const getPrice = (material: 'kera' | 'poly'): number | null | undefined => {
    if (!data || !r1) return undefined;
    if (!(r1 in data.prices)) return undefined;
    const priceBlock = data.prices[r1];
    if (priceBlock === null) return null; // 별도 협의

    if (showR2) {
      if (!r2) return undefined;
      const nested = priceBlock as any;
      if (!nested || !nested[r2]) return undefined;
      const entry = nested[r2];
      return entry?.[material]?.[houseType] ?? undefined;
    }

    return (priceBlock as any)?.[material]?.[houseType] ?? undefined;
  };

  const keraPrice = getPrice('kera');
  const polyPrice = getPrice('poly');
  const isReady = space && r1 && (!showR2 || r2) && houseType;
  const rec = data?.rec;

  return (
    <div className="pc-root mt-12">
      {/* Dropdowns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {/* 공간 */}
        <select
          value={space}
          onChange={(e) => setSpace(e.target.value)}
          className="pc-select"
        >
          <option value="">공간 선택</option>
          {SPACES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        {/* 범위 1 */}
        <select
          value={r1}
          onChange={(e) => setR1(e.target.value)}
          disabled={!space || r1Options.length <= 1}
          className="pc-select"
        >
          <option value="">{r1Options.length <= 1 && r1 ? r1 : '범위 선택'}</option>
          {r1Options.length > 1 && r1Options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>

        {/* 범위 2 */}
        <select
          value={r2}
          onChange={(e) => setR2(e.target.value)}
          disabled={!showR2 || !r1}
          className="pc-select"
        >
          <option value="">{showR2 ? '시공 범위' : '시공 범위'}</option>
          {r2Options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>

        {/* 집 유형 */}
        <select
          value={houseType}
          onChange={(e) => setHouseType(e.target.value as HouseType)}
          className="pc-select"
        >
          {HOUSE_TYPES.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
      </div>

      {/* 포함 항목 */}
      <div className="flex flex-wrap gap-3 mb-6">
        {INCLUDES.map((item) => (
          <span key={item} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-green-100 text-green-700">
            <i className="ri-check-line"></i>
            {item}
          </span>
        ))}
      </div>

      {/* 가격 카드 */}
      {!isReady ? (
        <div className="text-center py-16 text-stone-500 text-base flex flex-col items-center gap-2">
          <i className="ri-home-heart-line text-6xl text-stone-300" aria-hidden="true"></i>
          <span className="font-bold">공간과 집 유형을 선택하면 견적이 나와요</span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 케라폭시 카드 */}
            <PriceCard
              label="케라폭시"
              price={keraPrice}
              isRec={rec === 'kera'}
              recLabel="프리미엄 추천"
            />
            {/* 폴리우레아 카드 */}
            <PriceCard
              label="폴리우레아"
              price={polyPrice}
              isRec={rec === 'poly'}
              recLabel="가성비 추천"
            />
          </div>

          {/* 매칭 세트 할인 */}
          {(() => {
            const matched = SET_CARDS.filter((c) => c.spaces.includes(space));
            if (matched.length === 0) return null;
            return (
              <div className="mt-6">
                <p className="text-sm font-bold text-stone-800 mb-3">
                  <i className="ri-price-tag-3-line mr-1"></i>
                  이 공간이 포함된 세트 할인
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {matched.map((card) => (
                    <div key={card.label} className="rounded-xl border border-stone-200 bg-white p-4">
                      <span className="text-xs font-bold text-stone-500">{card.label}</span>
                      <p className="font-bold text-stone-800 text-sm mt-1 mb-2">{card.name}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-stone-400 text-sm line-through">{card.original}만원</span>
                        <span className="text-stone-800 text-base font-black">{card.final}만원</span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-green-50 text-green-800">
                          {card.save}만원 절약
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </>
      )}

      <style>{`
        .pc-select {
          appearance: none;
          background-color: #fff;
          border: 1px solid #e4e4e7;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 14px;
          color: #18181b;
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2371717a' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 5.646a.5.5 0 0 1 .708 0L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px;
          transition: border-color 0.15s;
        }
        .pc-select:focus {
          outline: none;
          border-color: #18181b;
        }
        .pc-select:disabled {
          cursor: not-allowed;
          background-color: #e4e4e7;
          color: #a1a1aa;
        }
      `}</style>
    </div>
  );
}

function PriceCard({
  label,
  price,
  isRec,
  recLabel,
}: {
  label: string;
  price: number | null | undefined;
  isRec: boolean;
  recLabel: string;
}) {
  return (
    <div
      className={`relative rounded-xl p-6 ${
        isRec ? 'border-2 border-green-600 bg-white' : 'border border-stone-200 bg-white'
      }`}
    >
      {isRec && (
        <span className="absolute -top-3 left-5 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {recLabel}
        </span>
      )}
      <p className="text-stone-500 text-sm mb-2">{label}</p>
      {price === null ? (
        <p className="text-2xl font-black text-stone-800">별도 협의</p>
      ) : price === undefined ? (
        <p className="text-2xl font-black text-stone-300">-</p>
      ) : (
        <p className="text-2xl font-black text-stone-800">
          {price}<span className="text-base font-bold text-stone-500">만원</span>
        </p>
      )}
    </div>
  );
}
