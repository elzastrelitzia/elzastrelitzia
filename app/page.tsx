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
      <div className="w-full max-w-[1000px]">
        <div className="relative w-[1000px] h-[560px] scale-75 md:scale-90 lg:scale-100 origin-top-left md:origin-center">
          {/* Image */}
          <div className="absolute top-[76px] left-[86px] w-[256px] h-[256px] rounded-[24px] overflow-hidden">
            <img src="/images/v308_3.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          
          {/* Quote */}
          <div className="absolute top-[362px] left-[86px] w-[256px] h-[121px] bg-[#323232] rounded-[24px] p-5">
            <span className="absolute top-3 left-4 text-[24px] font-bold">“</span>
            <span className="block mt-6 text-[16px] font-bold leading-tight">
              With great power<br />comes great responsibility.
            </span>
            <span className="absolute bottom-2 right-4 text-[24px] font-bold">“</span>
          </div>
          
          {/* Gallery */}
          <div className="absolute top-[76px] left-[372px] w-[256px] h-[120px] bg-[#323232] rounded-[24px] flex items-center justify-center gap-4">
            <span className="text-[24px] font-bold">GALLERY</span>
            <div className="flex gap-1">
              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
            </div>
          </div>
          
          {/* GitHub */}
          <div className="absolute top-[212px] left-[372px] w-[256px] h-[120px] bg-[#323232] rounded-[24px] flex items-center justify-center gap-4">
            <span className="text-[24px] font-bold">GITHUB</span>
            <div className="flex gap-1">
              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
            </div>
          </div>
          
          {/* Clock */}
          <div className="absolute top-[76px] left-[658px] w-[256px] h-[256px] bg-[#323232] rounded-[24px] flex items-center justify-center">
            <span className="text-[128px] font-bold leading-none text-center">
              {time}
            </span>
          </div>
          
          {/* Bottom wide card */}
          <div className="absolute top-[362px] left-[372px] w-[542px] h-[121px] bg-[#323232] rounded-[24px]"></div>
        </div>
      </div>
    </main>
  );
}
