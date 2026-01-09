"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* 왼쪽 : 타이틀 & 설명 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* 타이틀 스타일을 OUR WORKS와 동일하게 변경 */}
            <div className="flex flex-col mb-8">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // 폰트 굵기(bold), 자간(tighter), 대문자(uppercase) 적용
                className="text-3xl md:text-4xl font-bold text-black uppercase"
              >
                Contact Us
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                // 그라데이션 라인 높이와 색상 동일하게 적용
                className="h-0.75 bg-linear-to-r from-red-600 to-orange-500 mt-3"
              />
            </div>

            <p className="space-y-6 text-gray-500 text-sm md:text-base leading-relaxed font-light max-w-md mb-8">
              비즈니스 파트너십 제안이나 캐스팅 관련 문의 등 <br className="hidden md:block" />
              궁금한 점이 있으시면 언제든지 연락 주세요.
            </p>
          </motion.div>

          {/* 오른쪽 : 연락처 정보 리스트 (기존 유지) */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* ... Email, Phone, Address, Operating Hours 내용 동일 ... */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-black font-bold uppercase tracking-widest text-xs">
                <Mail className="w-4 h-4" /> Email
              </div>
              <p className="text-gray-600 hover:text-black transition-colors underline underline-offset-4 cursor-pointer">
                energy@castingenergy.com
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-black font-bold uppercase tracking-widest text-xs">
                <Phone className="w-4 h-4" /> Phone
              </div>
              <p className="text-gray-600">02-6053-5773</p>
            </div>

            <div className="space-y-3 sm:col-span-2">
              <div className="flex items-center gap-2 text-black font-bold uppercase tracking-widest text-xs">
                <MapPin className="w-4 h-4" /> Address
              </div>
              <div className="text-gray-600 space-y-1 leading-relaxed">
                <p>서울특별시 강남구 학동로 44길 18-5, 제 2호 3층</p>
                <p className="text-sm text-gray-400">
                  3F, 18-5, Hakdong-ro 44-gil, Gangnam-gu, Seoul, Korea
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:col-span-2 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-black font-bold uppercase tracking-widest text-xs">
                <Clock className="w-4 h-4" /> Operating Hours
              </div>
              <p className="text-gray-600">
                평일 11:00 – 19:00 <span className="text-gray-400 mx-2">|</span> 
                <span>주말 및 공휴일 휴무</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}