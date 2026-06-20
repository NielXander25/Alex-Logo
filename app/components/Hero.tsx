"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowGrid(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <header
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-10 pt-[140px] pb-20 text-center overflow-hidden"
    >
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-[1400ms] ${
          showGrid ? "opacity-50" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(#2A2A2D 1px, transparent 1px), linear-gradient(90deg, #2A2A2D 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black 0%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-[780px]">
        <p
          className="font-mono text-fg-dim text-xs font-medium tracking-[0.08em] uppercase mb-[22px] opacity-0 translate-y-2 animate-[riseIn_0.7s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]"
        >
          KING&apos;SMIND LABS — IDENTITY &amp; MARK DESIGN
        </p>

        <h1
          className="font-[var(--font-archivo)] font-extrabold leading-[1.02] tracking-[-0.01em] text-[clamp(40px,8vw,84px)] mb-7 opacity-0 translate-y-3.5 animate-[riseIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.25s_forwards]"
        >
          Every mark
          <br />
          starts as{" "}
          <span className="text-signal italic font-bold font-[var(--font-archivo)]">
            geometry.
          </span>
        </h1>

        <p className="text-fg-dim text-[clamp(16px,2vw,19px)] max-w-[620px] mx-auto mb-10 opacity-0 translate-y-3.5 animate-[riseIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]">
          I&apos;m Jathniel Alexander — I build logos the way an engineer
          builds a structure: from guide circles and load-bearing angles
          outward, not from a blank canvas inward. What survives that process
          is what you see below.
        </p>

        <div className="flex gap-4 justify-center flex-wrap opacity-0 translate-y-3.5 animate-[riseIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.55s_forwards]">
          <a
            href="#studies"
            className="font-mono text-[13px] tracking-wide px-[26px] py-3.5 rounded-sm bg-fg text-bg hover:bg-signal hover:text-fg hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
          >
            See the construction work
          </a>
          <a
            href="#work"
            className="font-mono text-[13px] tracking-wide px-[26px] py-3.5 rounded-sm border border-line text-fg hover:border-fg-dim hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
          >
            View all marks
          </a>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-[11px] text-fg-faint tracking-[0.12em] opacity-0 animate-[riseIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.9s_forwards]">
        <span className="font-mono">SCROLL</span>
        <div className="w-px h-10 bg-line overflow-hidden">
          <div className="w-full h-[40%] bg-signal animate-[scrollPulse_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </header>
  );
}
