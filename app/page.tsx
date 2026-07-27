"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { ModelsGrid } from "../components/ModelsGrid";
import { Services } from "../components/Services";
import { BecomeModel } from "../components/BecomeModel";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export default function Page() {
  // 💡 1. 기본 상태를 false로 유지합니다.
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // 💡 팝업을 완전히 끌 때는 아래 로직이 실행되지 않도록 주석 처리합니다.
    // (나중에 팝업을 다시 켜고 싶을 때 아래 주석(//)만 제거하시면 됩니다!)
    //
    // const popupHideUntil = localStorage.getItem("popupHideUntil");
    // const now = new Date().getTime();
    // if (!popupHideUntil || now > parseInt(popupHideUntil)) {
    //   setIsPopupOpen(true);
    // }
  }, []);

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const handleHideForDay = () => {
    const now = new Date();
    const expiryTime = now.getTime() + 24 * 60 * 60 * 1000;
    
    localStorage.setItem("popupHideUntil", expiryTime.toString());
    setIsPopupOpen(false);
  };

  return (
    <main className="min-h-screen bg-white antialiased selection:bg-black selection:text-white relative">
      <Header />
      <Hero />
      <AboutUs />
      <ModelsGrid />
      <Services />
      <BecomeModel />
      <Contact />
      <FAQ />
      <Footer />
      <ScrollToTop />

      {/* 📢 공지 팝업창 (isPopupOpen이 false이므로 화면에 그려지지 않습니다) */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white text-black w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-zinc-100"
            >
              {/* 상단 타이틀 영역 */}
              <div className="py-7 bg-linear-to-r from-brand-red to-brand-orange text-white text-center">
                <p className="text-xs tracking-widest uppercase font-semibold opacity-80">Notice</p>
                <h2 className="text-xl font-bold mt-1">안내 말씀드립니다</h2>
              </div>

              {/* 본문 영역 */}
              <div className="p-8 text-center bg-white">
                <div className="text-zinc-700 text-[15px] leading-relaxed space-y-4 font-normal">
                  <p className="font-semibold text-zinc-900 text-base">
                    안녕하세요, 캐스팅에너지입니다.
                  </p>
                  
                  <p className="bg-zinc-50 py-3.5 px-4 rounded-xl text-zinc-800 font-medium my-4 border border-zinc-100">
                    📍 6월 한 달간 영상 미팅은 잠시 중단되오니<br />
                    많은 양해 부탁드립니다.
                  </p>
                  
                  <p className="text-zinc-600">
                    캐스팅에너지는 <span className="text-brand-red font-semibold">7월 초</span>, 완전히 새로워진 모습으로<br />
                    공식 오픈 예정입니다.
                  </p>
                  
                  <p className="text-zinc-500 text-sm pt-2">
                    기다려주신 만큼 더 좋은 기회와 에너지로<br />
                    찾아뵙겠습니다. 감사합니다.
                  </p>
                </div>
              </div>

              {/* 하단 버튼 영역 */}
              <div className="border-t border-zinc-200 flex bg-zinc-50 text-sm select-none">
                <button
                  onClick={handleHideForDay}
                  className="w-1/2 py-4 text-center text-zinc-500 hover:text-zinc-800 transition-colors border-r border-zinc-200 hover:bg-zinc-100/50"
                >
                  오늘 하루 보지 않기
                </button>
                <button
                  onClick={handleClose}
                  className="w-1/2 py-4 text-center text-zinc-700 hover:text-zinc-950 font-medium transition-colors hover:bg-zinc-100/50"
                >
                  닫기
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}