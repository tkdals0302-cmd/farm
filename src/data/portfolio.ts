// ─────────────────────────────────────────────────────────────────────────────
// 포트폴리오 데이터 모델 (v2)
//
// 운영 정책:
//   - 신규 사례 추가 시 PORTFOLIO_ITEMS 배열에 객체 push
//   - 사진은 public/portfolio/{slug}/ 경로에 저장 (정적 자산)
//   - 본문(title·description·body)은 AI 자동 생성 + 사람 검수
//   - 메타(slug·apartment·region·district·area·space·material·duration·date)는 사람이 직접 입력
//
// 지역 정책 (v2 §2 R1~R4):
//   - Region = 광역 4종 (서울/경기/인천/기타)
//   - district = 자유 입력 string. 표기 표준은 구·시 단위 (예: '강남구', '성남시 분당구')
//   - 슬러그에 region 영문 포함 (seoul-..., gyeonggi-..., incheon-...)
//
// A/S: 디테일라인 기본 2년 무상 (브랜드 사실, design_guide §08)
// ─────────────────────────────────────────────────────────────────────────────

export type Space = '화장실' | '욕실' | '베란다' | '현관' | '거실' | '주방' | '세탁실' | '수영장' | '목욕탕';
export type Material = '케라폭시' | '폴리우레아' | '실리콘';
export type Region = '서울' | '경기' | '인천' | '기타';

export const SPACES: readonly Space[] = ['화장실', '욕실', '베란다', '현관', '거실', '주방', '세탁실', '수영장', '목욕탕'] as const;
export const REGIONS: readonly Region[] = ['서울', '경기', '인천', '기타'] as const;
export const MATERIALS: readonly Material[] = ['케라폭시', '폴리우레아', '실리콘'] as const;

export type PortfolioImage = {
  src: string;
  alt: string;
  type: 'after-main' | 'after' | 'before';
};

// 긴 글(디아트식 에세이) 섹션 — PDP 하단 '시공 이야기'에 렌더 (선택)
export type StorySection = { heading: string; text: string };

// 공간·자재 페어 — PDP rows에서 한 줄씩 노출 (가변).
// 자재 매칭 관례:
//   - 습식(화장실/욕실/외부화장실) → 케라폭시(에폭시 계열)
//   - 건식(거실/현관/베란다)         → 폴리우레아
//   강제 규칙이 아닌 운영 가이드. 실제 시공 결과대로 입력.
export type SpaceMaterial = {
  space: Space;
  spaceDetail?: string;
  material: Material;
  materialDetail?: string;
};

export type PortfolioItem = {
  // ── 메타 (사람 직접 입력) ──
  slug: string;
  apartment: string;
  region: Region;
  district: string;        // v2: 자유 입력. 예: '강남구', '성남시 분당구'
  area: number;            // 평
  areaSqm?: number;        // m² (선택)
  // 주력 공간·자재 (필터·카드·title·슬러그 SEO 키워드 기준 단일)
  space: Space;
  spaceDetail?: string;
  material: Material;
  materialDetail?: string;
  // 추가 공간·자재 (PDP rows에서 주력과 함께 한 줄씩 노출).
  // 기본 비움. 한 사례에서 화장실+거실 등 여러 공간 시공 시 push.
  extraSpaces?: SpaceMaterial[];
  duration: string;
  date: string;            // YYYY-MM-DD
  asPeriod: string;        // '2년' (케라폭시 기본) | '확인 필요' (폴리우레아)

  // ── 사진 ──
  images: PortfolioImage[];

  // ── 콘텐츠 (AI 자동 생성, 사람 검수) ──
  title: string;
  description: string;
  excerpt: string;
  body: {
    beforeText: string;
    afterText: string;
  };

  // 시공 이야기 (선택) — 문단은 빈 줄(\n\n)로 구분
  story?: StorySection[];

  // ── 자동 ──
  createdAt: string;
  featured?: boolean;
};

