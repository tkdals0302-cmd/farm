type GtagFn = (command: string, eventName: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', name, params);
  } catch {
    // GA 차단 환경에서는 silent fail
  }
}

export const Events = {
  formSubmit: (areas: string[], region: string) =>
    trackEvent('form_submit', { areas: areas.join(','), region }),
  phoneClick: (source: 'hero' | 'navbar' | 'faq' | 'footer' | 'floating' | 'process') =>
    trackEvent('phone_click', { source }),
  kakaoClick: (source: 'faq' | 'process' | 'floating') =>
    trackEvent('kakao_click', { source }),
  priceCalcUse: (space: string, houseType: string) =>
    trackEvent('price_calc_use', { space, house_type: houseType }),
  quoteSectionView: () => trackEvent('quote_section_view'),
} as const;
