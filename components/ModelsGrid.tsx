"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Work = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const ITEMS_PER_PAGE = 12;

export function ModelsGrid() {
  const [works, setWorks] = useState<Work[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    // 💡 이제 내 컴퓨터가 아닌, 배포된 실제 API 서버 주소를 사용합니다.
    const API_URL = "https://castingenergy-api.vercel.app/api/works";

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("서버 응답 없음");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const formattedData = data.map((item: any) => ({
            id: item.id || Math.random(),
            title: item.title || "Casting Energy Work",
            // 이미지 주소가 상대 경로일 경우 배포된 API 주소를 붙여줌
            image: (item.image || item.secure_url || item.url)?.startsWith('http') 
                    ? (item.image || item.secure_url || item.url)
                    : `https://castingenergy-api.vercel.app/api/works${item.image || item.secure_url || item.url}`,
            description: item.description || ""
          }));
          setWorks(formattedData);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("데이터를 가져오지 못했습니다:", err);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(works.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentWorks = works.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (loading) {
    return (
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-6 animate-pulse">
          <div className="h-8 w-48 bg-gray-100 mb-12 rounded"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-video bg-gray-50 rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black uppercase"
          >
            OUR WORKS
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.75 bg-linear-to-r from-brand-red to-brand-orange mt-4"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {currentWorks.map((work) => (
              <motion.div
                key={work.id}
                whileHover={{ y: -5 }}
                className="relative aspect-video overflow-hidden rounded-lg group bg-gray-50 border border-gray-100"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=No+Image";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-brand-orange text-[9px] font-bold tracking-widest uppercase mb-1">
                    Casting Energy
                  </p>
                  <h3 className="text-white text-xs md:text-sm font-medium truncate">
                    {work.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-8 mt-24">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="text-[10px] font-bold tracking-[0.2em] text-gray-300 hover:text-black disabled:opacity-0 transition-all"
            >
              PREV
            </button>

            <div className="flex gap-6">
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNumber = i + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => {
                      setCurrentPage(pageNumber);
                      document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`text-sm font-bold transition-all ${
                      currentPage === pageNumber
                        ? "text-black scale-125"
                        : "text-gray-200 hover:text-gray-500"
                    }`}
                  >
                    {String(pageNumber).padStart(2, '0')}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="text-[10px] font-bold tracking-[0.2em] text-gray-300 hover:text-black disabled:opacity-0 transition-all"
            >
              NEXT
            </button>
          </div>
        )}
      </div>
    </section>
  );
}