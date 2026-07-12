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
    date: "2026-06-25",
    asPeriod: '2년',
    images: [
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/before_01.webp", alt: "서울 마포구 성산동 빌라 욕실 줄눈 시공 전 상태 01", type: "before" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/before_02.webp", alt: "서울 마포구 성산동 빌라 욕실 줄눈 시공 전 상태 02", type: "before" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/before_03.webp", alt: "서울 마포구 성산동 빌라 욕실 줄눈 시공 전 상태 03", type: "before" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/before_04.webp", alt: "서울 마포구 성산동 빌라 욕실 줄눈 시공 전 상태 04", type: "before" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/after-main.webp", alt: "서울 마포구 성산동 빌라 욕실 케라폭시 줄눈시공 시공 후 대표", type: "after-main" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/after_01.webp", alt: "성산동 빌라 욕실 케라폭시 줄눈 마감 디테일 01", type: "after" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/after_02.webp", alt: "성산동 빌라 욕실 케라폭시 줄눈 마감 디테일 02", type: "after" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/after_03.webp", alt: "성산동 빌라 욕실 케라폭시 줄눈 마감 디테일 03", type: "after" },
      { src: "/portfolio/seoul-mapo-seongsandong-villa-bathroom/after_04.webp", alt: "성산동 빌라 욕실 케라폭시 줄눈 마감 디테일 04", type: "after" },
    ],
    title: "성산동 빌라 욕실 케라폭시 줄눈시공 사례 | 디테일라인",
    description: "서울 마포구 성산동 빌라 욕실에 케라폭시 111번 줄눈시공을 진행한 사례입니다. 오염이 심했던 바닥을 입주 청소보다 깨끗하게 밑작업한 후, 500각 타일과 일체감 있는 색상 매칭으로 고급스러운 공간을 완성했습니다.",
    excerpt: "마포구 성산동 빌라 욕실에 500각 타일과 케라폭시 111번을 매칭하여 일체감 있고 깔끔한 공간을 완성한 시공 사례입니다.",
    body: {
      beforeText: "시공 전 마포구 성산동 빌라 욕실은 전체적인 오염도가 매우 심해 타일 사이와 표면이 무척 더러운 상태였습니다. 일반적인 청소로는 해결하기 어려운 찌든 때와 백시멘트 분진이 가득하여 정밀한 줄눈 시공을 위해 철저한 밑작업이 시급하게 요구되었습니다.",
      afterText: "오염이 심했던 바닥을 입주 청소보다 더 깨끗하게 청소한 뒤, 타일 색상과 가장 잘 어울리는 케라폭시 111번 색상으로 줄눈을 시공했습니다. 500각 대형 타일과 줄눈이 자연스럽게 어우러져 바닥 전체가 하나의 판처럼 보이는 일체감 있고 고급스러운 욕실 공간이 완성되었습니다. 디테일라인은 시공 후 2년 무상 A/S를 보장합니다.",
    },
    story: [
      { heading: "500각 타일이 주는 시각적 개방감과 작업의 효율성", text: "보통의 빌라나 아파트 욕실 등 줄눈시공이 필요한 공간에는 300x300mm 크기의 타일이 가장 널리 사용됩니다. 하지만 이번 마포구 성산동 현장은 다소 독특하게 500x500mm 규격의 타일이 시공되어 있었습니다.\n\n타일의 크기가 커지면 공간 전체에 들어가는 줄눈의 절대적인 총길이가 줄어들게 됩니다. 300각 타일에 비해 줄눈 라인이 훨씬 적기 때문에 시각적으로 줄눈 선이 덜 도드라져 공간이 더 넓고 시원해 보이는 시각적 개방감을 줍니다.\n\n작업자 입장에서도 다루어야 할 줄눈의 양 자체가 적어져 작업 효율이 한층 높아지는 이점이 있었습니다. 다만, 타일 한 장의 면적이 넓은 만큼 줄눈 라인의 직선도가 더욱 두드러져 보일 수 있으므로, 라인을 곧고 바르게 잡아내는 정교함이 요구되는 작업이었습니다. 디테일라인은 이러한 타일의 특성을 완벽히 파악하고 한 줄 한 줄 정성을 다해 곧고 바른 라인을 잡아나갔습니다." },
      { heading: "케라폭시 시공의 성패를 가르는 정밀 밑작업과 청소", text: "시공을 위해 현장에 처음 진입했을 당시, 현장의 전체적인 오염도가 매우 심한 상태였습니다. 시공 전 타일 사이사이와 표면은 정리가 되지 않아 무척 더러웠으며, 이 상태로는 정밀한 줄눈 주입이 불가능한 상황이었습니다.\n\n특히 이번 현장에 사용될 이탈리아 마페이사의 케라폭시는 에폭시 수지 계열의 프리미엄 줄눈재입니다. 케라폭시는 강력한 접착력과 내구성을 자랑하지만, 시공 부위에 먼지나 오염 물질, 수분이 남아 있을 경우 접착 불량이나 탈락 현상이 발생할 수 있습니다. 즉, 밑작업 단계에서의 청소 상태가 최종 품질의 90% 이상을 결정한다고 해도 과언이 아닙니다.\n\n디테일라인은 본격적인 줄눈재 주입에 앞서 일반적인 입주 청소 업체가 진행하는 수준보다 훨씬 더 깨끗하고 정밀하게 청소 작업을 진행했습니다. 타일 측면에 붙은 미세한 백시멘트 분진과 오염 물질을 수작업으로 긁어내고, 고성능 청소기를 이용해 미세 먼지 하나 남지 않도록 완벽히 흡입해 냈습니다. 이처럼 기초를 타협하지 않고 정직하게 닦아내야만 케라폭시가 타일 측면에 견고하게 접착될 수 있습니다." },
      { heading: "타일과 줄눈의 경계를 허무는 케라폭시 111번 색상 매칭", text: "밑작업을 깨끗하게 마친 후, 고객님과의 소통을 통해 최종 선정한 색상은 케라폭시 111번 은회색 계열이었습니다.\n\n줄눈 색상을 선택할 때 가장 중요한 기준 중 하나는 타일과의 조화입니다. 성산동 현장의 500각 타일 톤과 케라폭시 111번 색상은 매우 높은 일체감을 보여주었습니다. 줄눈이 튀지 않고 타일 고유의 색감과 자연스럽게 녹아들어, 시공이 완료된 후에는 마치 바닥 전체가 하나의 거대한 판처럼 보이는 시각적 효과를 얻을 수 있었습니다.\n\n넓은 500각 타일의 레이아웃과 이 차분한 111번 색상이 어우러져 공간이 훨씬 정돈되고 고급스러운 분위기로 탈바꿈했습니다. 타일과 줄눈의 경계가 허물어지면서 욕실 공간이 한층 더 넓어 보이는 효과까지 얻을 수 있어 고객님께서도 매우 만족해하셨습니다." },
      { heading: "솔직하게 말씀드리는 부분", text: "디테일라인은 시공의 장점만을 부풀려 광고하지 않습니다. 케라폭시 줄눈재 선택을 고민하시는 분들을 위해 정직하게 단점과 주의사항을 알려드립니다.\n\n첫째, 긴 양생 시간이 필요합니다. 일반 폴리아스파틱 줄눈재는 시공 후 수 시간 내에 도보 및 물 사용이 가능하지만, 케라폭시는 완전 양생까지 최소 3~4일 동안 물 사용을 엄격히 제한해야 합니다. 이 기간을 지키지 못하면 경화에 문제가 생길 수 있어 거주 중인 세대에서는 일정을 조율할 때 주의가 필요합니다.\n\n둘째, 무광의 서글서글한 표면 질감을 가집니다. 케라폭시는 표면이 미세한 모래알 같은 느낌의 매트한 무광 질감으로 마감됩니다. 매끄럽고 반짝이는 유광 질감을 원하시는 고객님께는 다소 낯설거나 거칠게 느껴질 수 있으므로 시공 전에 샘플을 직접 확인하시고 선택하시는 것을 권장합니다." },
      { heading: "시공을 마치며", text: "모든 공정이 완료된 후, 현장을 확인하신 고객님께서는 시공 전 무척 더러웠던 공간이 정갈하고 깨끗하게 바뀐 모습을 보시며 매우 크게 만족하셨습니다. 특히 입주 청소보다 더 깨끗하게 진행된 밑작업 과정과 타일과 완벽하게 일치하는 케라폭시 111번의 마감 퀄리티에 감탄하셨습니다.\n\n기대 이상의 완성도에 기뻐하시며 주변 지인분들에게도 저희 디테일라인을 적극적으로 소개해 주시겠다는 정성 어린 약속까지 전해주셨습니다. 믿고 맡겨주신 고객님께 깊은 감사를 드리며, 앞으로도 정직하고 정밀한 시공으로 보답하는 디테일라인이 되겠습니다. 디테일라인은 언제나 고객의 만족을 최우선으로 생각하며 타협 없는 시공을 약속드립니다." },
    ],
    createdAt: "2026-06-25T00:00:00.000Z",
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
