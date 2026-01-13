"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "모델 지원 자격은 어떻게 되나요?",
    answer: "나이, 키, 경력 제한은 없습니다. 다만 광고 촬영이 가능한 만 18세 이상을 우선적으로 선발하며, 각 브랜드와 프로젝트의 요구사항에 따라 다양한 스펙의 모델을 모집하고 있습니다."
  },
  {
    question: "지원 후 연락은 언제 받을 수 있나요?",
    answer: "지원서 검토는 통상 1-2주 정도 소요됩니다. 심사를 통과하신 분들에게는 개별적으로 연락을 드리며, 추가 오디션이나 포트폴리오 촬영 일정을 안내해드립니다."
  },
  {
    question: "계약 기간은 어떻게 되나요?",
    answer: "계약 기간은 모델과 협의하여 결정됩니다. 일반적으로 1년 단위로 계약하며, 프로젝트별 단기 계약도 가능합니다. 계약 내용은 투명하게 공개되며, 모델의 권익을 최우선으로 고려합니다."
  },
  {
    question: "수수료는 어떻게 책정되나요?",
    answer: "에이전시 수수료는 업계 표준을 따르며, 계약 시 명확하게 안내됩니다. 모든 비용은 투명하게 공개되며, 숨겨진 비용은 일체 없습니다."
  },
  {
    question: "어떤 종류의 프로젝트를 진행하나요?",
    answer: "TV 광고, 인쇄물 광고, 디지털 캠페인, 패션쇼, 카탈로그 촬영, 뮤직비디오 등 다양한 분야의 프로젝트를 진행합니다."
  },
  {
    question: "포트폴리오가 없어도 지원 가능한가요?",
    answer: "네, 가능합니다. 신인 모델의 경우 에이전시에서 영상 미팅을 통해, 포트폴리오 구축을 도와드립니다."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white text-black">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-black uppercase text-center"
          >
           Q&A
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "60px" }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        // 동일한 그라데이션 라인 적용
        className="h-0.75 bg-linear-to-r from-brand-red to-brand-orange mt-4"
      />
      {/* 서브 텍스트 (선택사항: 원치 않으시면 삭제 가능) */}
      <p className="text-gray-500 font-light mt-6">자주 묻는 질문들을 확인해보세요</p>
    </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-gray-100">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-6 flex justify-between items-center text-left group hover:text-gray-500 transition-colors"
                >
                  <span className="text-lg font-medium tracking-tight">
                    {faq.question}
                  </span>
                  <span className="ml-4 shrink-0">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-600 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}