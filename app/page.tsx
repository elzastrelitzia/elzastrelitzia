"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState<string>("12 59");
  const [expanded, setExpanded] = useState(false);

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
    <main className="min-h-screen bg-[#404040] bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat grayscale text-white flex items-center justify-center p-4">
      <div className="w-full max-w-[1100px]">
        <div className="relative w-[1000px] h-[560px] scale-90 md:scale-100 lg:scale-110 origin-center">
          {/* Image */}
              <div className="absolute fade-in top-[76px] left-[86px] w-[256px] h-[256px] rounded-[24px] border-2 border-white/10 overflow-hidden">
                <img src="/images/v308_3.png" alt="Profile" className="w-full h-full object-cover" />
              </div>

              {/* Quote */}
              <div className="absolute fade-in top-[362px] left-[86px] w-[256px] h-[121px] bg-[#323232]/50 backdrop-blur-xl rounded-[24px] border-2 border-white/10 p-5">
                <span className="absolute fade-in top-3 left-4 text-[24px] font-bold">“</span>
                <span className="block mt-6 text-[16px] font-bold leading-tight">
                  With great power<br />comes great responsibility.
                </span>
                <span className="absolute fade-in bottom-2 right-4 text-[24px] font-bold">“</span>
              </div>

              {/* Gallery */}
              <a href="" className="absolute fade-in top-[76px] left-[372px] w-[256px] h-[120px] bg-[#323232]/50 backdrop-blur-xl rounded-[24px] border-2 border-white/10 flex items-center justify-start gap-4 pl-[54px] transition-colors hover:bg-[#3a3a3a]">
                <span className="text-[24px] font-bold">GALLERY</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com/elzastrelitzia" className="absolute fade-in top-[212px] left-[372px] w-[256px] h-[120px] bg-[#323232]/50 backdrop-blur-xl rounded-[24px] border-2 border-white/10 flex items-center justify-start gap-4 pl-[54px] transition-colors hover:bg-[#3a3a3a]">
                <span className="text-[24px] font-bold">GITHUB</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>

              {/* Clock */}
              <div className="absolute fade-in top-[76px] left-[658px] w-[256px] h-[256px] bg-[#323232]/50 backdrop-blur-xl rounded-[24px] border-2 border-white/10 flex items-center justify-center">
                <span className="block text-[128px] leading-none text-center -translate-y-[2.5%]" style={{ fontFamily: "NDot, sans-serif" }}>
                  {time}
                </span>
              </div>
          {/* About Me */}
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className={`absolute fade-in rounded-[24px] border-2 border-white/10 overflow-hidden transition-all duration-300 ${
              expanded
                ? "z-20 top-0 left-0 w-[1000px] h-[560px] bg-[#323232]/50 backdrop-blur-xl cursor-pointer"
                : "z-10 top-[362px] left-[372px] w-[542px] h-[121px] bg-[#323232]/50 backdrop-blur-xl cursor-pointer hover:bg-[#3a3a3a]"
            }`}
          >
            {expanded ? (
              <span className="block w-full h-full p-12 text-left overflow-y-auto">
                <img src="/abme.svg" alt="About Me" className="w-[260px] h-auto mb-6" />
                <span className="block text-[16px] leading-relaxed text-white/80 max-w-[760px]">
                  {/* ponytail: placeholder copy, replace with real About Me text */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
              </span>
            ) : (
              <img src="/abme.svg" alt="About Me" className="w-full h-full object-contain" />
            )}
            {expanded && (
              <span className="absolute fade-in top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-[#404040] border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </span>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
