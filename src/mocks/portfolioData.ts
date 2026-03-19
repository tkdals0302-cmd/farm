export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  image: string;
}

export const portfolioCategories = ['전체', '현관', '화장실', '베란다', '거실', '주방', '수영장', '목욕탕'];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: '화장실',
    title: '강남구 아파트 화장실',
    description: '노후된 타일 줄눈 전면 교체, 방수 처리 완료',
    location: '서울 강남구',
    image: 'https://readdy.ai/api/search-image?query=clean%20modern%20bathroom%20white%20tiles%20with%20perfect%20grout%20lines%20fresh%20renovation%20bright%20natural%20light%20marble%20effect%20minimalist%20Korean%20apartment%20interior%20clean%20background&width=600&height=800&seq=p1&orientation=portrait',
  },
  {
    id: 2,
    category: '주방',
    title: '분당 주방 타일 줄눈',
    description: '주방 벽면 및 바닥 줄눈 보수, 항균 줄눈재 시공',
    location: '경기 성남시',
    image: 'https://readdy.ai/api/search-image?query=modern%20kitchen%20white%20subway%20tiles%20clean%20grout%20lines%20renovation%20bright%20minimalist%20Korean%20home%20interior%20countertop%20simple%20background&width=600&height=800&seq=p2&orientation=portrait',
  },
  {
    id: 3,
    category: '베란다',
    title: '마포구 베란다 시공',
    description: '베란다 바닥 전체 줄눈 제거 후 방수 줄눈재 재시공',
    location: '서울 마포구',
    image: 'https://readdy.ai/api/search-image?query=apartment%20balcony%20clean%20tile%20floor%20grout%20renovation%20modern%20minimalist%20Korean%20home%20natural%20light%20bright%20clean%20simple%20background&width=600&height=800&seq=p3&orientation=portrait',
  },
  {
    id: 4,
    category: '현관',
    title: '송파구 아파트 현관',
    description: '현관 대리석 줄눈 복원, 크리스탈 마감재 사용',
    location: '서울 송파구',
    image: 'https://readdy.ai/api/search-image?query=apartment%20entrance%20hallway%20marble%20tiles%20clean%20grout%20renovation%20modern%20Korean%20interior%20elegant%20bright%20neutral%20background&width=600&height=800&seq=p4&orientation=portrait',
  },
  {
    id: 5,
    category: '수영장',
    title: '강동구 수영장 줄눈',
    description: '수중 전용 방수 줄눈재 시공, 균열 방지 처리',
    location: '서울 강동구',
    image: 'https://readdy.ai/api/search-image?query=indoor%20swimming%20pool%20blue%20tiles%20clean%20grout%20renovation%20modern%20facility%20clear%20water%20reflection%20professional%20finish%20simple%20background&width=600&height=800&seq=p5&orientation=portrait',
  },
  {
    id: 6,
    category: '거실',
    title: '용인 거실 바닥 시공',
    description: '거실 전체 포세린 타일 줄눈 교체, 무수축 시공',
    location: '경기 용인시',
    image: 'https://readdy.ai/api/search-image?query=modern%20living%20room%20large%20format%20floor%20tiles%20clean%20thin%20grout%20lines%20renovation%20minimalist%20Korean%20apartment%20interior%20neutral%20background&width=600&height=800&seq=p6&orientation=portrait',
  },
  {
    id: 7,
    category: '목욕탕',
    title: '인천 목욕탕 전면 시공',
    description: '상업용 목욕탕 전체 줄눈 교체, 곰팡이 방지 처리',
    location: '인천 남동구',
    image: 'https://readdy.ai/api/search-image?query=public%20bath%20spa%20white%20ceramic%20tiles%20clean%20grout%20renovation%20professional%20facility%20hygienic%20clean%20bright%20simple%20background&width=600&height=800&seq=p7&orientation=portrait',
  },
  {
    id: 8,
    category: '화장실',
    title: '판교 오피스 화장실',
    description: '사무용 건물 화장실 전층 줄눈 일괄 시공',
    location: '경기 성남시',
    image: 'https://readdy.ai/api/search-image?query=office%20restroom%20modern%20gray%20tiles%20clean%20grout%20professional%20renovation%20commercial%20building%20interior%20bright%20neutral%20simple%20background&width=600&height=800&seq=p8&orientation=portrait',
  },
];

export const reviewData = [
  {
    id: 1,
    name: '김민준',
    location: '서울 강남구',
    rating: 5,
    comment: '10년 된 화장실 줄눈이 새것처럼 바뀌었어요. 꼼꼼하게 작업해주셔서 정말 만족합니다. 시공 후 냄새도 없고 마감이 깔끔해서 주변에 추천하고 있어요.',
    date: '2026.01.15',
    image: 'https://readdy.ai/api/search-image?query=friendly%20Korean%20man%2030s%20professional%20headshot%20neutral%20background%20clean%20simple&width=100&height=100&seq=r1&orientation=squarish',
  },
  {
    id: 2,
    name: '박서연',
    location: '경기 성남시',
    rating: 5,
    comment: '곰팡이 때문에 오래 고민했는데 줄눈 시공 후 완전히 해결됐어요. 전문 장비로 꼼꼼히 제거하고 항균 처리까지 해주셔서 더 이상 곰팡이가 생기지 않아요.',
    date: '2026.02.03',
    image: 'https://readdy.ai/api/search-image?query=friendly%20Korean%20woman%2030s%20professional%20headshot%20neutral%20background%20clean%20simple&width=100&height=100&seq=r2&orientation=squarish',
  },
  {
    id: 3,
    name: '이준혁',
    location: '서울 마포구',
    rating: 5,
    comment: '베란다 바닥이 오래되어 걱정이었는데 방수 줄눈 시공 후 우기에도 전혀 문제없었어요. 가격도 합리적이고 작업 속도도 빨라서 불편함이 최소화됐습니다.',
    date: '2025.12.20',
    image: 'https://readdy.ai/api/search-image?query=friendly%20Korean%20man%2040s%20professional%20headshot%20neutral%20background%20clean%20simple&width=100&height=100&seq=r3&orientation=squarish',
  },
  {
    id: 4,
    name: '최유나',
    location: '인천 연수구',
    rating: 5,
    comment: '아이가 있는 집이라 안전한 자재를 사용해달라고 했는데 친환경 인증 줄눈재로 시공해주셨어요. 어린 아이도 걱정 없이 사용할 수 있어서 정말 감사합니다.',
    date: '2026.01.28',
    image: 'https://readdy.ai/api/search-image?query=friendly%20Korean%20woman%2030s%20mother%20headshot%20neutral%20background%20clean%20simple&width=100&height=100&seq=r4&orientation=squarish',
  },
];
