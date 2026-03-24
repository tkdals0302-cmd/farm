import logo from '../../assets/logo.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const NAV_LINKS = [
  { label: '포트폴리오', href: '#portfolio' },
  { label: '시공범위', href: '#scope' },
  { label: '고객후기', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: '견적문의', href: '#quote' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-white shadow-sm md:bg-transparent md:shadow-none'
      }`}
    >
      <div className="px-5 md:px-12 lg:px-20 h-12 md:h-auto md:py-4 flex items-center">
        {/* 좌측 - Logo */}
        <div className="flex-1">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 cursor-pointer">
            <img
              src={logo}
              alt="줄눈시공 전문 로고"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </a>
        </div>

        {/* 중앙 - Desktop Nav */}
        <div className="flex-1 hidden md:flex justify-center">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    scrolled ? 'text-stone-700 hover:text-[#967353]' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 우측 - Icons */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="nofollow noreferrer"
            className={`w-9 h-9 flex items-center justify-center transition-colors cursor-pointer ${
              scrolled ? 'text-stone-700 hover:text-stone-900' : 'text-white hover:text-white/80'
            }`}
          >
            <i className="ri-instagram-line text-xl"></i>
          </a>
          <a
            href="tel:010-8005-6674"
            className={`flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              scrolled
                ? 'bg-[#967353] text-white px-4 py-2 rounded-full hover:bg-[#7a5c3d]'
                : 'bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/30 backdrop-blur-sm'
            }`}
          >
            <i className="ri-phone-line text-sm"></i>
            010-8005-6674
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ml-auto ${
            'text-stone-800'
    }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`text-2xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-stone-100 border-t border-stone-200 px-6 py-3 shadow-md">
          <ul className="flex flex-col ">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-stone-100 py-3 border-stone-200">
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-sm font-medium text-stone-700 hover:text-stone-900 cursor-pointer whitespace-nowrap"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="tel:010-8005-6674"
            className="justify-center mt-4 flex items-center text-sm font-semibold cursor-pointer pb-2
            call-bg text-white tracking-widest uppercase px-7 py-1.5 rounded-full bg-[#967353]"
          >
          
          <i className="ri-phone-line pt-1"></i>
              010-8005-6674
          </a>
          <div className="text-center text-xs py-1 items-center font-normal text-stone-500">
             번호를 누르면 전화 연결 됩니다.
          </div>
        </div>
      )}
    </nav>
  );
}
