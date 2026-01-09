"use client";

import { motion } from "framer-motion";
import { Camera, Users, Video, Star } from "lucide-react";

const services = [
  {
    title: "Model Management",
    description: "전문적인 매니지먼트를 통해 모델의 잠재력을 극대화하고 커리어를 관리합니다.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Casting Service",
    description: "브랜드의 이미지에 가장 적합한 모델을 선별하여 최상의 매칭을 제공합니다.",
    icon: <Camera className="w-8 h-8" />,
  },
  {
    title: "Production Support",
    description: "광고, 화보, 영상 촬영 등 제작 전반에 필요한 인적 자원을 지원합니다.",
    icon: <Video className="w-8 h-8" />,
  },
  {
    title: "Global Partnership",
    description: "국내외 네트워크를 활용하여 글로벌 시장 진출 및 협업을 추진합니다.",
    icon: <Star className="w-8 h-8" />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* 타이틀 섹션 */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black uppercase text-center"
          >
            SERVICES
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.75 bg-linear-to-r from-brand-red to-brand-orange mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="mb-6 text-gray-400 group-hover:text-black transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}