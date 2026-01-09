"use client";

import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Company Info - 로고 색상 반전 적용 */}
          <div className="space-y-6">
  <img 
    src="/logo.png" 
    alt="CASTINGENERGY" 
    // 💡 brightness(0)으로 완전히 검게 만든 후 invert(1)로 반전시키면 어떤 색이든 완벽한 흰색이 됩니다.
    className="h-5 w-auto object-contain brightness-0 invert mt-1" 
  />
</div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-300">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="tel:02-6053-5773" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>02-6053-5773</span>
              </a>
              <a href="mailto:energy@castingenergy.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>energy@castingenergy.com</span>
              </a>
            </div>
          </div>

          {/* Office Location */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-300">Office</h4>
            <div className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
              <MapPin className="w-4 h-4 mt-1 shrink-0" />
              <span>서울특별시 강남구 학동로 44길 18-5<br />제 2호 3층</span>
            </div>
          </div>

          {/* Social Links - 인스타그램만 남김 */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-300">Social</h4>
            <div className="flex gap-5">
              <a 
                href="https://www.instagram.com/energy_model/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* 💡 카카오톡 링크는 삭제되었습니다. */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[12px] text-gray-600 space-x-4">
            <span>사업자 등록번호: 816-86-00511</span>
            <span className="hidden md:inline">|</span>
            <span>대표: 김율원</span>
          </div>
          <p className="text-[12px] text-gray-600 font-light">
            © 2026 CASTINGENERGY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}