// 사례 카탈로그 — 신규 사례는 배열 끝에 push
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    slug: 'seoul-yangcheon-mokdong-daerim-bathroom-34py',
    apartment: '목동대림아파트',
    region: '서울',
    district: '양천구',
    area: 34, // TODO: 정확한 평수 확인 필요 (목동대림 대표 평형 추정)
    space: '화장실',
    spaceDetail: '바닥 + 샤워공간 벽',
    material: '케라폭시',
    duration: '1일',
    date: '2024-08-15',
    asPeriod: '2년',
    images: [
      { src: '/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/before_01.jpg', alt: '서울 양천구 목동대림아파트 화장실 줄눈시공 시공 전 — 체크무늬 타일 바닥', type: 'before' },
      { src: '/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/before_02.jpg', alt: '목동대림아파트 화장실 줄눈 변색·곰팡이 시공 전 상태', type: 'before' },
      { src: '/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/before_03.jpg', alt: '목동대림아파트 화장실 샤워공간 줄눈 시공 전 상태', type: 'before' },
      { src: '/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/before_04.jpg', alt: '목동대림아파트 화장실 코너 줄눈 시공 전 디테일', type: 'before' },
      { src: '/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after-main.jpg', alt: '서울 양천구 목동대림아파트 화장실 케라폭시 줄눈시공 시공 후 대표', type: 'after-main' },
      { src: '/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after_01.jpg', alt: '목동대림아파트 화장실 바닥 케라폭시 줄눈 디테일', type: 'after' },
      { src: '/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after_02.jpg', alt: '목동대림아파트 화장실 샤워공간 벽 케라폭시 줄눈 마감', type: 'after' },
      { src: '/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after_03.jpg', alt: '목동대림아파트 화장실 코너 케라폭시 줄눈 마감', type: 'after' },
      { src: '/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after_04.jpg', alt: '목동대림아파트 화장실 줄눈선 균일 마감 디테일', type: 'after' },
    ],
    title: '목동대림아파트 화장실 케라폭시 줄눈시공 사례 | 디테일라인',
    description: '서울 양천구 목동 대림아파트 화장실 케라폭시 줄눈시공 사례. 바닥 + 샤워공간 벽 시공, 체크무늬 타일 패턴 살리는 균일한 줄눈 마감. 시공 후 2년 무상 A/S.',
    excerpt: '베이지·화이트 체크무늬 타일 화장실의 줄눈을 케라폭시로 정리한 사례.',
    body: {
      beforeText:
        '서울 양천구 목동 대림아파트 화장실은 베이지와 화이트의 체크무늬 타일로 마감되어 있었습니다. 사용 연한이 누적되며 줄눈선이 누렇게 변색되고 샤워공간 주변과 코너 부분에는 곰팡이가 자리잡아 일반 세제로는 회복이 어려운 상태였습니다. 타일 자체의 손상은 없어 리모델링 대신 줄눈만 교체하여 위생과 미관을 회복하길 원하셨습니다.',
      afterText:
        '바닥 전체와 샤워공간 벽에 케라폭시 줄눈을 시공해 줄눈선을 균일하게 정리했습니다. 화이트와 베이지 타일 사이의 줄눈이 깨끗하게 살아나면서 체크무늬 패턴이 더 또렷하게 표현되었고, 샤워공간의 위생 환경도 함께 회복되었습니다. 케라폭시의 항균 성분으로 향후 5~10년간 곰팡이 재발 걱정 없이 유지가 가능합니다. 시공 후 48시간이 지나면 정상 사용이 가능하며, 디테일라인은 시공 후 2년 무상 A/S를 보장합니다.',
    },
    createdAt: '2024-08-15T00:00:00.000Z',
  },
  {
    slug: 'seoul-gangdong-heritage-xi-bathroom-33py',
    apartment: '강동헤리티지자이',
    region: '서울',
    district: '강동구',
    area: 33, // TODO: 정확한 평수 확인 필요
    space: '화장실',
    spaceDetail: '전체',
    material: '케라폭시',
    extraSpaces: [
      { space: '현관', material: '폴리우레아' },
      { space: '베란다', material: '폴리우레아' },
      { space: '세탁실', material: '폴리우레아' },
    ],
    duration: '1일',
    date: '2024-06-29',
    asPeriod: '2년',
    images: [
      { src: '/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/before_01.jpg', alt: '서울 강동구 강동헤리티지자이 화장실 줄눈시공 시공 전', type: 'before' },
      { src: '/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/before_02.jpg', alt: '강동헤리티지자이 화장실 줄눈 변색·곰팡이 상태', type: 'before' },
      { src: '/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/before_03.jpg', alt: '강동헤리티지자이 현관·베란다 줄눈 시공 전 상태', type: 'before' },
      { src: '/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/after_01.jpg', alt: '서울 강동구 강동헤리티지자이 화장실 케라폭시 줄눈시공 시공 후 대표', type: 'after' },
      { src: '/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/after_02.jpg', alt: '강동헤리티지자이 화장실 케라폭시 줄눈 디테일', type: 'after' },
      { src: '/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/after_03.jpg', alt: '강동헤리티지자이 현관·베란다·세탁실 폴리우레아 줄눈 마감', type: 'after' },
    ],
    title: '강동헤리티지자이 화장실·현관·베란다·세탁실 줄눈시공 사례 | 디테일라인',
    description: '서울 강동구 강동헤리티지자이 화장실 케라폭시 + 현관·베란다·세탁실 폴리우레아 줄눈시공 사례. 공간별 맞춤 자재 통합 시공, 시공 후 2년 무상 A/S.',
    excerpt: '화장실은 케라폭시, 현관·베란다·세탁실은 폴리우레아로 한 번에 정리한 통합 시공 사례.',
    body: {
      beforeText:
        '서울 강동구 강동헤리티지자이의 화장실은 사용 연한이 누적되며 줄눈선이 변색되고 코너 부분에 곰팡이가 발생한 상태였습니다. 더불어 현관·베란다·세탁실 등 외부 공간의 줄눈도 균열과 들뜸이 진행 중이었습니다. 고객께서는 공간별로 따로 의뢰하지 않고 한 번에 통합 시공으로 정리하기를 원하셨습니다.',
      afterText:
        '화장실은 내수성·항균 성능이 강한 케라폭시로 시공해 위생 환경을 회복하고, 현관·베란다·세탁실 등 외부 공간은 자외선·온도 변화에 강하면서도 가성비가 좋은 폴리우레아로 시공했습니다. 공간 특성에 맞춰 자재를 다르게 적용함으로써 내구성과 비용의 균형을 모두 잡았습니다. 시공 후 48시간이 지나면 정상 사용이 가능하며, 디테일라인은 시공 후 2년 무상 A/S를 보장합니다.',
    },
    createdAt: '2024-06-29T00:00:00.000Z',
  },
  {
    slug: 'gyeonggi-suwon-hanil-town-bathroom-32py',
    apartment: '한일타운아파트',
    region: '경기',
    district: '수원시 장안구',
    area: 32, // TODO: 정확한 평수 확인 필요
    space: '화장실',
    spaceDetail: '전체',
    material: '케라폭시',
    duration: '1일',
    date: '2024-04-07',
    asPeriod: '2년',
    images: [
      { src: '/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_01.jpg', alt: '경기 수원시 장안구 한일타운아파트 화장실 줄눈시공 시공 전', type: 'before' },
      { src: '/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_02.jpg', alt: '한일타운아파트 화장실 줄눈 변색 상태', type: 'before' },
      { src: '/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_03.jpg', alt: '한일타운아파트 화장실 코너 줄눈 시공 전 디테일', type: 'before' },
      { src: '/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_04.jpg', alt: '한일타운아파트 화장실 샤워공간 줄눈 시공 전 상태', type: 'before' },
      { src: '/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_05.jpg', alt: '한일타운아파트 화장실 바닥 줄눈 시공 전 상태', type: 'before' },
      { src: '/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_01.jpg', alt: '경기 수원시 장안구 한일타운아파트 화장실 케라폭시 줄눈시공 시공 후 대표', type: 'after' },
      { src: '/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_02.jpg', alt: '한일타운아파트 화장실 케라폭시 줄눈 디테일', type: 'after' },
      { src: '/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_03.jpg', alt: '한일타운아파트 화장실 케라폭시 줄눈 코너 마감', type: 'after' },
      { src: '/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_04.jpg', alt: '한일타운아파트 화장실 케라폭시 줄눈 샤워공간 마감', type: 'after' },
      { src: '/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_05.jpg', alt: '한일타운아파트 화장실 케라폭시 줄눈 균일 마감 디테일', type: 'after' },
    ],
    title: '수원 한일타운아파트 화장실 케라폭시 줄눈시공 사례 | 디테일라인',
    description: '경기 수원시 장안구 한일타운아파트 화장실 케라폭시 줄눈시공 사례. 변색·곰팡이 해결, 시공 후 2년 무상 A/S.',
    excerpt: '한일타운아파트 화장실 줄눈을 케라폭시로 새것처럼 정리한 사례.',
    body: {
      beforeText:
        '경기 수원시 장안구 한일타운아파트 화장실은 사용 연한이 쌓이며 줄눈선이 누렇게 변색되고 코너와 샤워공간 주변에는 곰팡이가 자리잡아 일반 세제로 회복이 어려운 상태였습니다. 타일 자체의 손상은 없어 리모델링 대신 줄눈만 교체하여 위생과 미관을 한 번에 회복하기로 했습니다.',
      afterText:
        '화장실 전체에 케라폭시 줄눈을 시공해 균일한 줄눈선을 만들었습니다. 케라폭시의 강한 내수성과 항균 성분으로 향후 5~10년간 곰팡이 재발 걱정 없이 위생 유지가 가능하며, 청소 한 번으로 새것처럼 회복됩니다. 시공 후 48시간이 지나면 정상 사용이 가능하고, 디테일라인은 시공 후 2년 무상 A/S를 보장합니다.',
    },
    createdAt: '2024-04-07T00:00:00.000Z',
  },
  {
    slug: 'seoul-songpa-helio-city-bathroom-39py',
    apartment: '송파 헬리오시티',
    region: '서울',
    district: '송파구',
    area: 39, // TODO: 정확한 평수 확인 필요
    space: '화장실',
    spaceDetail: '바닥',
    material: '케라폭시',
    extraSpaces: [
      { space: '주방', material: '실리콘' },
      { space: '현관', material: '폴리우레아' },
    ],
    duration: '1일',
    date: '2024-04-07',
    asPeriod: '2년',
    images: [
      { src: '/portfolio/seoul-songpa-helio-city-bathroom-39py/before_01.jpg', alt: '서울 송파구 헬리오시티 화장실 바닥 줄눈시공 시공 전', type: 'before' },
      { src: '/portfolio/seoul-songpa-helio-city-bathroom-39py/before_02.jpg', alt: '헬리오시티 화장실 바닥 줄눈 변색 상태', type: 'before' },
      { src: '/portfolio/seoul-songpa-helio-city-bathroom-39py/before_03.jpg', alt: '헬리오시티 주방 실리콘 코킹 시공 전 상태', type: 'before' },
      { src: '/portfolio/seoul-songpa-helio-city-bathroom-39py/before_04.jpg', alt: '헬리오시티 주방 싱크대 주변 시공 전 상태', type: 'before' },
      { src: '/portfolio/seoul-songpa-helio-city-bathroom-39py/before_05.jpg', alt: '헬리오시티 현관 바닥 줄눈 시공 전 상태', type: 'before' },
      { src: '/portfolio/seoul-songpa-helio-city-bathroom-39py/before_06.jpg', alt: '헬리오시티 현관 코너 시공 전 디테일', type: 'before' },
      { src: '/portfolio/seoul-songpa-helio-city-bathroom-39py/after_01.jpg', alt: '서울 송파구 헬리오시티 화장실 바닥 케라폭시 줄눈시공 시공 후 대표', type: 'after' },
      { src: '/portfolio/seoul-songpa-helio-city-bathroom-39py/after_02.jpg', alt: '헬리오시티 화장실 바닥 케라폭시 줄눈 디테일', type: 'after' },
      { src: '/portfolio/seoul-songpa-helio-city-bathroom-39py/after_03.jpg', alt: '헬리오시티 주방 실리콘 코킹 마감 디테일', type: 'after' },
      { src: '/portfolio/seoul-songpa-helio-city-bathroom-39py/after_04.jpg', alt: '헬리오시티 주방 싱크대 실리콘 코킹 마감', type: 'after' },
      { src: '/portfolio/seoul-songpa-helio-city-bathroom-39py/after_05.jpg', alt: '헬리오시티 현관 폴리우레아 줄눈 마감', type: 'after' },
      { src: '/portfolio/seoul-songpa-helio-city-bathroom-39py/after_06.jpg', alt: '헬리오시티 현관 코너 폴리우레아 줄눈 디테일', type: 'after' },
    ],
    title: '송파 헬리오시티 화장실·주방·현관 줄눈시공 사례 | 디테일라인',
    description: '서울 송파구 헬리오시티 화장실 바닥 케라폭시 + 주방 실리콘 코킹 + 현관 폴리우레아 줄눈시공 사례. 공간별 맞춤 자재 통합 시공, 시공 후 2년 무상 A/S.',
    excerpt: '화장실 바닥·주방·현관을 자재별로 맞춤 시공한 통합 사례.',
    body: {
      beforeText:
        '서울 송파구 헬리오시티는 입주 후 사용 연한이 누적되며 화장실 바닥 줄눈이 변색되고, 주방 싱크대 주변의 실리콘은 들뜸과 곰팡이가 발생한 상태였습니다. 현관 바닥의 줄눈선도 균열이 진행 중이었습니다. 고객께서는 공간별 특성에 맞춰 적합한 자재로 한 번에 정리하길 원하셨습니다.',
      afterText:
        '화장실 바닥은 내수성이 핵심이라 케라폭시로 시공해 위생 환경을 회복했고, 주방 싱크대 주변은 들뜸이 있던 기존 실리콘을 깨끗하게 제거하고 새로 코킹해 곰팡이 발생 가능성을 차단했습니다. 현관 바닥은 자외선·온도 변화에 강한 폴리우레아로 가성비 시공을 진행했습니다. 공간별 자재 매칭으로 내구성과 비용을 모두 합리적으로 잡았습니다. 디테일라인은 시공 후 2년 무상 A/S를 보장합니다.',
    },
    createdAt: '2024-04-07T00:00:00.000Z',
  },
  {
    slug: "seoul-mapo-seongsandong-villa-bathroom",
    apartment: "성산동 빌라",
    region: "서울",
    district: "마포구",
    area: 0,
    space: "욕실",
    spaceDetail: "바닥",
    material: "케라폭시",
    materialDetail: "111번",
    duration: "1일",
    date: "2026-07-12",
    asPeriod: '2년',
    images: [
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/before_01.webp", alt: "서울 마포구 성산동 빌라 욕실 줄눈 시공 전 상태 01", type: "before" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/before_02.webp", alt: "서울 마포구 성산동 빌라 욕실 줄눈 시공 전 상태 02", type: "before" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/before_03.webp", alt: "서울 마포구 성산동 빌라 욕실 줄눈 시공 전 상태 03", type: "before" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/after-main.webp", alt: "서울 마포구 성산동 빌라 욕실 케라폭시 줄눈시공 시공 후 대표", type: "after-main" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/before_04.webp", alt: "서울 마포구 성산동 빌라 욕실 줄눈 시공 전 상태 04", type: "before" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/before_05.webp", alt: "서울 마포구 성산동 빌라 욕실 줄눈 시공 전 상태 05", type: "before" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/before_06.webp", alt: "서울 마포구 성산동 빌라 욕실 줄눈 시공 전 상태 06", type: "before" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/after_01.webp", alt: "성산동 빌라 욕실 케라폭시 줄눈 마감 디테일 01", type: "after" },
    ],
    title: "성산동 빌라 욕실 케라폭시 줄눈시공 사례 | 디테일라인",
    description: "서울 마포구 성산동 빌라 욕실에 케라폭시 줄눈시공을 진행한 사례입니다. 500각 타일에 맞춰 111번 색상으로 일체감 있게 마감하였으며, 입주 청소보다 깨끗한 정밀 밑작업으로 완성도를 높였습니다.",
    excerpt: "마포구 성산동 빌라 욕실, 500각 타일과 케라폭시 111번의 완벽한 일체감 구현",
    body: {
      beforeText: "시공 전 현장은 전체적으로 오염도가 매우 심하고 더러운 상태였습니다. 특히 타일 사이와 표면에 먼지와 이물질이 많아 정리가 시급했습니다. 일반적인 300각 타일과 달리 흔치 않은 500각 타일이 시공되어 있었습니다.",
      afterText: "케라폭시 시공의 핵심인 밑작업을 위해 입주 청소보다 더 깨끗하게 청소를 진행한 후 작업을 시작했습니다. 타일과 가장 잘 어울리는 케라폭시 111번 색상을 선택하여 시공한 결과, 타일과 줄눈이 한판처럼 보이는 뛰어난 일체감을 완성했습니다. 500각 타일이라 작업이 수월했으며, 시공 후 깨끗해진 모습에 고객님께서도 크게 만족하시며 지인 소개를 약속해 주셨습니다. 디테일라인은 시공 후 2년 무상 A/S를 보장합니다.",
    },
    story: [
      { heading: "흔치 않은 500각 타일 현장", text: "보통의 빌라나 아파트 욕실에는 300x300mm(300각) 타일이 가장 널리 쓰입니다. 이번 성산동 현장은 다소 독특하게 500x500mm(500각) 대형 타일이 시공되어 있었습니다.\n\n타일이 커지면 공간에 들어가는 줄눈의 총길이가 줄어듭니다. 줄눈 라인이 적어 시각적으로 덜 도드라지고, 공간이 더 넓고 시원해 보이는 개방감을 줍니다. 작업 입장에서도 다뤄야 할 줄눈 양이 적어 효율이 높아지지만, 타일 한 장의 면적이 넓은 만큼 라인의 직선도가 그대로 드러나기 때문에 선을 곧고 바르게 잡아내는 정교함이 요구되는 현장이었습니다." },
      { heading: "케라폭시의 성패를 가르는 밑작업", text: "처음 현장에 진입했을 때, 전체적인 오염도가 매우 심한 상태였습니다. 이 상태로는 정밀한 줄눈 주입이 불가능합니다.\n\n이번 현장에 사용한 이탈리아 마페이(MAPEI)의 케라폭시(Kerapoxy)는 에폭시 수지 계열의 프리미엄 줄눈재입니다. 접착력과 내구성이 뛰어나지만, 시공 부위에 먼지·오염물·수분이 남아 있으면 접착 불량이 생길 수 있습니다. 밑작업 단계의 청소 상태가 최종 품질의 대부분을 결정한다고 해도 과언이 아닙니다.\n\n그래서 본격적인 주입에 앞서 일반적인 입주 청소보다 더 깨끗하게 바닥을 만들었습니다. 타일 측면의 분진과 오염물을 정리하고, 미세 먼지까지 남지 않도록 마무리했습니다. 기초를 타협하지 않아야 케라폭시가 타일 측면에 견고하게 붙습니다." },
      { heading: "타일과 한판처럼 — 케라폭시 111번", text: "밑작업을 마친 후 선정한 색상은 케라폭시 111번입니다.\n\n줄눈 색상을 고를 때 가장 중요한 기준 중 하나가 타일과의 조화입니다. 이 현장의 500각 타일 톤과 111번은 일체감이 매우 높았습니다. 줄눈이 튀지 않고 타일 고유의 색감에 자연스럽게 녹아들어, 시공 후에는 바닥 전체가 하나의 큰 판처럼 보이는 효과를 얻었습니다. 넓은 500각 레이아웃과 차분한 111번이 어우러져 공간이 한층 정돈된 분위기로 바뀌었습니다." },
      { heading: "솔직하게 말씀드리는 부분", text: "디테일라인은 장점만 부풀려 말씀드리지 않습니다. 케라폭시를 고민하시는 분들께 미리 알아두시면 좋은 점 두 가지를 정직하게 안내드립니다.\n\n첫째, 양생 기간입니다. 케라폭시는 완전 양생까지 통상 며칠간 물 사용을 제한해야 합니다. 이 기간을 지키지 못하면 경화에 문제가 생길 수 있어, 거주 중인 세대라면 일정 조율이 필요합니다.\n\n둘째, 표면 질감입니다. 케라폭시는 미세한 모래알 같은 매트한 무광 질감으로 마감됩니다. 매끄럽고 반짝이는 유광을 기대하신 분께는 다소 낯설게 느껴질 수 있습니다." },
      { heading: "시공을 마치며", text: "모든 공정이 끝난 뒤, 시공 전 무척 더러웠던 공간이 정갈하게 바뀐 모습을 보신 고객님께서 매우 만족하셨습니다. 주변 지인분들께도 디테일라인을 소개해 주시겠다는 약속까지 전해주셨습니다.\n\n믿고 맡겨주신 고객님께 감사드리며, 앞으로도 정직하고 정밀한 시공으로 보답하겠습니다." },
    ],
    createdAt: "2026-07-12T00:00:00.000Z",
  },
  // ⤵ dl-bot:insert — 새 사례는 이 줄 바로 위에 자동 삽입됨 (이 주석 수정·이동 금지)
];

