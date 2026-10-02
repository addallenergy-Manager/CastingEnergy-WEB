"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Works", href: "#works" },
    { name: "Services", href: "#services" },
    { name: "Become a Model", href: "#become-model" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      {/* 상단 헤더 바 */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* 로고 영역 */}
        <button
          onClick={scrollToTop}
          className="flex items-center cursor-pointer transition-transform hover:scale-105 -ml-1 md:-ml-2"
          aria-label="Go to top"
        >
          <Image 
            src="/logo.png" 
            alt="CASTING ENERGY" 
            width={100} 
            height={18} 
            className={`h-4 md:h-5 w-auto object-contain transition-all duration-300 ${
              isScrolled || isMenuOpen ? "brightness-100" : "brightness-0 invert"
            }`}
          />
        </button>

        {/* 데스크탑 메뉴 (마우스 올리면 오렌지-레드 그라데이션 밑줄) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className={`group relative py-2 text-[11px] lg:text-[12px] font-bold tracking-[0.2em] uppercase transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {item.name}
              
              {/* ✨ 주황 -> 빨강 선명한 시그니처 그라데이션 밑줄 */}
              <span 
                style={{
                  background: "linear-gradient(90deg, #f97316 0%, #f43f5e 50%, #ef4444 100%)"
                }}
                className="absolute bottom-0 left-0 w-full h-0.75 rounded-full transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button 
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          className={`md:hidden p-2 transition-colors ${
            isScrolled || isMenuOpen ? "text-black" : "text-white"
          }`}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 목록 */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-zinc-100 px-6 py-6 mt-2 flex flex-col space-y-5 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-zinc-800 hover:text-black transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}