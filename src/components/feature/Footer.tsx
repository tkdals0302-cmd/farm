import { Link, useNavigate } from 'react-router-dom';
import logoDark from '../../assets/logo_d.png';
import { Events } from '../../lib/analytics';
const NAV_LINKS = [
  { label: '포트폴리오', href: '/portfolio' },
  { label: '시공범위', href: '#scope' },
  { label: 'FAQ', href: '#faq' },
  { label: '견적문의', href: '#quote' },
];

const SERVICES = ['화장실 줄눈', '주방 줄눈', '베란다 줄눈', '현관 줄눈', '수영장 줄눈', '목욕탕 줄눈'];

export default function Footer() {
  const navigate = useNavigate();
  const [regionsOpen, setRegionsOpen] = useState(false);
  const handleNavClick = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--dark)] mx-2 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-16 pt-10 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-6 md:mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logoDark}
              alt="디테일라인 - 서울·경기 줄눈시공 전문"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-stone-400 text-sm leading-relaxed mb-5">
              집요함이 만들어 내는 완벽함, 디테일라인<br />
              완벽한 마감을 약속드립니다.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-stone-400 text-sm">
                <i className="ri-phone-line text-stone-500"></i>
                <a href="tel:010-8005-6674" onClick={() => Events.phoneClick('footer')} className="hover:text-white transition-colors cursor-pointer">010-8005-6674</a>
              </div>
              <div className="flex items-center gap-2 text-stone-400 text-sm">
                <i className="ri-map-pin-line text-stone-500"></i>
                <span>서울 서초구 본마을4길 11 1층 104호</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400 text-sm">
                <i className="ri-time-line text-stone-500"></i>
                <span>평일 09:00 – 18:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h4 className="text-white font-bold text-sm mb-5">빠른 링크</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-stone-400 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="hidden md:block">
            <h4 className="text-white font-bold text-sm mb-5">시공 서비스</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <span className="text-stone-400 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="hidden md:block">
            <h4 className="text-white font-bold text-sm mb-5">소셜 미디어</h4>
            <div className="space-y-3">
              {[
                { icon: 'ri-instagram-line', label: 'Instagram', href: 'https://www.instagram.com' },
                // { icon: 'ri-youtube-line', label: 'YouTube', href: 'https://www.youtube.com' },
                { icon: 'ri-kakao-talk-fill', label: 'KakaoTalk', href: 'https://pf.kakao.com' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="flex items-center gap-3 text-stone-400 text-sm hover:text-white transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-sm">
                    <i className={`${social.icon} text-sm`}></i>
                  </div>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 출장 시공 안내 — UX 친화 + longtail SEO 자산 유지 (아코디언) */}
        <div className="border-t border-stone-700 pt-6 pb-6 mb-2">
          <h4 className="text-white font-bold text-sm mb-3">출장 시공 안내</h4>
          <p className="text-stone-400 text-sm leading-relaxed mb-4">
            디테일라인은 서울·경기·인천 전 지역 출장 시공이 가능합니다.<br />
            그 외 지역은 출장비 협의 후 진행됩니다.
          </p>

          <button
            type="button"
            onClick={() => setRegionsOpen(!regionsOpen)}
            aria-expanded={regionsOpen}
            aria-controls="footer-regions-list"
            className="text-stone-500 text-[11px] tracking-wider uppercase flex items-center gap-1.5 hover:text-stone-300 transition-colors cursor-pointer"
          >
            자주 시공한 지역
            <i
              className={`ri-arrow-down-s-line text-sm transition-transform duration-300 ${
                regionsOpen ? 'rotate-180' : ''
              }`}
            ></i>
          </button>

          {/* SEO 자산 유지: DOM에 항상 존재. CSS max-height 트랜지션으로만 시각 숨김/펼침. */}
          <div
            id="footer-regions-list"
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              regionsOpen ? 'max-h-96 mt-3 opacity-100' : 'max-h-0 mt-0 opacity-0'
            }`}
          >
            <div className="text-stone-400 text-xs leading-relaxed space-y-1.5 pb-1">
              <p>
                <span className="text-stone-300 font-medium mr-2">서울</span>
                강남구 · 서초구 · 송파구 · 강동구 · 성동구 · 마포구 · 용산구 · 양천구 · 영등포구 · 종로구
              </p>
              <p>
                <span className="text-stone-300 font-medium mr-2">경기</span>
                성남시 분당구 · 수지구 · 하남시 · 과천시 · 광명시 · 고양시 · 일산 · 용인시
              </p>
              <p>
                <span className="text-stone-300 font-medium mr-2">인천</span>
                송도 · 연수구 · 남동구
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-700 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-stone-500 text-xs">
              © 2026 줄눈시공 전문. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-stone-500 text-xs hover:text-white transition-colors cursor-pointer">
                개인정보처리방침
              </Link>
              <span className="text-stone-600 text-xs">사업자등록번호: 609-33-19473</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
