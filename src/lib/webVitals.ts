import { onCLS, onINP, onLCP, onFCP, onTTFB, type Metric } from 'web-vitals';

declare global {
  interface Window {
    gtag?: (cmd: string, action: string, params?: object) => void;
  }
}

/**
 * Core Web Vitals를 GA4로 송신.
 * 각 지표는 페이지 라이프사이클 동안 한 번씩만 발화됨 (web-vitals 라이브러리 내부 보장).
 *
 * 송신되는 GA4 이벤트 예:
 *   event: 'LCP', metric_id: 'v3-1234', metric_value: 1820, value: 1820
 *
 * GA4 콘솔에서 이 이벤트들을 "사용자 정의 측정항목"으로 등록하면
 * 페이지·기기별 LCP/CLS/INP 분포를 추적 가능.
 */
function report(metric: Metric) {
  window.gtag?.('event', metric.name, {
    metric_id: metric.id,
    metric_value: metric.value,
    metric_rating: metric.rating, // 'good' | 'needs-improvement' | 'poor'
    // GA4가 자동 집계할 수 있도록 정수 value 동봉 (CLS는 *1000)
    value: metric.name === 'CLS' ? Math.round(metric.value * 1000) : Math.round(metric.value),
    non_interaction: true,
  });
}

export function initWebVitals(): void {
  onCLS(report);
  onINP(report);
  onLCP(report);
  onFCP(report);
  onTTFB(report);
}
