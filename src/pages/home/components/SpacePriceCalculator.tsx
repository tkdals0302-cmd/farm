import { useState, useMemo, useEffect } from 'react';
import {
  QUOTE_PREFILL_KEY,
  QUOTE_PREFILL_EVENT,
  uniqueAreas,
  type QuotePrefill,
} from '../../../lib/quotePrefill';

type HouseType = '신축' | '구축';
type Material = 'kera' | 'poly';

interface Variant {
  id: string;
  label: string;
  type?: string;
  scope?: string;
  kera: { 신축: number; 구축: number } | null;
  poly: { 신축: number; 구축: number } | null;
}

interface SpaceDef {
  label: string;
  en: string;
  icon: string;
  rec: Material;
  materialLocked: boolean;
  multiple?: boolean;
  note?: string;
  typeAxis?: { lbl: string; options: string[] };
  scopeAxis?: { lbl: string; options: string[] };
  variants: Variant[];
}

interface SetComponent {
  space: string;
  variantId: string;
  material: Material;
}

interface SetDef {
  name: string;
  sub: string;
  desc: string;
  prices: { 신축: number; 구축: number };
  components: SetComponent[];
  services: string[];
}

interface Selection {
  key: string;
  space: string;
  variantId: string;
  material: Material;
}

const PRICE_DATA: Record<string, SpaceDef> = {
  '화장실': {
    label: '화장실', en: 'BATHROOM', icon: '🛁',
    rec: 'kera', materialLocked: true, multiple: true,
    typeAxis:  { lbl: '타입', options: ['욕조형', '샤워부스형'] },
    scopeAxis: { lbl: '범위', options: ['바닥만', '전체(바닥+벽)'] },
    variants: [
      { id: 'bt-floor', label: '욕조형 · 바닥만',         type: '욕조형',   scope: '바닥만',        kera: { 신축: 40, 구축: 50  }, poly: null },
      { id: 'bt-full',  label: '욕조형 · 전체 (바닥+벽)', type: '욕조형',   scope: '전체(바닥+벽)', kera: { 신축: 90, 구축: 100 }, poly: null },
      { id: 'sh-floor', label: '샤워부스형 · 바닥만',       type: '샤워부스형', scope: '바닥만',        kera: { 신축: 45, 구축: 55  }, poly: null },
      { id: 'sh-full',  label: '샤워부스형 · 전체 (바닥+벽)', type: '샤워부스형', scope: '전체(바닥+벽)', kera: { 신축: 95, 구축: 105 }, poly: null },
    ],
  },
  '거실 바닥': {
    label: '거실 바닥', en: 'LIVING FLOOR', icon: '🛋️',
    rec: 'kera', materialLocked: true, note: '34평 이하 기준',
    variants: [{ id: 'lv', label: '34평 미만', kera: { 신축: 150, 구축: 150 }, poly: null }],
  },
  '현관': {
    label: '현관', en: 'ENTRANCE', icon: '🚪',
    rec: 'poly', materialLocked: false,
    variants: [{ id: 'ent', label: '바닥', kera: { 신축: 25, 구축: 25 }, poly: { 신축: 5, 구축: 10 } }],
  },
  '세탁실': {
    label: '세탁실', en: 'LAUNDRY', icon: '🧺',
    rec: 'poly', materialLocked: false,
    variants: [{ id: 'ldy', label: '바닥', kera: { 신축: 30, 구축: 30 }, poly: { 신축: 15, 구축: 15 } }],
  },
  '베란다': {
    label: '베란다', en: 'VERANDA', icon: '🌿',
    rec: 'poly', materialLocked: false,
    variants: [{ id: 'ver', label: '바닥', kera: { 신축: 30, 구축: 30 }, poly: { 신축: 15, 구축: 15 } }],
  },
  '다용도/실외기실': {
    label: '다용도/실외기실', en: 'UTILITY', icon: '🪟',
    rec: 'poly', materialLocked: false,
    variants: [{ id: 'utl', label: '바닥', kera: { 신축: 20, 구축: 20 }, poly: { 신축: 10, 구축: 10 } }],
  },
};

const MATERIAL_LABEL: Record<Material, string> = { kera: '케라폭시', poly: '폴리우레아' };

const SETS: Record<string, SetDef> = {
  '1': {
    name: '세트 1', sub: '기본',
    desc: '화장실 바닥 ×2 + 현관',
    prices: { 신축: 100, 구축: 120 },
    components: [
      { space: '화장실', variantId: 'bt-floor', material: 'kera' },
      { space: '화장실', variantId: 'sh-floor', material: 'kera' },
      { space: '현관',   variantId: 'ent',      material: 'poly' },
    ],
    services: [],
  },
  '2': {
    name: '세트 2', sub: '표준',
    desc: '세트 1 + 양조벽 or 샤워벽 3면 ×1곳',
    prices: { 신축: 125, 구축: 145 },
    components: [
      { space: '화장실', variantId: 'bt-full',  material: 'kera' },
      { space: '화장실', variantId: 'sh-floor', material: 'kera' },
      { space: '현관',   variantId: 'ent',      material: 'poly' },
    ],
    services: ['젠 다이 실리콘 ×2', '세면대 실리콘 ×2'],
  },
  '3': {
    name: '세트 3', sub: '완성',
    desc: '화장실 바닥 ×2 + 전체벽 ×2 + 현관',
    prices: { 신축: 220, 구축: 240 },
    components: [
      { space: '화장실', variantId: 'bt-full', material: 'kera' },
      { space: '화장실', variantId: 'sh-full', material: 'kera' },
      { space: '현관',   variantId: 'ent',     material: 'poly' },
    ],
    services: ['젠 다이 실리콘 ×2', '세면대 실리콘 ×2', '싱크볼 실리콘', '주방벽 케라폭시'],
  },
  '4': {
    name: '세트 4', sub: '확장',
    desc: '세트 2 + 세탁실',
    prices: { 신축: 140, 구축: 160 },
    components: [
      { space: '화장실', variantId: 'bt-full',  material: 'kera' },
      { space: '화장실', variantId: 'sh-floor', material: 'kera' },
      { space: '현관',   variantId: 'ent',      material: 'poly' },
      { space: '세탁실', variantId: 'ldy',      material: 'poly' },
    ],
    services: ['젠 다이 실리콘 ×2', '세면대 실리콘 ×2', '주방 실리콘', '싱크볼 실리콘'],
  },
};

