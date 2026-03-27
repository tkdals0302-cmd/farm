import logoDark from '../../assets/logo_d.png';
const NAV_LINKS = [
  { label: '포트폴리오', href: '#portfolio' },
  { label: '시공범위', href: '#scope' },
  { label: 'FAQ', href: '#faq' },
  { label: '견적문의', href: '#quote' },
];

const SERVICES = ['화장실 줄눈', '주방 줄눈', '베란다 줄눈', '현관 줄눈', '수영장 줄눈', '목욕탕 줄눈'];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-800 rounded-t-3xl mx-2 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-16 pt-10 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-6 md:mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logoDark}
              alt="줄눈시공 전문 로고"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-stone-400 text-sm leading-relaxed mb-5">
              집요함이 만들어 내는 완벽함, 디테일라인<br />
              완벽한 마감을 약속드립니다.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-stone-400 text-sm">
                <i className="ri-phone-line text-stone-500"></i>
                <a href="tel:010-8005-6674" className="hover:text-white transition-colors cursor-pointer">010-8005-6674</a>
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
                  <div className="w-8 h-8 flex items-center justify-center bg-stone-700 rounded-lg">
                    <i className={`${social.icon} text-sm`}></i>
                  </div>
                  {social.label}
                </a>
              ))}
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
              <span className="text-stone-500 text-xs">개인정보처리방침</span>
              <span className="text-stone-500 text-xs">이용약관</span>
              <span className="text-stone-600 text-xs">사업자등록번호: 609-33-19473</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
