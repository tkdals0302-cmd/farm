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

export type Space = '화장실' | '욕실' | '베란다' | '현관' | '거실' | '주방' | '수영장' | '목욕탕';
export type Material = '케라폭시' | '폴리우레아';
export type Region = '서울' | '경기' | '인천' | '기타';

export const SPACES: readonly Space[] = ['화장실', '욕실', '베란다', '현관', '거실', '주방', '수영장', '목욕탕'] as const;
export const REGIONS: readonly Region[] = ['서울', '경기', '인천', '기타'] as const;
export const MATERIALS: readonly Material[] = ['케라폭시', '폴리우레아'] as const;

export type PortfolioImage = {
  src: string;
  alt: string;
  type: 'after-main' | 'after' | 'before';
};

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
];

// ─────────────────────────────────────────────────────────────────────────────
// 헬퍼
// ─────────────────────────────────────────────────────────────────────────────

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return PORTFOLIO_ITEMS.find((p) => p.slug === slug);
}

export function filterPortfolio(filters: {
  spaces?: Space[];
  regions?: Region[];
  materials?: Material[];
}): PortfolioItem[] {
  return PORTFOLIO_ITEMS
    .filter((p) => {
      if (filters.spaces?.length && !filters.spaces.includes(p.space)) return false;
      if (filters.regions?.length && !filters.regions.includes(p.region)) return false;
      if (filters.materials?.length && !filters.materials.includes(p.material)) return false;
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
