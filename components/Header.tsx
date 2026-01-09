"use client";

import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      {/* max-w를 늘리고 px(패딩)을 줄여서 로고가 더 왼쪽 끝에 붙도록 설정 */}
      <div className="max-w-400 mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* 로고 영역 */}
        <button
          onClick={scrollToTop}
          className="flex items-center cursor-pointer transition-transform hover:scale-105 -ml-1 md:-ml-2"
          aria-label="Go to top"
        >
          <Image 
            src="/logo.png" 
            alt="CASTING ENERGY" 
            width={100} // 원본 비율 유지를 위한 기준 너비
            height={18} // 원본 비율 유지를 위한 기준 높이
            className={`h-4 md:h-5 w-auto object-contain transition-all duration-300 ${
              // h-4 (16px), md:h-5 (20px)로 아주 슬림하고 세련되게 축소
              isScrolled ? "brightness-100" : "brightness-0 invert"
            }`}
          />
        </button>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {[
            { name: "About Us", href: "#about" },
            { name: "Works", href: "#works" },
            { name: "Services", href: "#services" },
            { name: "Become a Model", href: "#become-model" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className={`text-[11px] lg:text-[12px] font-bold tracking-[0.2em] uppercase transition-all hover:opacity-50 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button className={`md:hidden p-2 transition-colors ${
          isScrolled ? "text-black" : "text-white"
        }`}>
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}