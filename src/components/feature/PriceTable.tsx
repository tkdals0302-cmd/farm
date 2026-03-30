import { useState } from 'react';
import { TABLE_ROWS, SET_CARDS, MAT_CARDS } from './priceData';
import type { HouseType } from './priceData';

const SPACE_FILTERS = ['전체', '화장실', '거실', '현관·베란다·외부화장실'] as const;
type SpaceFilter = (typeof SPACE_FILTERS)[number];

function matchFilter(space: string, filter: SpaceFilter) {
  if (filter === '전체') return true;
  if (filter === '현관·베란다·외부화장실') return ['현관', '베란다', '외부화장실'].includes(space);
  return space === filter;
}

export default function PriceTable() {
  const [filter, setFilter] = useState<SpaceFilter>('전체');
  const [houseType, setHouseType] = useState<HouseType>('신축');

  const filtered = TABLE_ROWS.filter((r) => matchFilter(r.space, filter));

  return (
    <div className="pt-root mt-14">
      {/* [1] 필터 컨트롤 */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="flex flex-wrap gap-2">
          {SPACE_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                filter === f
                  ? 'bg-stone-800 text-white'
                  : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="ml-auto flex bg-stone-100 rounded-full p-0.5">
          {(['신축', '구축'] as HouseType[]).map((h) => (
            <button
              key={h}
              onClick={() => setHouseType(h)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                houseType === h ? 'bg-white text-stone-800 shadow-sm' : 'text-stone-500'
              }`}
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      {/* [2] 가격 테이블 */}
      <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-stone-50 border-b border-stone-200">
            <tr>
              <th className="px-5 py-3.5 text-left font-bold text-stone-800">공간</th>
              <th className="px-5 py-3.5 text-left font-bold text-stone-800">범위</th>
              <th className="px-5 py-3.5 text-left font-bold text-stone-800">
                케라폭시
              </th>
              <th className="px-5 py-3.5 text-left font-bold text-stone-800">
                폴리우레아
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={`${row.space}-${row.range}`} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}>
                <td className="px-5 py-3.5 font-medium text-stone-800">{row.space}</td>
                <td className="px-5 py-3.5 text-stone-600">{row.range}</td>
                <td className="px-5 py-3.5 font-bold text-stone-800">
                  <span className="inline-flex items-center gap-1.5">
                    {row.recMat === 'kera' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-800" />}
                    {row.kera === null ? (
                      <span className="text-stone-400 font-normal">별도 협의</span>
                    ) : (
                      <>{row.kera[houseType]}만원</>
                    )}
                  </span>
                </td>
                <td className="px-5 py-3.5 font-bold text-stone-800">
                  <span className="inline-flex items-center gap-1.5">
                    {row.recMat === 'poly' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-800" />}
                    {row.poly === null ? (
                      <span className="text-stone-400 font-normal">별도 협의</span>
                    ) : (
                      <>{row.poly[houseType]}만원</>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-stone-400 text-xs mt-3">※ 위 가격은 참고용이며, 정확한 견적은 현장 방문 후 안내드립니다. <span className="inline-flex items-center gap-1 ml-1"><span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-800" /> 추천 소재</span></p>

      {/* [3] 세트 할인 카드 */}
      <h3 className="text-lg font-black text-stone-800 mt-12 mb-5">세트 할인 패키지</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SET_CARDS.map((card) => (
          <div key={card.label} className="rounded-xl border border-stone-200 bg-white p-5">
            <span className="text-xs font-bold text-stone-500">{card.label}</span>
            <p className="font-bold text-stone-800 mt-1 mb-3 text-sm">{card.name}</p>
            <ul className="space-y-1.5 mb-4">
              {card.items.map((item) => (
                <li key={item.name} className="flex justify-between text-xs text-stone-600">
                  <span>{item.name}</span>
                  <span className="font-medium">{item.price}만원</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-stone-100 pt-3 flex items-center justify-between">
              <div>
                <span className="text-stone-400 text-sm line-through mr-2">{card.original}만원</span>
                <span className="text-stone-800 text-lg font-black">{card.final}만원</span>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-green-50 text-green-800">
                {card.save}만원 절약
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* [4] 소재 비교 카드 */}
      <h3 className="text-lg font-black text-stone-800 mt-12 mb-5">소재별 비교</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MAT_CARDS.map((card) => (
          <div
            key={card.name}
            className={`rounded-xl p-5 ${
              card.highlight
                ? 'border-2 border-stone-800 bg-white'
                : 'border border-stone-200 bg-white'
            }`}
          >
            <span
              className={`inline-block text-xs font-bold px-2.5 py-1 rounded-lg mb-3 ${
                card.highlight ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-600'
              }`}
            >
              {card.badge}
            </span>
            <p className="font-black text-stone-800 text-base">{card.name}</p>
            <p className="text-stone-500 text-xs mt-1 mb-4">{card.life}</p>
            <div className="flex gap-4 mb-4">
              <div>
                <span className="text-stone-400 text-xs">신축</span>
                <p className="font-bold text-stone-800 text-sm">{card.prices.신축}</p>
              </div>
              <div>
                <span className="text-stone-400 text-xs">구축</span>
                <p className="font-bold text-stone-800 text-sm">{card.prices.구축}</p>
              </div>
            </div>
            <p className="text-stone-500 text-xs leading-relaxed whitespace-pre-line">{card.pros}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
