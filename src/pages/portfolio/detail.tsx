import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import FloatingCTA from '../../components/feature/FloatingCTA';
import { useSeo } from '../../lib/useSeo';
import { Events } from '../../lib/analytics';
import { SITE_URL, OG_IMAGE, SITE_PHONE } from '../../lib/seo';
import {
  articleJsonLd,
  breadcrumbJsonLd,
  injectJsonLd,
} from '../../lib/structuredData';
import {
  getPortfolioBySlug,
  type PortfolioImage,
  type PortfolioItem,
  type SpaceMaterial,
} from '../../data/portfolio';
import Lightbox from './Lightbox';
import ImagePlaceholder from './ImagePlaceholder';

export default function PortfolioDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getPortfolioBySlug(slug) : undefined;

  useSeo(
    item
      ? {
          title: item.title,
          description: item.description,
          ogImage: item.images[0]?.src
            ? `${SITE_URL}${item.images[0].src}`
            : OG_IMAGE,
        }
      : { noindex: true }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 구조화 데이터 주입
  useEffect(() => {
    if (!item) return;
    const url = `${SITE_URL}/portfolio/${item.slug}`;
    const mainImage = item.images.find((i) => i.type === 'after-main') ?? item.images[0];

    const cleanupArticle = injectJsonLd(
      'portfolio-article-jsonld',
      articleJsonLd({
        title: item.title,
        description: item.description,
        url,
        image: mainImage ? `${SITE_URL}${mainImage.src}` : undefined,
        datePublished: item.date,
        dateModified: item.date,
      })
    );

    // v2 §7: Breadcrumb 5단계 (홈 > 시공사례 > region > district > 단지+평수)
    // 지역 필터 URL은 V2 후속에 추가될 예정이라 V1에선 모두 /portfolio로 폴백
    const cleanupCrumb = injectJsonLd(
      'portfolio-breadcrumb-jsonld',
      breadcrumbJsonLd([
        { name: '홈', url: SITE_URL },
        { name: '시공사례', url: `${SITE_URL}/portfolio` },
        { name: item.region, url: `${SITE_URL}/portfolio` },
        ...(item.district ? [{ name: item.district, url: `${SITE_URL}/portfolio` }] : []),
        { name: `${item.apartment} ${item.area}평`, url },
      ])
    );

    return () => {
      cleanupArticle();
      cleanupCrumb();
    };
  }, [item]);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!item) {
    return (
      <div className="min-h-screen bg-[var(--bg)]">
        <Navbar />
        <main className="pt-32 pb-24 px-6 text-center">
          <h1
            className="text-3xl text-[var(--ink)]"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            사례를 찾을 수 없습니다
          </h1>
          <p className="mt-4 text-[var(--muted)]">URL을 다시 확인해주세요.</p>
          <Link
            to="/portfolio"
            className="inline-block mt-7 px-6 py-2.5 border border-[var(--line-strong)] rounded-[2px] text-sm cursor-pointer hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors"
          >
            전체 시공사례 보기
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const beforeImages = item.images.filter((i) => i.type === 'before');
  const afterImages = item.images.filter((i) => i.type === 'after-main' || i.type === 'after');
  const allGalleryImages: PortfolioImage[] = [...beforeImages, ...afterImages];

  const openLightboxAt = (img: PortfolioImage) => {
    const i = allGalleryImages.findIndex((g) => g.src === img.src);
    setLightboxIndex(i >= 0 ? i : 0);
  };

  const shareKakao = () => {
    const url = `${SITE_URL}/portfolio/${item.slug}`;
    if (navigator.share) {
      navigator.share({ title: item.title, url }).catch(() => undefined);
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      alert('링크가 복사되었습니다. 카카오톡에 붙여넣어 공유하세요.');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      <main className="pt-24 md:pt-28 pb-24">
        {/* Breadcrumb — v2 §6: 홈 > 시공사례 > region > district > 단지+평수 */}
        <nav className="px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto mb-8" aria-label="현재 위치">
          <ol className="flex items-center gap-2 text-[12px] text-[var(--muted-2)] flex-wrap">
            <li><Link to="/" className="hover:text-[var(--accent)] transition-colors">홈</Link></li>
            <li className="opacity-40">/</li>
            <li><Link to="/portfolio" className="hover:text-[var(--accent)] transition-colors">시공사례</Link></li>
            <li className="opacity-40">/</li>
            <li className="text-[var(--ink-2)]">{item.region}</li>
            {item.district && (
              <>
                <li className="opacity-40">/</li>
                <li className="text-[var(--ink-2)]">{item.district}</li>
              </>
            )}
            <li className="opacity-40">/</li>
            <li className="text-[var(--ink)] truncate">{item.apartment} {item.area}평</li>
          </ol>
        </nav>

        {/* PDP — portfolio-detail.html 패턴 (좌 sticky 갤러리 + 우 정보) */}
        <PortfolioPDP
          item={item}
          onMainClick={openLightboxAt}
          shareKakao={shareKakao}
        />

        {/* Before Section */}
        {beforeImages.length > 0 && (
          <section className="px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto mb-16 pt-14 border-t border-[var(--line)]">
            <SectionHeader eyebrow="Before" title="시공 전" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              {beforeImages.map((img, i) => (
                <GalleryItem key={i} image={img} label="Before" onClick={() => openLightboxAt(img)} dark />
              ))}
            </div>
            <p className="text-[var(--ink-2)] leading-[1.85] text-[15.5px] md:text-[16.5px] break-keep bg-[var(--bg-2)] px-6 md:px-8 py-6 md:py-8 rounded-[2px]">
              {item.body.beforeText}
            </p>
          </section>
        )}

        {/* After Section */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto mb-20 pt-14 border-t border-[var(--line)]">
          <SectionHeader eyebrow="After" title="시공 후" accent />
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
            {afterImages.map((img, i) => (
              <GalleryItem key={i} image={img} label="After" accent onClick={() => openLightboxAt(img)} />
            ))}
          </div>
          <p className="text-[var(--ink-2)] leading-[1.85] text-[15.5px] md:text-[16.5px] break-keep bg-[var(--bg-2)] px-6 md:px-8 py-6 md:py-8 rounded-[2px]">
            {item.body.afterText}
          </p>
        </section>

      </main>

      {/* CTA Band — info/kerafoxy-price의 .kp-cta-band 패턴과 동일 */}
      <section className="bg-[var(--bg-2)] border-t border-[var(--line)] py-14 max-[720px]:py-[56px] md:py-[72px]">
        <div className="px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-8">
          <div className="flex flex-col gap-2 flex-[1_1_380px]">
            <h3
              className="text-[clamp(26px,3vw,38px)] tracking-[-0.015em] leading-[1.35] break-keep m-0 text-[var(--ink)]"
              style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 400 }}
            >
              내 집 줄눈도 이렇게 <em className="not-italic text-[var(--accent)]">새것처럼</em> 만들 수 있을까요?
            </h3>
            <p className="text-sm text-[var(--muted)] m-0">
              평형 · 공간 · 색상을 알려주시면 24시간 내에 회신드립니다. 서울·경기 줄눈시공 무료 견적 상담.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-end max-[820px]:flex-nowrap max-[820px]:justify-start max-[820px]:gap-2 max-[820px]:w-full">
            <Link
              to="/#quote"
              className="inline-flex items-center gap-2.5 px-[22px] py-4 rounded-[2px] text-sm font-medium bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent-deep)] transition-colors cursor-pointer max-[820px]:flex-1 max-[820px]:min-w-0 max-[820px]:px-3 max-[820px]:py-3.5 max-[820px]:text-[13px] max-[820px]:whitespace-nowrap max-[820px]:justify-center"
            >
              무료 견적 받기 <span>→</span>
            </Link>
            <a
              href={`tel:${SITE_PHONE}`}
              onClick={() => Events.phoneClick('info_cta')}
              className="inline-flex items-center gap-2.5 px-[22px] py-4 rounded-[2px] text-sm font-medium border border-[var(--line-strong)] text-[var(--ink)] bg-transparent hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors cursor-pointer max-[820px]:flex-1 max-[820px]:min-w-0 max-[820px]:px-3 max-[820px]:py-3.5 max-[820px]:text-[13px] max-[820px]:whitespace-nowrap max-[820px]:justify-center"
            >
              전화 상담 {SITE_PHONE}
            </a>
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer />

      {lightboxIndex !== null && (
        <Lightbox
          images={allGalleryImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}

// ─── Sub-components ───

// portfolio-detail.html PDP 패턴을 React로 이식
// 좌: sticky 썸네일 컬럼 + 메인 스테이지(BEFORE 페이드 오버레이)
// 우: 브랜드 라인 + H1 + 메타 rows + CTA 2종
function PortfolioPDP({
  item,
  onMainClick,
  shareKakao,
}: {
  item: PortfolioItem;
  onMainClick: (img: PortfolioImage) => void;
  shareKakao: () => void;
}) {
  // 썸네일/카운터/도트는 'after' 4장만 사용 (after-main 제외)
  // hover 시 같은 index의 'before'로 페이드 (after_01 ↔ before_01)
  const afterThumbs = item.images.filter((i) => i.type === 'after');
  const beforeImages = item.images.filter((i) => i.type === 'before');
  const [activeIndex, setActiveIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(false);
  const [afterErrored, setAfterErrored] = useState(false);
  const [beforeErrored, setBeforeErrored] = useState(false);

  // 활성 인덱스 변경 시 에러 상태 리셋
  useEffect(() => {
    setAfterErrored(false);
    setBeforeErrored(false);
  }, [activeIndex]);

  const activeAfter = afterThumbs[activeIndex];
  const activeBefore = beforeImages[activeIndex];
  const totalImages = afterThumbs.length;
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  const locationLabel = item.district
    ? `${item.region} ${item.district}`
    : item.region;

  return (
    <section className="px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto mb-20" data-screen-label="Detail PDP">
      <div className="pdp">
        {/* LEFT — gallery */}
        <div className="pdp-gallery">
          <div className="pdp-thumbs" role="tablist" aria-label="시공 사진">
            {afterThumbs.map((img, i) => (
              <button
                key={img.src}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={img.alt}
                className={`pdp-thumb ${i === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="pdp-thumb-img"
                  loading="lazy"
                />
                <span className="sq" />
              </button>
            ))}
          </div>

          <div
            className={`pdp-main ${showBefore ? 'show-before' : ''}`}
            onMouseEnter={() => setShowBefore(true)}
            onMouseLeave={() => setShowBefore(false)}
          >
            <button
              type="button"
              className="stage"
              onClick={() => activeAfter && onMainClick(activeAfter)}
              aria-label={activeAfter ? `${activeAfter.alt} 확대 보기` : '확대'}
            >
              {/* AFTER 활성 이미지 */}
              {activeAfter && !afterErrored && (
                <img
                  src={activeAfter.src}
                  alt={activeAfter.alt}
                  className="pdp-stage-img"
                  onError={() => setAfterErrored(true)}
                  loading="eager"
                />
              )}

              {/* BEFORE 오버레이 — 같은 인덱스의 before, hover 시 페이드인 */}
              {activeBefore && !beforeErrored && (
                <img
                  src={activeBefore.src}
                  alt={activeBefore.alt}
                  className="pdp-before-img"
                  onError={() => setBeforeErrored(true)}
                  loading="lazy"
                />
              )}

              {/* AFTER 라벨 (기본) */}
              <span className="pdp-stage-label" data-pdp="main-label">
                <span className="sq" />
                <span>AFTER · {activeAfter?.alt ?? '시공 후'}</span>
              </span>

              {/* BEFORE 라벨 (hover 시) */}
              {activeBefore && (
                <span className="pdp-stage-label pdp-before-label">
                  <span className="sq" style={{ background: 'var(--ink)' }} />
                  <span>BEFORE · {activeBefore.alt}</span>
                </span>
              )}

              <span className="pdp-counter">
                {pad(activeIndex + 1)} / {pad(totalImages)}
              </span>
            </button>

            <div className="pdp-main-foot">
              <div className="pdp-dots" aria-hidden="true">
                {afterThumbs.map((img, i) => (
                  <i key={img.src} className={i === activeIndex ? 'on' : ''} />
                ))}
              </div>
              <button
                type="button"
                onClick={shareKakao}
                className="pdp-share"
                aria-label="공유하기"
              >
                <i className="ri-share-line" />
                공유
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT — info */}
        <div className="pdp-info">
          <div className="pdp-brand">
            {locationLabel} · Detailline
            <span className="chev" />
          </div>
          <h1 className="pdp-title">
            {item.apartment} {item.area}평 — {item.space} 줄눈시공
          </h1>

          <div className="pdp-rows">
            <div className="pdp-row">
              <span className="k">위치</span>
              <span className="v">{locationLabel} {item.apartment}</span>
            </div>
            <div className="pdp-row">
              <span className="k">평형</span>
              <span className="v">
                {item.area}평{item.areaSqm ? ` / ${item.areaSqm}㎡` : ''}
              </span>
            </div>
            {/* 공간·자재 — 가변 (주력 + extraSpaces). 한 줄씩 추가/삭제 */}
            <div className="pdp-row">
              <span className="k">공간·자재</span>
              <span className="v">
                {[
                  {
                    space: item.space,
                    spaceDetail: item.spaceDetail,
                    material: item.material,
                    materialDetail: item.materialDetail,
                  } satisfies SpaceMaterial,
                  ...(item.extraSpaces ?? []),
                ].map((sm, i) => (
                  <span key={i}>
                    {sm.space}
                    {sm.spaceDetail ? ` (${sm.spaceDetail})` : ''} ·{' '}
                    <b>
                      {sm.material}
                      {sm.materialDetail ? ` ${sm.materialDetail}` : ''}
                    </b>
                  </span>
                ))}
              </span>
            </div>
            <div className="pdp-row">
              <span className="k">시공 기간</span>
              <span className="v">{item.duration}</span>
            </div>
            <div className="pdp-row">
              <span className="k">시공일자</span>
              <span className="v">{item.date.replace(/-/g, '.')}</span>
            </div>
            <div className="pdp-row">
              <span className="k">보증</span>
              <span className="v">시공 후 {item.asPeriod} 무상 A/S</span>
            </div>
          </div>

          {/* CTA 2종 — 1 column 2 row */}
          <div className="pdp-cta-block">
            <a
              href={`tel:${SITE_PHONE}`}
              onClick={() => Events.phoneClick('info_cta')}
              className="pdp-cta-btn pdp-cta-primary"
            >
              <i className="ri-phone-line" /> 전화 상담
            </a>
            <Link to="/#quote" className="pdp-cta-btn pdp-cta-dark">
              <i className="ri-edit-line" /> 무료 견적 받기
            </Link>
          </div>
        </div>
      </div>

      <style>{PDP_CSS}</style>
    </section>
  );
}

// v2 §6: Section Eyebrow + Title 단순 패턴
function SectionHeader({
  eyebrow,
  title,
  accent = false,
}: {
  eyebrow: string;
  title: string;
  accent?: boolean;
}) {
  return (
    <div className="mb-8 md:mb-10">
      <span className={`inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.18em] uppercase ${accent ? 'text-[var(--accent)]' : 'text-[var(--muted-2)]'}`}>
        <span className={`inline-block w-1.5 h-1.5 ${accent ? 'bg-[var(--accent)]' : 'bg-[var(--muted-2)]'}`} />
        {eyebrow}
      </span>
      <h2
        className="text-[clamp(24px,2.8vw,34px)] text-[var(--ink)] mt-3 leading-[1.25] tracking-[-0.015em] break-keep"
        style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
      >
        {title}
      </h2>
    </div>
  );
}

function GalleryItem({
  image,
  label,
  accent = false,
  dark = false,
  onClick,
}: {
  image: PortfolioImage;
  label: 'Before' | 'After';
  accent?: boolean;
  dark?: boolean;
  onClick: () => void;
}) {
  const [errored, setErrored] = useState(false);
  return (
    <button
      onClick={onClick}
      className="relative aspect-[4/3] overflow-hidden border border-[var(--line)] bg-[var(--bg-2)] cursor-zoom-in group"
      aria-label={`${image.alt} 확대 보기`}
    >
      {errored ? (
        <ImagePlaceholder
          dark={dark}
          corner={`${label.toUpperCase()} · 1200×900`}
          label={image.alt}
        />
      ) : (
        <img
          src={image.src}
          alt={image.alt}
          onError={() => setErrored(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      )}
      <span
        className={`absolute top-3 left-3 text-[10.5px] font-medium tracking-[0.14em] uppercase px-2.5 py-1 rounded-[2px] ${
          accent ? 'bg-[var(--accent)] text-white' : 'bg-white/95 text-[var(--ink)]'
        }`}
      >
        {label}
      </span>
    </button>
  );
}

// ─── PDP CSS (portfolio-detail.html 기반) ───
const PDP_CSS = `
.pdp{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr);gap:48px;align-items:start}
@media (max-width:900px){ .pdp{grid-template-columns:1fr;gap:30px} }

.pdp-gallery{display:flex;gap:14px;position:sticky;top:90px}
.pdp-thumbs{display:flex;flex-direction:column;gap:10px;flex:0 0 70px}
.pdp-thumb{padding:0;border:1px solid var(--line);background:var(--bg-2);cursor:pointer;
  aspect-ratio:1/1;position:relative;overflow:hidden;transition:border-color .2s}
.pdp-thumb::before{content:"";position:absolute;inset:0;z-index:0;
  background:repeating-linear-gradient(135deg,transparent 0 8px,rgba(28,25,22,.03) 8px 16px);pointer-events:none}
.pdp-thumb-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;display:block}
.pdp-thumb.is-active{border-color:var(--ink)}
.pdp-thumb .sq{position:absolute;left:5px;top:5px;width:5px;height:5px;background:var(--accent);opacity:0;transition:opacity .2s;display:inline-block;z-index:2}
.pdp-thumb.is-active .sq{opacity:1}

/* Mobile: 메인 위 / 썸네일 아래 + 가로 스크롤 */
@media (max-width:900px){
  .pdp-gallery{flex-direction:column-reverse;position:static;gap:12px}
  .pdp-thumbs{flex-direction:row;flex:0 0 auto;gap:8px;
    overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;
    scroll-snap-type:x mandatory;padding-bottom:2px}
  .pdp-thumb{flex:0 0 72px;scroll-snap-align:start}
}
@media (max-width:560px){
  .pdp-thumb{flex-basis:64px}
}

.pdp-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:14px}
.pdp-main .stage{position:relative;aspect-ratio:1/1;overflow:hidden;background:var(--bg-2);
  border:1px solid var(--line);padding:0;cursor:zoom-in;width:100%}
.pdp-main .stage::before{content:"";position:absolute;inset:0;z-index:0;
  background:repeating-linear-gradient(135deg,transparent 0 14px,rgba(28,25,22,.022) 14px 28px);pointer-events:none}
.pdp-main .stage::after{content:"";position:absolute;inset:0;z-index:0;
  background:radial-gradient(120% 80% at 50% 100%, rgba(28,25,22,.07), transparent 60%);pointer-events:none}
.pdp-stage-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;display:block}
.pdp-before-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;display:block;
  opacity:0;transition:opacity .45s ease;pointer-events:none}
.pdp-main.show-before .pdp-before-img,
.pdp-main:hover .pdp-before-img{opacity:1}
.pdp-stage-label{position:absolute;left:18px;bottom:16px;z-index:3;display:flex;align-items:center;gap:10px;
  pointer-events:none;transition:opacity .3s ease;
  font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:10.5px;letter-spacing:.12em;
  text-transform:uppercase;color:var(--muted-2)}
.pdp-stage-label .sq{width:6px;height:6px;background:var(--accent);display:inline-block}
.pdp-main:hover .pdp-stage-label[data-pdp="main-label"]{opacity:0}
.pdp-stage-label.pdp-before-label{opacity:0}
.pdp-main.show-before .pdp-stage-label.pdp-before-label,
.pdp-main:hover .pdp-stage-label.pdp-before-label{opacity:1}
.pdp-counter{position:absolute;right:16px;bottom:14px;z-index:3;pointer-events:none;
  font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:9.5px;letter-spacing:.1em;color:var(--muted-2)}

.pdp-main-foot{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.pdp-dots{display:flex;gap:7px;align-items:center}
.pdp-dots i{width:7px;height:7px;border-radius:999px;background:var(--line-strong);display:block;transition:all .25s}
.pdp-dots i.on{background:var(--ink);width:20px}
.pdp-share{border:0;background:none;cursor:pointer;display:inline-flex;align-items:center;gap:6px;
  font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:12px;color:var(--muted);transition:color .2s;padding:4px 0}
.pdp-share:hover{color:var(--ink)}

.pdp-info{display:flex;flex-direction:column}
.pdp-brand{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--muted);font-weight:500}
.pdp-brand .chev{width:6px;height:6px;border-right:1.4px solid currentColor;border-bottom:1.4px solid currentColor;transform:rotate(-45deg);display:inline-block}
.pdp-title{font-family:'Noto Serif KR',serif;font-size:clamp(21px,2.1vw,27px);font-weight:500;line-height:1.36;letter-spacing:-.01em;margin-top:10px;color:var(--ink);word-break:keep-all}

.pdp-rows{margin-top:26px;border:1px solid var(--line)}
.pdp-row{display:flex;gap:16px;padding:14px 18px;border-top:1px solid var(--line);font-size:13.5px}
.pdp-row:first-child{border-top:0}
.pdp-row .k{flex:0 0 84px;color:var(--muted-2);font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:12px;letter-spacing:.02em;padding-top:1px}
.pdp-row .v{color:var(--ink-2);line-height:1.5;display:flex;flex-direction:column;gap:5px}
.pdp-row .v b{font-weight:600;color:var(--accent-deep)}

.pdp-cta-block{display:flex;flex-direction:column;gap:8px;margin-top:20px}
.pdp-cta-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:44px;border-radius:2px;
  font-size:14px;font-weight:500;cursor:pointer;text-decoration:none;
  transition:background .2s, color .2s, border-color .2s}
.pdp-cta-primary{background:var(--accent);color:#fff}
.pdp-cta-primary:hover{background:var(--accent-deep)}
.pdp-cta-ghost{background:transparent;border:1px solid var(--line-strong);color:var(--ink)}
.pdp-cta-ghost:hover{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.pdp-cta-dark{background:var(--ink);color:var(--paper)}
.pdp-cta-dark:hover{background:var(--accent-deep)}
`;
