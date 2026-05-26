// 단일 진실 공급원 (Single Source of Truth) — 도메인·연락처·OG 자산 한 곳에서 관리
export const SITE_URL = 'https://www.detailline.kr';
export const SITE_NAME = '디테일라인';
export const SITE_PHONE = '010-8005-6674';
export const KAKAO_URL = 'https://pf.kakao.com/_TsIAE';
export const OG_IMAGE = `${SITE_URL}/og_banner.jpg`;

export const ADDRESS = {
  streetAddress: '본마을4길 11 1층 104호',
  addressLocality: '서초구',
  addressRegion: '서울특별시',
  addressCountry: 'KR',
} as const;

export const GEO = { lat: 37.4859, lng: 127.0265 } as const;

// 페이지별 메타 카탈로그 — title/description/keywords를 한 곳에서 관리
// 지역 longtail: 강남·서초·송파·강동·성동·마포·용산 + 분당·판교·과천·성남·하남
export const PAGE_META = {
  '/': {
    title: '서울·경기 줄눈시공 전문 디테일라인 | 케라폭시·폴리우레아 시공',
    description:
      '서울·경기 줄눈시공 전문업체 디테일라인. 화장실·주방·베란다·현관 케라폭시/폴리우레아 줄눈. 대표 직접 시공, KC 인증 친환경 자재, 시공 후 2년 무상 A/S. 무료 견적 상담.',
    keywords:
      '줄눈시공, 케라폭시, 폴리우레아, 화장실 줄눈, 욕실 줄눈, 강남 줄눈시공, 서초 줄눈시공, 송파 줄눈시공, 강동 줄눈시공, 분당 줄눈시공, 판교 줄눈시공, 줄눈 교체, 타일 줄눈, 서울 줄눈시공, 경기 줄눈시공, 아파트 줄눈',
  },
  '/info/why-grout': {
    title: '줄눈시공 왜 해야 하나요? 곰팡이·들뜸 해결 | 디테일라인',
    description:
      '줄눈 곰팡이·균열·들뜸의 원인과 해결법. 케라폭시 줄눈으로 영구 해결. 시공 사례·비교 사진 포함. 강남·서초·분당 화장실 줄눈 시공 전문.',
    keywords:
      '줄눈 곰팡이, 줄눈 들뜸, 줄눈 균열, 줄눈 교체 시기, 화장실 곰팡이 제거, 욕실 줄눈 곰팡이, 줄눈 검정, 줄눈 변색, 강남 화장실 줄눈, 서초 욕실 줄눈',
  },
  '/info/kerafoxy': {
    title: '케라폭시란? 친환경 줄눈 자재의 모든 것 | 디테일라인',
    description:
      '케라폭시는 이탈리아산 에폭시 줄눈재로, 곰팡이·변색 방지 효과가 일반 줄눈 대비 10배 이상. KC 인증 친환경 — 강남·서초 아파트 시공 다수.',
    keywords:
      '케라폭시, 케라폭시 줄눈, 에폭시 줄눈, 친환경 줄눈, 케라폭시 효과, 케라폭시 후기, 마페이 케라폭시, 강남 케라폭시, 서초 케라폭시',
  },
  '/info/kerafoxy-product': {
    title: '케라폭시 제품 6종 비교 | 케라폭시·스타라이크·푸가리테',
    description:
      '케라폭시 클래식·이지디자인·스타라이크·스타라이크 에보·스타라이크 프로·푸가리테 6종 비교. 용도·공간·예산별 추천.',
    keywords:
      '케라폭시 제품, 스타라이크, 푸가리테, 케라폭시 종류, 케라폭시 색상, 스타라이크 에보, 스타라이크 프로, 줄눈재 비교, 마페이 줄눈',
  },
  '/info/comparison': {
    title: '폴리우레아 vs 케라폭시 — 어떤 줄눈이 맞을까? | 디테일라인',
    description:
      '폴리우레아·케라폭시 시공 비용·내구성·시공 시간 비교. 공간별 추천 자재. 화장실·베란다·현관 어디에 뭘 써야 할지 가이드.',
    keywords:
      '폴리우레아 케라폭시 차이, 줄눈 자재 비교, 폴리우레아 줄눈, 폴리우레아 단점, 케라폭시 단점, 줄눈 종류 비교, 베란다 폴리우레아, 화장실 케라폭시',
  },
  '/info/kerafoxy-price': {
    title: '케라폭시 줄눈 가격 안내 — 공간별·평수별 시공비 | 디테일라인',
    description:
      '케라폭시 줄눈 시공 가격을 공간(화장실·주방·베란다·현관)별, 신축/구축별로 안내. 강남·서초·분당 지역 시공비 표준 단가표. 무료 견적 상담.',
    keywords:
      '케라폭시 가격, 줄눈시공 가격, 화장실 줄눈 가격, 강남 줄눈 가격, 서초 줄눈 가격, 분당 줄눈 가격, 케라폭시 시공비, 줄눈 견적, 아파트 줄눈 가격, 30평 줄눈 가격',
  },
  '/privacy': {
    title: '개인정보처리방침 | 디테일라인',
    description: '디테일라인 개인정보처리방침',
    keywords: '',
  },
} as const;

export type PagePath = keyof typeof PAGE_META;
