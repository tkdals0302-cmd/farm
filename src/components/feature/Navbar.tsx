import logoDark from '../../assets/logo_d.png';
import logoLight from '../../assets/logo_w.png';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Events } from '../../lib/analytics';

const NAV_LINKS = [
  { label: '포트폴리오', href: '#portfolio' },
  { label: '시공범위', href: '#scope' },
  { label: 'FAQ', href: '#faq' },
  { label: '견적문의', href: '#quote' },
];

const INFO_LINKS = [
  { label: '줄눈시공 하는 이유', href: '/info/why-grout' },
  { label: '케라폭시 줄눈이란?', href: '/info/kerafoxy' },
  { label: '폴리우레아 줄눈이란?', href: '/info/polyurea' },
  { label: '케라폭시 가격 안내', href: '/info/kerafoxy-price' },
  { label: '케라폭시 제품 소개', href: '/info/kerafoxy-product' },
  { label: '폴리우레아 vs 케라폭시 비교', href: '/info/comparison' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const infoRef = useRef<HTMLLIElement>(null);
  const skipScrollRestoreRef = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (infoRef.current && !infoRef.current.contains(e.target as Node)) {
        setInfoOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    // iOS Safari–compatible scroll lock: preserve scroll position by
    // fixing the body in place, then restore on close.
    const scrollY = window.scrollY;
    const html = document.documentElement;
    const body = document.body;
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
    };

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    return () => {
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
      body.style.position = prev.bodyPosition;
      body.style.top = prev.bodyTop;
      body.style.width = prev.bodyWidth;
      // Restore scroll only when the close was NOT an intentional navigation.
      // Nav-link clicks set this ref so scrollIntoView (deferred below) can land cleanly.
      if (skipScrollRestoreRef.current) {
        skipScrollRestoreRef.current = false;
      } else {
        window.scrollTo(0, scrollY);
      }
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    skipScrollRestoreRef.current = true;
    setMenuOpen(false);
    if (isHome) {
      // Defer so the body unlock (in cleanup) runs first;
      // otherwise scrollIntoView fights the position:fixed lock.
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const isScrolled = scrolled || !isHome;
  const textColor = isScrolled
    ? 'text-stone-700 hover:text-[var(--accent)]'
    : 'text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] hover:text-white';
  const activeTextColor = isScrolled ? 'text-stone-900' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className={`px-5 md:px-12 lg:px-20 h-12 md:h-auto md:py-4 flex items-center transition-all duration-300`}>
        {/* 좌측 - Logo */}
        <div className="flex-1">
          <Link to="/" className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src={isScrolled ? logoLight : logoDark}
              alt="디테일라인 - 서울·경기 줄눈시공 전문"
              className="h-10 md:h-12 w-auto object-contain transition-opacity duration-300"
            />
          </Link>
        </div>

        {/* 중앙 - Desktop Nav */}
        <div className="flex-1 hidden md:flex justify-center">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${textColor}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            {/* 줄눈 정보 Dropdown */}
            <li ref={infoRef} className="relative">
              <button
                onClick={() => setInfoOpen(!infoOpen)}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                  location.pathname.startsWith('/info') ? activeTextColor : textColor
                }`}
              >
                줄눈 정보
                <i className={`ri-arrow-down-s-line text-lg transition-transform ${infoOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {infoOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl overflow-hidden w-56" style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}>
                  <ul className="py-2">
                    {INFO_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          onClick={() => setInfoOpen(false)}
                          className="block px-5 py-3 text-sm text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* 우측 - Icons */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-4">
          <a
            href="tel:010-8005-6674"
            onClick={() => Events.phoneClick('navbar')}
            className={`flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              isScrolled
                ? 'bg-[var(--accent)] text-white px-5 py-2.5 rounded-full hover:bg-[var(--accent-deep)]'
                : 'bg-white/10 text-white px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            <i className="ri-phone-line text-sm"></i>
            010-8005-6674
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ml-auto ${
            isScrolled ? 'text-stone-800' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`text-xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {/* Mobile Menu - Sidebar from Right */}
      <>
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Sidebar Menu */}
        <div className={`fixed top-0 right-0 h-screen w-4/6 bg-stone-100 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            {/* Close Button */}
            <div className="sticky top-0 bg-white h-12 px-5 flex items-center justify-end border-b border-stone-300">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-stone-700 hover:text-stone-900 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            {/* Menu Content */}
            <div className="px-6 py-4">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full border-b border-stone-200 pb-4 text-left text-sm font-medium text-stone-600 hover:text-[var(--accent)] cursor-pointer transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}

                {/* 줄눈 정보 - Always Expanded */}
                <li>
                  <div className="flex flex-row w-full text-sm font-medium text-stone-600 mb-4 items-center justify-between">
                    줄눈 정보
                    <i className="ri-arrow-down-s-line text-xl"></i>
                  </div>
                  <ul className="space-y-4 pl-3 border-stone-100">
                    {INFO_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          onClick={() => {
                            skipScrollRestoreRef.current = true;
                            setMenuOpen(false);
                          }}
                          className="text-sm font-medium text-stone-400 hover:text-[var(--accent)] cursor-pointer transition-colors block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>

              {/* Phone CTA */}
              <a
                href="tel:010-8005-6674"
                onClick={() => Events.phoneClick('navbar')}
                className="call-bg mt-8 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-white text-sm font-semibold rounded-full hover:bg-[var(--accent-deep)] transition-colors cursor-pointer w-full"
              >
                <i className="ri-phone-line"></i>
                010-8005-6674
              </a>
              <p className="text-center text-xs text-stone-500 mt-3">
                번호를 누르면 전화 연결 됩니다.
              </p>
            </div>
          </div>
      </>
    </nav>
  );
}
