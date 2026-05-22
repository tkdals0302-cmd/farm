export const QUOTE_PREFILL_KEY = 'spc:quote-prefill';
export const QUOTE_PREFILL_EVENT = 'spc:quote-prefill-changed';

export interface QuotePrefill {
  areas: string[];
  message: string;
}

export const QUOTE_FORM_AREAS = [
  '현관',
  '화장실',
  '베란다',
  '거실',
  '주방',
  '수영장',
  '목욕탕',
  '기타',
] as const;

const SPACE_TO_AREA: Record<string, string> = {
  '화장실': '화장실',
  '거실 바닥': '거실',
  '현관': '현관',
  '베란다': '베란다',
  '세탁실': '기타',
  '다용도/실외기실': '기타',
};

export function mapSpaceToArea(space: string): string {
  return SPACE_TO_AREA[space] ?? '기타';
}

export function uniqueAreas(spaces: string[]): string[] {
  const set = new Set<string>();
  for (const s of spaces) set.add(mapSpaceToArea(s));
  return Array.from(set);
}
