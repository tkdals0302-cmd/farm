export interface PriceEntry {
  kera: { 신축: number; 구축: number };
  poly: { 신축: number; 구축: number };
}

export interface SpaceData {
  r1: string[];
  r2: Record<string, string[]> | null;
  prices: Record<string, PriceEntry | null>;
  rec: 'kera' | 'poly';
  set: { title: string; desc: string };
}

export const PRICE_DATA: Record<string, SpaceData> = {
  화장실: {
    r1: ['양변기 화장실', '샤워부스 화장실'],
    r2: {
      '양변기 화장실': ['바닥만', '전체(바닥+벽)'],
      '샤워부스 화장실': ['바닥만', '전체(바닥+벽)'],
    },
    prices: {
      '양변기 화장실': {
        '바닥만': { kera: { 신축: 30, 구축: 35 }, poly: { 신축: 20, 구축: 25 } },
        '전체(바닥+벽)': { kera: { 신축: 90, 구축: 100 }, poly: { 신축: 65, 구축: 75 } },
      },
      '샤워부스 화장실': {
        '바닥만': { kera: { 신축: 35, 구축: 40 }, poly: { 신축: 25, 구축: 30 } },
        '전체(바닥+벽)': { kera: { 신축: 95, 구축: 105 }, poly: { 신축: 70, 구축: 80 } },
      },
    } as any,
    rec: 'kera',
    set: {
      title: '💡 세트 할인 가능해요',
      desc: '화장실 2개 동시 시공 시 최대 10만원 할인 · 현관·베란다 추가 시 세트 적용',
    },
  },
  거실: {
    r1: ['20평대', '30평대', '40평대+'],
    r2: null,
    prices: {
      '20평대': { kera: { 신축: 150, 구축: 150 }, poly: { 신축: 100, 구축: 100 } },
      '30평대': null,
      '40평대+': null,
    },
    rec: 'kera',
    set: {
      title: '💡 세인줄 세트로 더 저렴하게',
      desc: '화장실 + 거실 + 현관 + 베란다 + 외부화장실 전체 시공 시 최대 30만원 할인',
    },
  },
  현관: {
    r1: ['바닥'],
    r2: null,
    prices: {
      바닥: { kera: { 신축: 15, 구축: 20 }, poly: { 신축: 5, 구축: 10 } },
    },
    rec: 'poly',
    set: {
      title: '💡 화장실과 함께 시공하면 더 저렴해요',
      desc: '절약 위주 세트: 화장실 바닥 2개 + 현관 + 베란다 → 80만원 → 75만원',
    },
  },
  베란다: {
    r1: ['바닥'],
    r2: null,
    prices: {
      바닥: { kera: { 신축: 20, 구축: 25 }, poly: { 신축: 15, 구축: 15 } },
    },
    rec: 'poly',
    set: {
      title: '💡 함께 시공할수록 할인폭이 커져요',
      desc: '2개 공간 5만원 할인 · 3개 공간 이상 10만원+ 추가 할인',
    },
  },
  외부화장실: {
    r1: ['바닥'],
    r2: null,
    prices: {
      바닥: { kera: { 신축: 20, 구축: 25 }, poly: { 신축: 15, 구축: 15 } },
    },
    rec: 'poly',
    set: {
      title: '💡 함께 시공할수록 할인폭이 커져요',
      desc: '2개 공간 5만원 할인 · 3개 공간 이상 10만원+ 추가 할인',
    },
  },
};

export const SPACES = Object.keys(PRICE_DATA);
export const HOUSE_TYPES = ['신축', '구축'] as const;
export type HouseType = (typeof HOUSE_TYPES)[number];

/* ── PriceTable 데이터 ── */

export interface TableRow {
  space: string;
  range: string;
  kera: { 신축: number; 구축: number } | null;
  poly: { 신축: number; 구축: number } | null;
  recMat: 'kera' | 'poly';
}

