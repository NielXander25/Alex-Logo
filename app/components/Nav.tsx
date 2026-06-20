"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#work", label: "Work" },
  { href: "#studies", label: "Case Studies" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-5 sm:px-10 py-[22px] backdrop-blur-md transition-colors duration-300 ${
          scrolled
            ? "bg-bg/72 border-b border-line"
            : "bg-bg/72 border-b border-transparent"
        }`}
      >
        <Link
          href="#top"
          className="text-fg hover:text-signal hover:rotate-8 transition-all duration-300 flex"
          aria-label="Back to top"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle
              cx="14"
              cy="14"
              r="12.5"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M14 5L21.5 19H6.5L14 5Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-fg-dim hover:text-fg transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1.5 h-px w-0 bg-signal transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="font-mono text-xs tracking-wide bg-fg text-bg px-[18px] py-[9px] rounded-sm hover:bg-signal hover:text-fg transition-colors"
          >
            Start a project
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] p-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`w-[22px] h-[1.4px] bg-fg transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`w-[22px] h-[1.4px] bg-fg transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-screen w-[min(78vw,320px)] z-99 bg-bg-raised border-l border-line flex flex-col gap-7 px-8 pt-[100px] pb-8 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {[...links, { href: "#contact", label: "Start a project" }].map(
          (l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-[var(--font-archivo)] text-xl font-semibold text-fg"
            >
              {l.label}
            </Link>
          )
        )}
      </div>
    </>
  );
}
