"use client";



import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";



export function Hero() {

  const images = [

    "https://res.cloudinary.com/dwlmsjaar/image/upload/v1767941038/%EC%9D%B8%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B81.jpg",

    "https://res.cloudinary.com/dwlmsjaar/image/upload/v1767940939/%EC%9C%A0%EC%95%A4%EB%82%9C%EB%AF%BC%20%ED%83%80%EC%9D%B4%ED%8B%801.jpg",

    "https://res.cloudinary.com/dwlmsjaar/image/upload/v1767941038/%EC%9D%B8%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B81.jpg"

  ];



  const [index, setIndex] = useState(0);



  useEffect(() => {

    const timer = setInterval(() => {

      setIndex((prev) => (prev + 1) % images.length);

    }, 5000);

    return () => clearInterval(timer);

  }, [images.length]);



  return (

    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black">

      {/* Background Image with Animation */}

      <div className="absolute inset-0 z-0">

        <AnimatePresence mode="wait">

          <motion.img

            key={images[index]}

            src={images[index]}

            alt="Photoshoot Background"

            initial={{ opacity: 0, scale: 1.1 }}

            animate={{ opacity: 0.6, scale: 1 }}

            exit={{ opacity: 0 }}

            transition={{ duration: 1.5, ease: "easeInOut" }}

            className="w-full h-full object-cover object-center"

          />

        </AnimatePresence>

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

      </div>



      {/* Content: 좌하단 정렬 및 텍스트 최적화 */}

      <div className="absolute inset-0 z-10 flex items-end justify-start px-6 md:px-12 pb-16 md:pb-24">

        <div className="max-w-4xl text-left">

          <motion.p

            initial={{ opacity: 0, y: 10 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ delay: 0.5 }}

            className="text-white tracking-[0.4em] text-xs md:text-sm font-light uppercase mb-6"

          >

            CastingEnergy

          </motion.p>

         

          <motion.h1

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ delay: 0.7, duration: 0.8 }}

            className="text-5xl md:text-8xl tracking-tight text-white font-bold leading-[1.1]"

          >

            Just for<br />

            Your Projects

          </motion.h1>

         

          {/* 하단 설명 문구 div 제거됨 */}

        </div>

      </div>



      {/* 슬라이드 인디케이터 */}

      <div className="absolute bottom-10 right-12 z-20 flex gap-2">

        {images.map((_, i) => (

          <div

            key={i}

            className={`h-0.5 transition-all duration-500 ${i === index ? "w-10 bg-white" : "w-4 bg-white/20"}`}

          />

        ))}

      </div>

    </section>

  );

} 