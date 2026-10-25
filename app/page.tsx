"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState<string>("12 59");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const jakartaTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      }).format(now);
      setTime(jakartaTime.replace(":", " "));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#404040] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-[1100px]">
        <div className="relative w-[1000px] h-[560px] scale-90 md:scale-100 lg:scale-110 origin-center">
          {/* Image */}
          <div className="absolute top-[76px] left-[86px] w-[256px] h-[256px] rounded-[24px] border-2 border-white/10 overflow-hidden">
            <img src="/images/v308_3.png" alt="Profile" className="w-full h-full object-cover" />
          </div>

          {/* Quote */}
          <div className="absolute top-[362px] left-[86px] w-[256px] h-[121px] bg-[#323232] rounded-[24px] border-2 border-white/10 p-5">
            <span className="absolute top-3 left-4 text-[24px] font-bold">“</span>
            <span className="block mt-6 text-[16px] font-bold leading-tight">
              With great power<br />comes great responsibility.
            </span>
            <span className="absolute bottom-2 right-4 text-[24px] font-bold">“</span>
          </div>

          {/* Gallery */}
          <div className="absolute top-[76px] left-[372px] w-[256px] h-[120px] bg-[#323232] rounded-[24px] border-2 border-white/10 flex items-center justify-start gap-4 pl-[54px]">
            <span className="text-[24px] font-bold">GALLERY</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </div>

          {/* GitHub */}
          <div className="absolute top-[212px] left-[372px] w-[256px] h-[120px] bg-[#323232] rounded-[24px] border-2 border-white/10 flex items-center justify-start gap-4 pl-[54px]">
            <span className="text-[24px] font-bold">GITHUB</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </div>

          {/* Clock */}
          <div className="absolute top-[76px] left-[658px] w-[256px] h-[256px] bg-[#323232] rounded-[24px] border-2 border-white/10 flex items-center justify-center">
            <span className="text-[128px] font-bold leading-none text-center">
              {time}
            </span>
          </div>

          {/* About Me */}
          <div className="absolute top-[362px] left-[372px] w-[542px] h-[121px] bg-[#323232] rounded-[24px] border-2 border-white/10 overflow-hidden flex items-center justify-center">
            <img src="/abme.svg" alt="About Me" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </main>
  );
}
