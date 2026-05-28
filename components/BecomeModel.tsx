"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export function BecomeModel() {
  const [uploading, setUploading] = useState(false);
  const [agree, setAgree] = useState(false);
  const [nationality, setNationality] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyno9tsDcuhYnZ3ZARehe19kEC-5hV-JnPftHEzTQE5DYoeqAItFb6LEGLRnMV8a6Pr/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) { alert("개인정보 수집 및 이용에 동의해야 합니다."); return; }

    const required = ["name", "gender", "birthYear", "height", "weight", "phone", "location"];
    let newErrors: Record<string, boolean> = {};
    required.forEach((id) => {
      const val = (document.getElementById(id) as HTMLInputElement)?.value;
      if (!val) newErrors[id] = true;
    });
    if (!nationality) newErrors.nationality = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("필수 항목(*)을 입력해주세요.");
      return;
    }

    setUploading(true);

    try {
      const payload = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        gender: (document.getElementById("gender") as HTMLSelectElement).value,
        birthYear: (document.getElementById("birthYear") as HTMLInputElement).value,
        height: (document.getElementById("height") as HTMLInputElement).value,
        weight: (document.getElementById("weight") as HTMLInputElement).value,
        clothingSize: (document.getElementById("clothingSize") as HTMLInputElement).value,
        nationality: nationality,
        location: (document.getElementById("location") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        instagram: (document.getElementById("instagram") as HTMLInputElement).value,
        affiliation: affiliation,
        agencyName: (document.getElementById("agencyName") as HTMLInputElement)?.value || "",
        agencyContact: (document.getElementById("agencyContact") as HTMLInputElement)?.value || "",
        specialty: (document.getElementById("specialty") as HTMLInputElement).value,
        major: (document.getElementById("major") as HTMLInputElement).value,
        exposure: (document.querySelector('input[name="exposure"]:checked') as HTMLInputElement)?.value || "",
        visa: (document.getElementById("visa") as HTMLInputElement)?.value || "",
        koreanLevel: (document.getElementById("koreanLevel") as HTMLSelectElement)?.value || "",
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        mode: "no-cors",
      });

      alert("지원서 제출이 완료되었습니다.");
      formRef.current?.reset();
      setAgree(false);
      setNationality("");
      setErrors({});
    } catch {
      alert("제출 중 오류가 발생했습니다.");
    } finally {
      setUploading(false);
    }
  };

  const inputBase = "w-full border px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all rounded-md bg-white";
  const errorStyle = (id: string) => errors[id] ? "border-red-500 ring-1 ring-red-500" : "border-zinc-300 focus:border-black focus:ring-1 focus:ring-black";

  return (
    <section id="become-model" className="py-24 bg-white font-sans w-full">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* 타이틀 섹션 */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black uppercase text-center"
          >
            BECOME A MODEL
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.75 bg-linear-to-r from-brand-red to-brand-orange mt-4"
          />
        </div>

        {/* 폼 컨테이너: h-auto를 주어 내부 요소가 겹치지 않게 합니다. */}
        <form ref={formRef} className="h-auto space-y-12 bg-white p-8 md:p-12 border border-zinc-100 shadow-xl rounded-2xl" onSubmit={handleSubmit}>
          
          {/* Basic Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-black border-l-4 border-black pl-3 uppercase">Basic Info *</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input id="name" placeholder="이름 *" className={`${inputBase} ${errorStyle("name")}`} />
              <input id="birthYear" placeholder="생년 (ex. 1997) *" className={`${inputBase} ${errorStyle("birthYear")}`} />
              <select id="gender" className={`${inputBase} ${errorStyle("gender")}`}>
                <option value="">성별 선택 *</option>
                <option value="남자">남자</option>
                <option value="여자">여자</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input id="height" placeholder="키 (cm) *" className={`${inputBase} ${errorStyle("height")}`} />
              <input id="weight" placeholder="체중 (kg) *" className={`${inputBase} ${errorStyle("weight")}`} />
              <input 
                id="nationality"
                placeholder="국적 (ex. 대한민국) *" 
                className={`${inputBase} ${errorStyle("nationality")}`} 
                onChange={(e) => { setNationality(e.target.value); setErrors(p => ({...p, nationality: false})); }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input id="phone" placeholder="연락처 *" className={`${inputBase} ${errorStyle("phone")}`} />
              <input id="instagram" placeholder="인스타그램 ID" className={`${inputBase} border-zinc-300 focus:border-black`} />
              <input id="location" placeholder="거주지역 (동까지) *" className={`${inputBase} ${errorStyle("location")}`} />
              <input id="clothingSize" placeholder="의상 사이즈 (상의/하의/신발)" className={`${inputBase} border-zinc-300 focus:border-black`} />
            </div>
          </div>

          {/* Career */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-black border-l-4 border-black pl-3 uppercase">Career</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className={`${inputBase} border-zinc-300 focus:border-black`} onChange={(e) => setAffiliation(e.target.value)}>
                <option value="">개인 / 소속사</option>
                <option value="개인">개인 (Freelancer)</option>
                <option value="소속사">소속사 (Agency)</option>
              </select>
              {affiliation === "소속사" && (
                <div className="grid grid-cols-2 gap-2">
                  <input id="agencyName" placeholder="소속사명" className={inputBase} />
                  <input id="agencyContact" placeholder="담당자 연락처" className={inputBase} />
                </div>
              )}
              <input id="specialty" placeholder="특기 (복싱, 댄스 등)" className={`${inputBase} border-zinc-300 focus:border-black`} />
              <input id="major" placeholder="대학교 전공 (ex. 연영과)" className={`${inputBase} border-zinc-300 focus:border-black`} />
            </div>
          </div>

          {/* Visibility & Other Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-black border-l-4 border-black pl-3 uppercase">Availability</h3>
              <p className="text-[11px] text-zinc-400">촬영 시 노출 가능 범위 (언더웨어, 수영복 등)</p>
              <div className="flex gap-6">
                {["가능", "불가", "협의"].map((v) => (
                  <label key={v} className="flex gap-2 items-center text-sm text-zinc-900 cursor-pointer">
                    <input type="radio" name="exposure" value={v} className="accent-black w-4 h-4" /> {v}
                  </label>
                ))}
              </div>
            </div>
            {nationality && !["대한민국", "한국"].includes(nationality.trim()) && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-black border-l-4 border-black pl-3 uppercase">Visa & Language</h3>
                <input id="visa" placeholder="Visa Type" className={inputBase} />
                <select id="koreanLevel" className={inputBase}>
                  <option value="">Korean Level</option>
                  <option value="None">Cannot speak at all</option>
                  <option value="Basic">Basic understanding</option>
                  <option value="Fluent">Fluent</option>
                </select>
              </div>
            )}
          </div>

          {/* 💡 Portfolio 업로드 섹션 삭제됨 */}

          {/* Agreement & Submit */}
          <div className="space-y-6 pt-8 border-t border-zinc-100">
            <div className="bg-zinc-50 p-4 text-[11px] text-zinc-500 h-30 overflow-y-auto leading-relaxed border border-zinc-200 rounded-lg">
              <p className="font-bold text-zinc-700 underline mb-2">[개인정보 수집 및 이용 안내]</p>
              1. 수집항목: 이름, 생년, 키, 체중, 국적, 연락처 등<br />
              2. 이용목적: 모델 지원 심사 및 캐스팅 제안 연락<br />
              3. 지원서에 첨부된 자료 및 정보는 캐스팅에너지의 모델 캐스팅 및 홍보 목적으로 활용됩니다.
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} className="w-5 h-5 accent-black" />
              <span className="text-sm font-bold text-zinc-900">개인정보 수집 및 이용에 동의합니다. *</span>
            </label>
            <button type="submit" disabled={uploading} className={`w-full py-5 text-sm font-black tracking-[0.2em] uppercase transition-all rounded-xl shadow-lg ${uploading ? "bg-zinc-200 text-zinc-400 cursor-not-allowed" : "bg-black text-white hover:bg-zinc-800 hover:-translate-y-1"}`}>
              {uploading ? "Submitting..." : "제출하기"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}