import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_META, SITE_URL, SITE_NAME, OG_IMAGE, type PagePath } from './seo';

type SeoOverrides = Partial<{
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  noindex: boolean;
}>;

/**
 * 페이지 메타(title, description, canonical, OG, Twitter)를 런타임에 주입.
 *
 * 기본값은 src/lib/seo.ts의 PAGE_META 카탈로그에서 현재 pathname으로 매칭.
 * overrides로 페이지별 동적 값(상세 페이지 등)을 덮어쓸 수 있음.
 *
 * SPA라 검색엔진이 JS 실행 후에야 메타를 보지만, Google/카카오/페이스북 크롤러는
 * JS를 어느 정도 실행하므로 즉시 효과 있음. 네이버 봇 대응은 prerender(별도 PR) 필요.
 */
export function useSeo(overrides?: SeoOverrides) {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname as PagePath];
    const title = overrides?.title ?? meta?.title ?? SITE_NAME;
    const description = overrides?.description ?? meta?.description ?? '';
    const keywords = overrides?.keywords ?? meta?.keywords ?? '';
    const ogImage = overrides?.ogImage ?? OG_IMAGE;
    const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

    document.title = title;
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMetaProp('og:title', title);
    setMetaProp('og:description', description);
    setMetaProp('og:url', canonical);
    setMetaProp('og:image', ogImage);
    setMetaProp('og:image:secure_url', ogImage);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
    setLink('canonical', canonical);
    setMeta(
      'robots',
      overrides?.noindex
        ? 'noindex,nofollow'
        : 'index,follow,max-image-preview:large'
    );
  }, [pathname, overrides]);
}

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setMetaProp(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`
  );
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}