// ─────────────────────────────────────────────────────────────────────────────
// 헬퍼
// ─────────────────────────────────────────────────────────────────────────────

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return PORTFOLIO_ITEMS.find((p) => p.slug === slug);
}

/** 주력 + extraSpaces 합친 모든 공간 목록 */
export function getAllSpaces(p: PortfolioItem): Space[] {
  return [p.space, ...(p.extraSpaces ?? []).map((e) => e.space)];
}

/** 주력 + extraSpaces 합친 모든 자재 목록 */
export function getAllMaterials(p: PortfolioItem): Material[] {
  return [p.material, ...(p.extraSpaces ?? []).map((e) => e.material)];
}

export function filterPortfolio(filters: {
  spaces?: Space[];
  regions?: Region[];
  materials?: Material[];
}): PortfolioItem[] {
  return PORTFOLIO_ITEMS
    .filter((p) => {
      // 공간 매칭 — 주력 + extraSpaces 모두 후보
      if (filters.spaces?.length) {
        const all = getAllSpaces(p);
        if (!filters.spaces.some((s) => all.includes(s))) return false;
      }
      if (filters.regions?.length && !filters.regions.includes(p.region)) return false;
      // 자재 매칭 — 주력 + extraSpaces 모두 후보
      if (filters.materials?.length) {
        const all = getAllMaterials(p);
        if (!filters.materials.some((m) => all.includes(m))) return false;
      }
      return true;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** 관련 사례 — 지역(4) > 공간(2) > 자재(1) 가중 + 최신순 */
export function getRelatedItems(current: PortfolioItem, count = 3): PortfolioItem[] {
  return PORTFOLIO_ITEMS
    .filter((p) => p.slug !== current.slug)
    .map((p) => ({
      item: p,
      score:
        (p.region === current.region ? 4 : 0) +
        (p.space === current.space ? 2 : 0) +
        (p.material === current.material ? 1 : 0),
    }))
    .sort((a, b) => {
      if (a.score !== b.score) return b.score - a.score;
      return b.item.date.localeCompare(a.item.date);
    })
    .slice(0, count)
    .map(({ item }) => item);
}

export function getCardImages(item: PortfolioItem): {
  main?: PortfolioImage;
  before?: PortfolioImage;
} {
  const main =
    item.images.find((i) => i.type === 'after-main') ??
    item.images.find((i) => i.type === 'after') ??
    item.images[0];
  const before = item.images.find((i) => i.type === 'before');
  return { main, before };
}

/** v2 §3: '서울 · 강남구' 형식 */
export function getRegionLabel(item: PortfolioItem): string {
  return item.district ? `${item.region} · ${item.district}` : item.region;
}