export const TABLE_ROWS: TableRow[] = [
  { space: '화장실', range: '양변기 · 바닥만',          kera: { 신축: 30, 구축: 35 },   poly: { 신축: 20, 구축: 25 },   recMat: 'kera' },
  { space: '화장실', range: '양변기 · 전체(바닥+벽)',    kera: { 신축: 90, 구축: 100 },  poly: { 신축: 65, 구축: 75 },   recMat: 'kera' },
  { space: '화장실', range: '샤워부스 · 바닥만',        kera: { 신축: 35, 구축: 40 },   poly: { 신축: 25, 구축: 30 },   recMat: 'kera' },
  { space: '화장실', range: '샤워부스 · 전체(바닥+벽)',  kera: { 신축: 95, 구축: 105 },  poly: { 신축: 70, 구축: 80 },   recMat: 'kera' },
  { space: '거실',   range: '바닥 · 20평대',           kera: { 신축: 150, 구축: 150 }, poly: { 신축: 100, 구축: 100 }, recMat: 'kera' },
  { space: '거실',   range: '바닥 · 30평대+',          kera: null,                     poly: null,                     recMat: 'kera' },
  { space: '현관',   range: '바닥',                    kera: { 신축: 15, 구축: 20 },   poly: { 신축: 5, 구축: 10 },    recMat: 'poly' },
  { space: '베란다', range: '바닥',                    kera: { 신축: 20, 구축: 25 },   poly: { 신축: 15, 구축: 15 },   recMat: 'poly' },
  { space: '외부화장실', range: '바닥',                 kera: { 신축: 20, 구축: 25 },   poly: { 신축: 15, 구축: 15 },   recMat: 'poly' },
];

export const SET_CARDS = [
  {
    label: '세트 A · 절약 위주',
    name: '화장실 2개 + 현관 + 베란다',
    spaces: ['화장실', '현관', '베란다'],
    items: [
      { name: '화장실 바닥 2개', price: 60 },
      { name: '현관', price: 5 },
      { name: '베란다', price: 15 },
    ],
    original: 80,
    final: 75,
    save: 5,
  },
  {
    label: '세트 B · 구축 리모델링',
    name: '화장실 전체 + 현관 + 외부화장실',
    spaces: ['화장실', '현관', '외부화장실'],
    items: [
      { name: '화장실 전체 1개', price: 100 },
      { name: '현관', price: 10 },
      { name: '외부화장실', price: 15 },
    ],
    original: 125,
    final: 115,
    save: 10,
  },
  {
    label: '세트 C · 세인줄 (구축)',
    name: '화장실 2개 + 거실 + 현관 + 베란다 + 외부화장실',
    spaces: ['화장실', '거실', '현관', '베란다', '외부화장실'],
    items: [
      { name: '화장실 전체 2개', price: 190 },
      { name: '거실', price: 150 },
      { name: '현관·베란다·외부화장실', price: 35 },
    ],
    original: 375,
    final: 350,
    save: 25,
  },
];

export const MAT_CARDS = [
  {
    badge: '프리미엄 추천',
    name: '케라폭시',
    life: '내구성 10년+',
    prices: { 신축: '30만원~', 구축: '35만원~' },
    pros: '항균 기능 · 색상 다양\n고광택 · 수분 완전 차단',
    highlight: true,
  },
  {
    badge: '가성비 추천',
    name: '폴리우레아',
    life: '내구성 5년+',
    prices: { 신축: '20만원~', 구축: '25만원~' },
    pros: '빠른 경화 2~4시간\n현관·베란다에 최적',
    highlight: false,
  },
  {
    badge: '저가형',
    name: '일반 줄눈',
    life: '내구성 2~3년',
    prices: { 신축: '10만원~', 구축: '10만원~' },
    pros: '저렴하지만 재시공 주기\n짧음 · A/S 없는 경우 많음',
    highlight: false,
  },
];
