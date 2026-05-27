export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  image: string;
  before?: string;
  after?: string;
}

export const portfolioCategories = ['전체', '현관', '화장실', '베란다', '거실', '주방', '수영장', '목욕탕'];

/**
 * 시공 사례 데이터.
 *
 * 2026-05-27: AI 생성 이미지(readdy.ai)를 일괄 제거.
 * 자체 촬영 사진이 확보될 때까지 비워둠 (가짜 사진보다 빈 portfolio가 신뢰에 유리).
 *
 * 자체 촬영 사진 추가 시 EXIF의 GPS 정보는 반드시 제거 (고객 주소 노출 방지).
 * 각 사례에 작업일·위치(시·구 단위)·면적·자재·작업시간·시공자 코멘트 포함.
 */
export const portfolioItems: PortfolioItem[] = [];