const SPACE_ORDER = ['화장실', '거실 바닥', '현관', '세탁실', '베란다', '다용도/실외기실'];

const getVariant = (space: string, variantId: string): Variant | undefined =>
  PRICE_DATA[space]?.variants.find(v => v.id === variantId);

const bathroomVariantId = (type: string, scope: string): string => {
  const map: Record<string, string> = {
    '욕조형|바닥만': 'bt-floor',
    '욕조형|전체(바닥+벽)': 'bt-full',
    '샤워부스형|바닥만': 'sh-floor',
    '샤워부스형|전체(바닥+벽)': 'sh-full',
  };
  return map[`${type}|${scope}`] ?? 'bt-floor';
};

const getLinePrice = (sel: Selection, houseType: HouseType): number | null => {
  const sp = PRICE_DATA[sel.space];
  const v = getVariant(sel.space, sel.variantId);
  if (!sp || !v) return null;
  const mat = sp.materialLocked ? sp.rec : sel.material;
  const block = v[mat];
  return block ? block[houseType] : null;
};

const makeKey = () => `sel-${Math.random().toString(36).slice(2, 9)}-${Date.now().toString(36)}`;

const formatPrice = (n: number) => n.toLocaleString('ko-KR');

export default function SpacePriceCalculator() {
  const [houseType, setHouseType] = useState<HouseType>('신축');
  const [selections, setSelections] = useState<Selection[]>([]);
  const [selectedSet, setSelectedSet] = useState<string | null>(null);
  const [setStepOpen, setSetStepOpen] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const bathrooms = selections.filter(s => s.space === '화장실');
  const hasFirstBathroom = bathrooms.length >= 1;
  const hasSecondBathroom = bathrooms.length >= 2;

  const isSpaceSelected = (space: string) =>
    selections.some(s => s.space === space);

  const clearSet = () => setSelectedSet(null);

  const toggleSpace = (space: string) => {
    clearSet();
    if (isSpaceSelected(space)) {
      setSelections(prev => prev.filter(s => s.space !== space));
    } else {
      const sp = PRICE_DATA[space];
      const v = sp.variants[0];
      setSelections(prev => [
        ...prev,
        { key: makeKey(), space, variantId: v.id, material: sp.rec },
      ]);
    }
  };

  const toggleFirstBathroom = () => {
    clearSet();
    if (hasFirstBathroom) {
      setSelections(prev => prev.filter(s => s.space !== '화장실'));
    } else {
      setSelections(prev => [
        ...prev,
        { key: makeKey(), space: '화장실', variantId: 'bt-floor', material: 'kera' },
      ]);
    }
  };

  const toggleSecondBathroom = () => {
    if (!hasFirstBathroom) return;
    clearSet();
    if (hasSecondBathroom) {
      const idxs = selections.map((s, i) => (s.space === '화장실' ? i : -1)).filter(i => i >= 0);
      const secondIdx = idxs[1];
      setSelections(prev => prev.filter((_, i) => i !== secondIdx));
    } else {
      const first = selections.find(s => s.space === '화장실');
      const firstType = first ? getVariant('화장실', first.variantId)?.type : undefined;
      const otherType = firstType === '욕조형' ? '샤워부스형' : '욕조형';
      const variantId = bathroomVariantId(otherType, '바닥만');
      setSelections(prev => [
        ...prev,
        { key: makeKey(), space: '화장실', variantId, material: 'kera' },
      ]);
    }
  };

  const pickSet = (setId: string) => {
    if (selectedSet === setId) {
      setSelectedSet(null);
      setSelections([]);
      return;
    }
    const set = SETS[setId];
    const nextSelections: Selection[] = set.components.map(c => ({
      key: makeKey(),
      space: c.space,
      variantId: c.variantId,
      material: c.material,
    }));
    setSelections(nextSelections);
    setSelectedSet(setId);
  };

  const updateSel = (key: string, patch: Partial<Selection>) => {
    clearSet();
    setSelections(prev => prev.map(s => (s.key === key ? { ...s, ...patch } : s)));
  };

  const removeSel = (key: string) => {
    clearSet();
    setSelections(prev => prev.filter(s => s.key !== key));
  };

  const clearAll = () => {
    setSelections([]);
    setSelectedSet(null);
  };

  const calc = useMemo(() => {
    const bathroomVariants = selections.filter(s => s.space === '화장실');
    const lineItems = selections.map(sel => {
      const sp = PRICE_DATA[sel.space];
      const v = getVariant(sel.space, sel.variantId)!;
      const mat: Material = sp.materialLocked ? sp.rec : sel.material;
      const unit = getLinePrice(sel, houseType);
      const showVariantLabel = bathroomVariants.length > 1 && sel.space === '화장실';
      return {
        key: sel.key,
        space: sel.space,
        icon: sp.icon,
        label: `${sel.space}${showVariantLabel ? ' · ' + v.label : ''}`,
        material: mat,
        unit,
      };
    });
    const itemsSum = lineItems.reduce((acc, it) => acc + (it.unit ?? 0), 0);
    const hasNull = lineItems.some(it => it.unit === null);
    const set = selectedSet ? SETS[selectedSet] : null;
    const finalTotal = set ? set.prices[houseType] : itemsSum;
    const savings = set ? Math.max(0, itemsSum - finalTotal) : 0;
    return { lineItems, itemsSum, hasNull, finalTotal, savings, set };
  }, [selections, houseType, selectedSet]);

  const handleQuoteCTA = () => {
    if (selections.length === 0) return;
    const lines: string[] = [];
    lines.push(`[가격 계산기에서 전달된 구성 · ${houseType} 기준]`);
    if (calc.set) {
      lines.push(`✓ ${calc.set.name} · ${calc.set.sub} (${calc.set.desc})`);
    }
    lines.push('');

    const bathroomCount = selections.filter(s => s.space === '화장실').length;
    let bIdx = 0;
    for (const sel of selections) {
      const sp = PRICE_DATA[sel.space];
      const v = getVariant(sel.space, sel.variantId)!;
      const mat: Material = sp.materialLocked ? sp.rec : sel.material;
      const matLabel = MATERIAL_LABEL[mat];
      const unit = getLinePrice(sel, houseType);
      const priceStr = unit === null ? '별도 견적' : `${unit}만원`;

      let title: string;
      if (sel.space === '화장실') {
        bIdx += 1;
        const num = bathroomCount > 1 ? ` ${bIdx}` : '';
        title = `화장실${num} · ${v.label}`;
      } else if (sp.variants.length > 1 || v.label !== '바닥') {
        title = `${sel.space} · ${v.label}`;
      } else {
        title = sel.space;
      }
      lines.push(`· ${title} · ${matLabel} — ${priceStr}`);
    }

    if (calc.set && calc.set.services.length > 0) {
      lines.push('');
      lines.push('함께 제공 서비스:');
      for (const s of calc.set.services) lines.push(`· ${s}`);
    }

    lines.push('');
    lines.push('───────────');
    if (calc.set && calc.savings > 0) {
      lines.push(`개별 합계: ${calc.itemsSum}만원`);
      lines.push(`세트 적용: -${calc.savings}만원`);
    }
    lines.push(
      `예상 견적가: ${calc.finalTotal}만원${calc.hasNull ? ' +α' : ''} (VAT 포함, 34평·300타일 기준)`,
    );
    lines.push('※정확한 금액은 유선상담 진행 후 안내드립니다.');

    const payload: QuotePrefill = {
      areas: uniqueAreas(selections.map(s => s.space)),
      message: lines.join('\n').slice(0, 500),
    };

    try {
      sessionStorage.setItem(QUOTE_PREFILL_KEY, JSON.stringify(payload));
      window.dispatchEvent(new CustomEvent(QUOTE_PREFILL_EVENT));
    } catch {
      /* sessionStorage unavailable — modal still confirms intent */
    }

    setShowQuoteModal(true);
  };

  const goToQuoteForm = () => {
    setShowQuoteModal(false);
    const el = document.querySelector('#quote');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!showQuoteModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowQuoteModal(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [showQuoteModal]);

  return (
    <section id="calc" className="spc-section py-20 px-6 md:px-12 lg:px-20">
      <div className="spc-container max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase">Price Calculator</span>
          <h2
            className="text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            <span className="md:block">공간을 고르면,<br></br></span>{' '}
            <span className="md:block">가격이 바로 보입니다</span>
          </h2>
          <p className="text-stone-500 mt-1 sm:mt-3 text-base max-w-[56ch]">필요한 공간만 골라 실시간 견적을 확인하세요</p>
          <div className="spc-info-chips mt-5">
            <span className="spc-info-chip">34평 이하 기준</span>
            <span className="spc-info-chip">300개 타일 기준</span>
            <span className="spc-info-chip">VAT 포함</span>
          </div>
        </div>

        <div className="spc-body">
          {/* LEFT */}
          <div className="spc-left">
            {/* STEP 01 */}
            <div className="spc-step">
              <div className="spc-step-head">
                <div className="spc-step-num">01</div>
                <div className="spc-step-titles">
                  <div className="spc-step-title">시공할 공간을 선택해 주세요</div>
                  <div className="spc-step-sub">여러 공간을 자유롭게 조합하세요 · 화장실은 최대 2곳까지</div>
                </div>
                {selections.length > 0 && (
                  <button type="button" className="spc-step-action" onClick={clearAll}>
                    전체 초기화
                  </button>
                )}
              </div>

              <div className="spc-step-body">
                <div className="spc-space-grid">
                  {/* 화장실 1 */}
                  <SpaceCard
                    icon={PRICE_DATA['화장실'].icon}
                    label="화장실 1"
                    en="BATHROOM"
                    selected={hasFirstBathroom}
                    onClick={toggleFirstBathroom}
                  />
                  {/* 화장실 (추가) */}
                  <SpaceCard
                    icon={PRICE_DATA['화장실'].icon}
                    label="화장실 (추가)"
                    en="BATHROOM +"
                    selected={hasSecondBathroom}
                    disabled={!hasFirstBathroom}
                    onClick={toggleSecondBathroom}
                  />
                  {/* 나머지 공간 */}
                  {SPACE_ORDER.slice(1).map(space => (
                    <SpaceCard
                      key={space}
                      icon={PRICE_DATA[space].icon}
                      label={PRICE_DATA[space].label}
                      en={PRICE_DATA[space].en}
                      selected={isSpaceSelected(space)}
                      onClick={() => toggleSpace(space)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* STEP 02 - Accordion */}
            <div className="spc-step">
              <button
                type="button"
                className="spc-accordion-head"
                onClick={() => setSetStepOpen(o => !o)}
                aria-expanded={setStepOpen}
              >
                <div className="spc-step-num">02</div>
                <div className="spc-step-titles">
                  <div className="spc-step-title">또는 간편 세트 패키지로 선택</div>
                  <div className="spc-step-sub">자주 함께 시공되는 4가지 구성</div>
                </div>
                <span className="spc-accordion-chev" aria-hidden="true">
                  {setStepOpen ? '−' : '+'}
                </span>
              </button>
              {setStepOpen && (
                <div className="spc-step-body">
                  <div className="spc-set-grid">
                    {(['1', '2', '3', '4'] as const).map(id => (
                      <SetCard
                        key={id}
                        id={id}
                        set={SETS[id]}
                        selected={selectedSet === id}
                        houseType={houseType}
                        onPick={() => pickSet(id)}
                      />
                    ))}
                  </div>
                  <p className="spc-set-note">
                    ※ 세트 가격은 컴포넌트 개별 합산과 동일하지 않습니다. 추가 서비스 포함 구성이며, 4개 세트는 시각적으로 동등하게 노출됩니다.
                  </p>
                </div>
              )}
            </div>

            {/* STEP 03 - Selection details */}
            {selections.length > 0 && (
              <div className="spc-step">
                <div className="spc-step-head">
                  <div className="spc-step-num">03</div>
                  <div className="spc-step-titles">
                    <div className="spc-step-title">세부 옵션을 조정해 보세요</div>
                    <div className="spc-step-sub">타입 · 범위 · 자재를 변경하면 견적이 실시간으로 업데이트됩니다</div>
                  </div>
                </div>
                <div className="spc-step-body">
                  <div className="spc-selrow-list">
                    {selections.map((sel, idx) => (
                      <SelectionRow
                        key={sel.key}
                        sel={sel}
                        houseType={houseType}
                        bathroomIndex={
                          sel.space === '화장실'
                            ? bathrooms.findIndex(b => b.key === sel.key)
                            : -1
                        }
                        bathroomCount={bathrooms.length}
                        onUpdate={(patch) => updateSel(sel.key, patch)}
                        onRemove={() => removeSel(sel.key)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT - Result Panel */}
          <aside className="spc-right">
            <div className="spc-result">
              <div className="spc-result-eyebrow">
                <span className="spc-result-ht-lbl">줄눈 시공 계산기</span>
              </div>

              <div className="spc-result-ht">
                <span className="spc-result-ht-lbl">주거 유형</span>
                <div className="spc-ht-toggle">
                  {(['신축', '구축'] as const).map(ht => (
                    <button
                      key={ht}
                      type="button"
                      className={`spc-ht-btn ${houseType === ht ? 'on' : ''}`}
                      onClick={() => setHouseType(ht)}
                    >
                      {ht}
                    </button>
                  ))}
                </div>
              </div>

              {calc.set && (
                <div className="spc-set-banner">
                  <div className="spc-set-banner-meta">
                    <span className="spc-set-banner-lbl">★ SET APPLIED</span>
                    <span className="spc-set-banner-name">
                      {calc.set.name} <span className="spc-set-banner-sub">· {calc.set.sub}</span>
                    </span>
                  </div>
                  <button type="button" className="spc-set-banner-clear" onClick={clearSet} aria-label="세트 해제">
                    ×
                  </button>
                </div>
              )}

              {selections.length === 0 ? (
                <div className="spc-result-empty">
                  좌측에서 공간을 개별로 선택하거나,
                  <br />
                  세트 패키지를 골라 보세요.
                </div>
              ) : (
                <>
                  <div className="spc-result-section">
                    <div className="spc-result-section-lbl">
                      선택 항목 · {calc.lineItems.length}건
                    </div>
                    <ul className="spc-line-items">
                      {calc.lineItems.map(it => (
                        <li key={it.key} className="spc-line-item">
                          <div className="spc-li-main">
                            <span className="spc-li-icon" aria-hidden="true">{it.icon}</span>
                            <div className="spc-li-text">
                              <div className="spc-li-label">{it.label}</div>
                              <div className="spc-li-meta">
                                {MATERIAL_LABEL[it.material]} · {houseType}
                              </div>
                            </div>
                          </div>
                          <div className="spc-li-price">
                            {it.unit === null ? (
                              <span className="spc-li-quote">별도 견적</span>
                            ) : (
                              <>
                                <span className="spc-li-val">{formatPrice(it.unit)}</span>
                                <span className="spc-li-unit">만원</span>
                              </>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {calc.set && calc.set.services.length > 0 && (
                    <div className="spc-result-services">
                      <div className="spc-result-section-lbl">+ 함께 제공되는 서비스</div>
                      <ul className="spc-services-list">
                        {calc.set.services.map(s => (
                          <li key={s} className="spc-service-item">✓ {s}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="spc-totals">
                    {calc.set && (
                      <div className="spc-subtotal-row">
                        <span className="spc-totals-lbl">개별 합계</span>
                        <span className="spc-subtotal-val">
                          <span className="strike">{formatPrice(calc.itemsSum)}</span>
                          <span className="spc-totals-suffix">만원</span>
                        </span>
                      </div>
                    )}
                    {calc.set && calc.savings > 0 && (
                      <div className="spc-discount-note">
                        세트 적용 −{formatPrice(calc.savings)}만원
                      </div>
                    )}
                    <div className="spc-final-row">
                      <span className="spc-totals-lbl spc-totals-lbl-accent">최종 견적가</span>
                      <span className="spc-final-price">
                        <span className="spc-final-val">{formatPrice(calc.finalTotal)}</span>
                        <span className="spc-totals-suffix spc-totals-suffix-lg">만원</span>
                        {calc.hasNull && <span className="spc-hasnull">+α</span>}
                      </span>
                    </div>
                    {calc.hasNull && (
                      <div className="spc-hasnull-note">
                        ‘별도 견적’ 항목이 포함되어 있어 현장 확인 후 안내드립니다.
                      </div>
                    )}
                  </div>

                  <button type="button" className="spc-cta" onClick={handleQuoteCTA}>
                    이 구성으로 견적 받기 →
                  </button>
                </>
              )}

              <div className="spc-policy">
                <span className="spc-policy-chip">📷 원격 견적</span>
                <span className="spc-policy-chip">💡 2년 A/S · 케라폭시</span>
                <span className="spc-policy-chip">✓ VAT 포함</span>
              </div>

              <p className="spc-fineprint">
                ※ 34평 이하 · 300개 타일 기준 예상가. 정확한 금액은 사진·정보 확인 후 서면 견적서로 안내드립니다.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {showQuoteModal && (
        <div
          className="spc-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="spc-modal-title"
          onClick={() => setShowQuoteModal(false)}
        >
          <div className="spc-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="spc-modal-close"
              onClick={() => setShowQuoteModal(false)}
              aria-label="닫기"
            >
              ×
            </button>
            <span className="spc-modal-eyebrow">견적 전달 완료</span>
            <h3 id="spc-modal-title" className="spc-modal-title">
              견적 구성이 자동으로 담겼습니다
            </h3>
            <p className="spc-modal-body">
              <strong>이름 · 연락처 · 시공 위치 · 희망 날짜</strong>
              <br />
              4가지 정보만 입력해 주시면
              <br />
              빠른 시간 내 유선으로 안내드리겠습니다.
            </p>
            <button type="button" className="spc-modal-cta" onClick={goToQuoteForm}>
              견적 폼으로 이동 →
            </button>
          </div>
        </div>
      )}

      <style>{SPC_CSS}</style>
    </section>
  );
}

function SpaceCard({
  icon,
  label,
  en,
  selected,
  disabled,
  onClick,
}: {
  icon: string;
  label: string;
  en: string;
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`spc-space-card ${selected ? 'on' : ''} ${disabled ? 'is-disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
    >
      <span className="spc-sc-icon" aria-hidden="true">{icon}</span>
      <span className="spc-sc-meta">
        <span className="spc-sc-label">{label}</span>
        <span className="spc-sc-en">{en}</span>
      </span>
      <span className="spc-sc-action" aria-hidden="true">
        {disabled ? '🔒' : selected ? '✓' : '＋'}
      </span>
    </button>
  );
}

function SetCard({
  id,
  set,
  selected,
  houseType,
  onPick,
}: {
  id: string;
  set: SetDef;
  selected: boolean;
  houseType: HouseType;
  onPick: () => void;
}) {
  return (
    <div className={`spc-set-card ${selected ? 'on' : ''}`}>
      <div className="spc-set-head">
        <span className="spc-set-num">SET 0{id}</span>
        <h3 className="spc-set-name">
          {set.name} <span className="spc-set-sub">· {set.sub}</span>
        </h3>
      </div>
      <p className="spc-set-desc">{set.desc}</p>
      <div className="spc-set-prices">
        <div className="spc-set-price">
          <span className="spc-set-price-lbl">신축</span>
          <span className="spc-set-price-val">{formatPrice(set.prices['신축'])}</span>
          <span className="spc-set-price-unit">만원</span>
        </div>
        <div className="spc-set-price">
          <span className="spc-set-price-lbl">구축</span>
          <span className="spc-set-price-val">{formatPrice(set.prices['구축'])}</span>
          <span className="spc-set-price-unit">만원</span>
        </div>
      </div>
      {set.services.length > 0 && (
        <div className="spc-set-services">
          <div className="spc-set-services-lbl">+ 함께 제공</div>
          <ul>
            {set.services.map(s => (
              <li key={s}>· {s}</li>
            ))}
          </ul>
        </div>
      )}
      <button type="button" className="spc-set-cta" onClick={onPick}>
        {selected ? '✓ 적용 중 · 다시 누르면 해제' : '이 세트로 선택 →'}
      </button>
      <p className="spc-set-note-inner">
        {houseType === '신축' ? '신축' : '구축'} 기준
      </p>
    </div>
  );
}

function SelectionRow({
  sel,
  houseType,
  bathroomIndex,
  bathroomCount,
  onUpdate,
  onRemove,
}: {
  sel: Selection;
  houseType: HouseType;
  bathroomIndex: number;
  bathroomCount: number;
  onUpdate: (patch: Partial<Selection>) => void;
  onRemove: () => void;
}) {
  const sp = PRICE_DATA[sel.space];
  const v = getVariant(sel.space, sel.variantId)!;
  const isBathroom = sel.space === '화장실';
  const mat: Material = sp.materialLocked ? sp.rec : sel.material;
  const unit = getLinePrice(sel, houseType);

  const handleTypeChange = (newType: string) => {
    if (!isBathroom) return;
    const scope = v.scope ?? '바닥만';
    onUpdate({ variantId: bathroomVariantId(newType, scope) });
  };
  const handleScopeChange = (newScope: string) => {
    if (!isBathroom) return;
    const type = v.type ?? '욕조형';
    onUpdate({ variantId: bathroomVariantId(type, newScope) });
  };

  const titleLabel = isBathroom
    ? bathroomCount > 1
      ? `${sp.label} ${bathroomIndex + 1}`
      : sp.label
    : sp.label;

  return (
    <div className="spc-sel-row">
      <div className="spc-sel-row-head">
        <div className="spc-sel-row-title">
          <span className="spc-sr-icon" aria-hidden="true">{sp.icon}</span>
          <span>{titleLabel}</span>
        </div>
        <button type="button" className="spc-sel-x" onClick={onRemove} aria-label="이 항목 삭제">
          ×
        </button>
      </div>
      <div className="spc-sel-row-body">
        {isBathroom && sp.typeAxis && (
          <div className="spc-sr-block">
            <div className="spc-sr-lbl">{sp.typeAxis.lbl}</div>
            <div className="spc-sr-chips">
              {sp.typeAxis.options.map(opt => (
                <button
                  key={opt}
                  type="button"
                  className={`spc-sr-chip ${v.type === opt ? 'on' : ''}`}
                  onClick={() => handleTypeChange(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
        {isBathroom && sp.scopeAxis && (
          <div className="spc-sr-block">
            <div className="spc-sr-lbl">{sp.scopeAxis.lbl}</div>
            <div className="spc-sr-chips">
              {sp.scopeAxis.options.map(opt => (
                <button
                  key={opt}
                  type="button"
                  className={`spc-sr-chip ${v.scope === opt ? 'on' : ''}`}
                  onClick={() => handleScopeChange(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
        {!isBathroom && sp.variants.length > 1 && (
          <div className="spc-sr-block">
            <div className="spc-sr-lbl">옵션</div>
            <div className="spc-sr-chips">
              {sp.variants.map(vr => (
                <button
                  key={vr.id}
                  type="button"
                  className={`spc-sr-chip ${sel.variantId === vr.id ? 'on' : ''}`}
                  onClick={() => onUpdate({ variantId: vr.id })}
                >
                  {vr.label}
                </button>
              ))}
            </div>
          </div>
        )}
        {!sp.materialLocked ? (
          <div className="spc-sr-block">
            <div className="spc-sr-lbl">
              자재 <span className="spc-sr-lbl-aux">권장 {MATERIAL_LABEL[sp.rec]}</span>
            </div>
            <div className="spc-sr-chips">
              {(['kera', 'poly'] as Material[]).map(m => (
                <button
                  key={m}
                  type="button"
                  className={`spc-sr-chip ${mat === m ? 'on' : ''}`}
                  onClick={() => onUpdate({ material: m })}
                >
                  {MATERIAL_LABEL[m]}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="spc-sr-locked">
            EPOXY ONLY · 물 접촉 환경 → 폴리우레아 시공 불가
          </div>
        )}
        <div className="spc-sr-price">
          <span className="spc-sr-price-lbl">{houseType} · 예상가</span>
          {unit === null ? (
            <span className="spc-sr-quote">QUOTE NEEDED · 별도 견적</span>
          ) : (
            <span className="spc-sr-price-val-wrap">
              <span className="spc-sr-price-val">{formatPrice(unit)}</span>
              <span className="spc-sr-price-unit">만원</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

const SPC_CSS = `
.spc-section {
  --bg:#f7f4ef; --bg-2:#efeae1; --paper:#fbf9f5;
  --ink:#1c1916; --ink-2:#2d2926;
  --muted:#6f665a; --muted-2:#8c8276;
  --line:rgba(28,25,22,.12);
  --line-strong:rgba(28,25,22,.22);
  --accent:#8a6a4c; --accent-deep:#5e4733;
  --dark:#18130e; --on-dark:#f3ece1;
  --dark-line:rgba(255,255,255,.1);
  background: var(--bg);
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}
.spc-section .serif { font-family: 'Noto Serif KR', serif; font-style: italic; }
.spc-section .mono { font-family: 'Pretendard Variable', 'Pretendard', sans-serif; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; }

/* Header chips */
.spc-info-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-start; }
.spc-info-chip {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 5px 12px;
  background: var(--paper);
}

/* Layout */
.spc-body {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 32px;
  align-items: start;
}
@media (max-width: 980px) {
  .spc-body { grid-template-columns: 1fr; }
}

/* Step blocks */
.spc-step {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 22px 24px;
  margin-bottom: 18px;
}
.spc-step-head, .spc-accordion-head {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  text-align: left;
}
.spc-accordion-head {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: inherit;
}
.spc-step-num {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 36px;
  font-weight: 400;
  color: var(--accent);
  line-height: 1;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
  min-width: 48px;
}
.spc-step-titles { flex: 1; }
.spc-step-title { font-size: 18px; font-weight: 600; color: var(--ink); }
.spc-step-sub { font-size: 13px; color: var(--muted); margin-top: 4px; }
.spc-step-action {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--muted);
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 6px 12px;
  cursor: pointer;
  transition: all .15s ease;
}
.spc-step-action:hover { color: var(--ink); border-color: var(--line-strong); }
.spc-step-body { margin-top: 18px; }
.spc-accordion-chev {
  font-size: 26px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-weight: 300;
  background: var(--bg);
  transition: all .15s ease;
}
.spc-accordion-head:hover .spc-accordion-chev {
  color: var(--ink);
  border-color: var(--line-strong);
}
@media (max-width: 980px) {
  .spc-step { padding: 18px 18px; }
  .spc-step-num { font-size: 28px; min-width: 36px; }
  .spc-step-title { font-size: 16px; }
  .spc-accordion-chev { width: 32px; height: 32px; font-size: 22px; }
}

/* Space cards */
.spc-space-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
@media (max-width: 640px) {
  .spc-space-grid { grid-template-columns: 1fr; }
}
.spc-space-card {
  display: grid;
  grid-template-columns: 38px 1fr 24px;
  align-items: center;
  gap: 12px;
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 14px 16px;
  cursor: pointer;
  font: inherit;
  color: inherit;
  text-align: left;
  transition: all .15s ease;
}
.spc-space-card:hover:not(.is-disabled):not(.on) {
  border-color: var(--line-strong);
  background: var(--paper);
}
.spc-space-card.on {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--on-dark);
}
.spc-space-card.on .spc-sc-en { color: rgba(255,255,255,.55); }
.spc-space-card.is-disabled {
  border-style: dashed;
  background: var(--bg-2);
  opacity: .45;
  cursor: not-allowed;
}
.spc-sc-icon { font-size: 24px; line-height: 1; }
.spc-sc-meta { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.spc-sc-label { font-size: 15px; font-weight: 600; }
.spc-sc-en {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: var(--muted);
}
.spc-sc-action {
  font-size: 16px;
  color: var(--muted);
  text-align: center;
}
.spc-space-card.on .spc-sc-action { color: var(--on-dark); }

/* Set grid */
.spc-set-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
@media (max-width: 1100px) {
  .spc-set-grid { grid-template-columns: 1fr; }
}
.spc-set-card {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  transition: border-color .15s ease;
}
.spc-set-card.on { border-color: var(--accent); }
.spc-set-card:hover { border-color: var(--line-strong); }
.spc-set-head { margin-bottom: 8px; }
.spc-set-num {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .16em;
  color: var(--muted);
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
}
.spc-set-name {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.35;
  color: var(--ink);
  margin: 0;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
}
.spc-set-sub {
  font-style: normal;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: var(--muted);
  margin-left: 4px;
}
.spc-set-desc {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.55;
  margin: 0 0 14px;
}
.spc-set-prices {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 12px;
  padding: 12px;
  background: var(--paper);
  border-radius: 2px;
}
.spc-set-price { display: flex; align-items: baseline; gap: 6px; }
.spc-set-price-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .12em;
  color: var(--muted);
  text-transform: uppercase;
}
.spc-set-price-val {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 22px;
  font-weight: 500;
  color: var(--ink);
  line-height: 1.35;
  margin-left: 4px;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
}
.spc-set-price-unit {
  font-size: 11px;
  color: var(--muted);
  margin-left: 6px;
}
.spc-set-services { margin-bottom: 14px; }
.spc-set-services-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 6px;
}
.spc-set-services ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: var(--ink-2);
  line-height: 1.65;
}
.spc-set-cta {
  margin-top: auto;
  background: var(--ink);
  color: var(--on-dark);
  border: none;
  border-radius: 2px;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: .02em;
  transition: background .15s ease;
}
.spc-set-cta:hover { background: var(--accent-deep); }
.spc-set-card.on .spc-set-cta { background: var(--accent); }
.spc-set-card.on .spc-set-cta:hover { background: var(--accent-deep); }
.spc-set-note-inner {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .12em;
  color: var(--muted);
  text-transform: uppercase;
  margin: 8px 0 0;
  text-align: center;
}
.spc-set-note {
  font-size: 12px;
  color: var(--muted);
  margin-top: 14px;
  line-height: 1.55;
}

/* Selection rows */
.spc-selrow-list { display: flex; flex-direction: column; gap: 12px; }
.spc-sel-row {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 14px 16px;
}
.spc-sel-row-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--line);
}
.spc-sel-row-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 15px;
}
.spc-sr-icon { font-size: 18px; }
.spc-sel-x {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: all .15s ease;
}
.spc-sel-x:hover { color: var(--ink); border-color: var(--line-strong); }
.spc-sel-row-body { display: flex; flex-direction: column; gap: 10px; margin-top: 12px; }
.spc-sr-block {}
.spc-sr-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 6px;
}
.spc-sr-lbl-aux {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  text-transform: none;
  letter-spacing: 0;
  font-size: 11px;
  color: var(--muted-2);
  margin-left: 6px;
}
.spc-sr-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.spc-sr-chip {
  font: inherit;
  font-size: 13px;
  color: var(--ink-2);
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 6px 14px;
  cursor: pointer;
  transition: all .15s ease;
}
.spc-sr-chip:hover { border-color: var(--line-strong); }
.spc-sr-chip.on {
  background: var(--ink);
  color: var(--on-dark);
  border-color: var(--ink);
}
.spc-sr-locked {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .1em;
  color: var(--muted);
  background: var(--bg-2);
  border-radius: 2px;
  padding: 8px 12px;
}
.spc-sr-price {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-top: 10px;
  margin-top: 4px;
  border-top: 1px dashed var(--line);
}
.spc-sr-price-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: var(--muted);
  text-transform: uppercase;
}
.spc-sr-price-val-wrap { display: inline-flex; align-items: baseline; gap: 6px; }
.spc-sr-price-val {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 26px;
  color: var(--ink);
  line-height: 1.35;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
}
.spc-sr-price-unit { font-size: 12px; color: var(--muted); }
.spc-sr-quote {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: .1em;
  color: var(--accent);
}

/* Result panel */
.spc-right { position: sticky; top: 88px; }
@media (max-width: 980px) {
  .spc-right { position: static; }
}
.spc-result {
  background: var(--dark);
  color: var(--on-dark);
  border-radius: 2px;
  padding: 24px;
}
.spc-result-eyebrow {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .16em;
  color: rgba(255,255,255,.45);
  text-transform: uppercase;
  margin-bottom: 18px;
}
.spc-result-ht {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--dark-line);
  margin-bottom: 16px;
}
.spc-result-ht-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: rgba(255,255,255,.55);
  text-transform: uppercase;
}
.spc-ht-toggle {
  display: inline-flex;
  background: rgba(255,255,255,.08);
  border-radius: 2px;
  padding: 3px;
}
.spc-ht-btn {
  background: transparent;
  border: none;
  color: rgba(255,255,255,.55);
  padding: 6px 16px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all .15s ease;
}
.spc-ht-btn.on { background: var(--on-dark); color: var(--dark); }

.spc-set-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(138,106,76,.18);
  border: 1px solid rgba(138,106,76,.4);
  border-radius: 2px;
  padding: 10px 14px;
  margin-bottom: 16px;
}
.spc-set-banner-meta { display: flex; flex-direction: column; gap: 2px; }
.spc-set-banner-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: rgba(255,255,255,.6);
}
.spc-set-banner-name { font-size: 14px; font-weight: 600; }
.spc-set-banner-sub { font-weight: 400; color: rgba(255,255,255,.6); }
.spc-set-banner-clear {
  background: transparent;
  border: 1px solid rgba(255,255,255,.2);
  color: var(--on-dark);
  width: 26px; height: 26px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
}
.spc-set-banner-clear:hover { background: rgba(255,255,255,.08); }

.spc-result-empty {
  text-align: center;
  padding: 28px 8px;
  color: rgba(255,255,255,.55);
  font-size: 13px;
  line-height: 1.6;
}
.spc-result-section { margin-bottom: 16px; }
.spc-result-section-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: rgba(255,255,255,.5);
  text-transform: uppercase;
  margin-bottom: 10px;
}
.spc-line-items { list-style: none; padding: 0; margin: 0; }
.spc-line-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--dark-line);
}
.spc-line-item:last-child { border-bottom: none; }
.spc-li-main { display: flex; gap: 10px; align-items: center; min-width: 0; }
.spc-li-icon { font-size: 18px; }
.spc-li-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.spc-li-label { font-size: 13px; font-weight: 500; }
.spc-li-meta {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .1em;
  color: rgba(255,255,255,.5);
  text-transform: uppercase;
}
.spc-li-price { display: inline-flex; align-items: baseline; gap: 6px; white-space: nowrap; }
.spc-li-val {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
}
.spc-li-unit { font-size: 11px; color: rgba(255,255,255,.55); }
.spc-li-quote {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .1em;
  color: #d8a373;
}

.spc-result-services {
  background: rgba(255,255,255,.04);
  border-radius: 2px;
  padding: 12px 14px;
  margin-bottom: 16px;
}
.spc-services-list { list-style: none; padding: 0; margin: 0; }
.spc-service-item {
  font-size: 12px;
  color: rgba(255,255,255,.78);
  line-height: 1.8;
}

.spc-totals {
  padding-top: 16px;
  border-top: 1px solid var(--dark-line);
  margin-bottom: 20px;
}
.spc-totals-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: rgba(255,255,255,.55);
  text-transform: uppercase;
}
.spc-totals-lbl-accent { color: rgba(255,255,255,.78); }
.spc-subtotal-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 6px;
}
.spc-subtotal-val .strike {
  text-decoration: line-through;
  color: rgba(255,255,255,.4);
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 16px;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
}
.spc-totals-suffix { font-size: 11px; color: rgba(255,255,255,.4); margin-left: 6px; }
.spc-totals-suffix-lg { font-size: 14px; color: rgba(255,255,255,.7); }
.spc-discount-note {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .12em;
  color: #d8a373;
  text-align: right;
  margin-bottom: 12px;
  text-transform: uppercase;
}
.spc-final-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 10px;
}
.spc-final-price { display: inline-flex; align-items: baseline; gap: 8px; }
.spc-final-val {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 44px;
  line-height: 1.35;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
  color: var(--on-dark);
}
.spc-hasnull {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #d8a373;
  margin-left: 6px;
}
.spc-hasnull-note {
  font-size: 11px;
  color: rgba(255,255,255,.55);
  margin-top: 8px;
}

.spc-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background: var(--on-dark);
  color: var(--dark);
  border: none;
  border-radius: 2px;
  padding: 14px 20px;
  font-family: inherit;
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 18px;
  transition: background .25s ease;
  letter-spacing: -0.005em;
}
.spc-cta:hover { background: #fff; }

.spc-policy {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}
.spc-policy-chip {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .1em;
  color: rgba(255,255,255,.7);
  background: rgba(255,255,255,.06);
  border-radius: 2px;
  padding: 5px 10px;
}
.spc-fineprint {
  font-size: 11px;
  color: rgba(255,255,255,.45);
  line-height: 1.6;
  margin: 0;
}

/* ===== Modal ===== */
.spc-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(24, 19, 14, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: spc-fade-in .15s ease-out;
}
.spc-modal {
  position: relative;
  width: 100%;
  max-width: 440px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 40px 32px 32px;
  text-align: center;
  color: var(--ink);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
  animation: spc-modal-in .2s ease-out;
}
.spc-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  color: var(--muted);
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  border-radius: 2px;
  transition: background .15s ease, color .15s ease;
}
.spc-modal-close:hover {
  background: var(--bg-2);
  color: var(--ink);
}
.spc-modal-eyebrow {
  display: inline-block;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}
.spc-modal-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 16px;
  letter-spacing: -0.01em;
  line-height: 1.35;
}
.spc-modal-body {
  font-size: 14.5px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0 0 28px;
}
.spc-modal-body strong {
  color: var(--ink-2);
  font-weight: 500;
}
.spc-modal-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background: var(--ink);
  color: var(--paper);
  border: none;
  border-radius: 2px;
  padding: 14px 20px;
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: -0.005em;
  transition: background .2s ease;
  font-family: inherit;
}
.spc-modal-cta:hover { background: var(--accent-deep); }
@keyframes spc-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes spc-modal-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
