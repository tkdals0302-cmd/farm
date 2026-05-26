// JSON-LD 빌더 — 페이지 단위로 head에 주입할 schema.org 객체를 생성

export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
    image: opts.image,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { '@type': 'Organization', name: '디테일라인' },
    publisher: { '@type': 'Organization', name: '디테일라인' },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * 페이지 unmount 시 자동 cleanup되는 JSON-LD <script>를 head에 주입.
 * useEffect 안에서 호출 후 반환 함수를 cleanup에 사용.
 */
export function injectJsonLd(id: string, data: object): () => void {
  // 이전 script가 남아 있다면 먼저 제거 (HMR 대응)
  document.getElementById(id)?.remove();

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);

  return () => {
    document.getElementById(id)?.remove();
  };
}
