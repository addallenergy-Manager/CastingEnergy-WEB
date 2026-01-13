"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "121350", label: "Professional Models" },
  { number: "3542", label: "Successful Campaigns" },
  { number: "20", label: "Years of Experience" },
  { number: "178", label: "Brand Partners" }
];

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 상단 타이틀 섹션 - 크기를 더 줄이고 자간을 넓혀 세련되게 변경 */}
        <div className="flex flex-col mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // 💡 텍스트 크기를 text-2xl로 줄이고 자간(tracking)을 넓혔습니다.
            className="text-3xl md:text-4xl font-bold text-black uppercase"
          >
            ABOUT US
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }} // 선의 길이도 타이틀에 맞춰 줄였습니다.
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.75 bg-linear-to-r from-brand-red to-brand-orange mt-4"
          />
        </div>

        {/* 메인 콘텐츠 - 좌측 슬로건 / 우측 소개글 레이아웃 */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-24">
          
          {/* 왼쪽: 슬로건 (크기 조절) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-5xl md:text-6xl leading-tight text-black">
              {/* 💡 font-bold를 전체에 적용하여 굵기를 통일했습니다 */}
              <div className="font-bold">
                GET <span className="text-brand-red">E</span>
                <span className="text-brand-orange">NERGY</span>,
              </div>
              <div className="font-bold">
                BE ICONIC.
              </div>
            </h3>
          </motion.div>

          {/* 오른쪽: 회사 소개 (정갈한 텍스트) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-500 text-sm md:text-base leading-relaxed font-light"
          >
            <p>
              CASTINGENERGY는 20년 이상의 전문 커리어를 바탕으로 
              브랜드 정체성 극대화의 최적 인재를 제안하며, 클라이언트,
              출연 초상권자의 상호 권리와 의무를 지키고, 존중하는 회사입니다.  
            </p>
            <p>
              영화, 드라마, 방송, 패션, 뷰티, 라이프스타일을 아우르는
              독보적인 글로벌 네트워크를 통해 프로젝트에 에너지를 더하겠습니다.
            </p>
          </motion.div>
        </div>

        {/* 하단 통계 섹션 - 중앙 정렬 및 굵기 최적화 */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-gray-100">
  {stats.map((stat, index) => (
    <motion.div 
      key={index} 
      // 💡 items-center를 추가하여 중앙 정렬했습니다.
      className="flex flex-col items-center text-center" 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* 💡 font-black(가장 두꺼움)에서 font-bold(표준 굵음)로 줄였습니다. */}
      <span className="text-3xl md:text-4xl font-bold tracking-tighter text-black mb-2">
        {stat.number}
        <span className="text-lg font-light text-brand-orange ml-1">+</span>
      </span>
      
      <div className="flex items-center gap-2 justify-center">
        <div className="w-4 h-px bg-gray-300"></div>
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-medium">
          {stat.label}
        </p>
        <div className="w-4 h-px bg-gray-300"></div>
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}