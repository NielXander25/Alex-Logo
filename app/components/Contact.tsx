import Reveal from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-line px-5 sm:px-10 text-center">
      <Reveal className="max-w-[680px] mx-auto py-[80px] md:py-[130px] md:pb-20">
        <p className="font-mono text-fg-dim text-xs font-medium tracking-[0.08em] uppercase mb-[22px]">
          START A PROJECT
        </p>
        <h2 className="font-[var(--font-archivo)] font-extrabold text-[clamp(30px,5vw,48px)] leading-[1.15] mb-9">
          Got a mark that needs
          <br />a structure under it?
        </h2>
        <a
          href="mailto:jathnielalexander@gmail.com"
          className="font-[var(--font-archivo)] font-semibold text-[clamp(20px,3vw,28px)] border-b border-line pb-1.5 hover:text-signal hover:border-signal transition-colors duration-300"
        >
          jathnielalexander@gmail.com
        </a>
      </Reveal>

      <div className="max-w-[1180px] mx-auto py-6 pb-9 flex justify-between font-mono text-[11px] text-fg-faint tracking-wide">
        <span>KING&apos;SMIND LABS © 2026</span>
        <span>JATHNIEL ALEXANDER</span>
      </div>
    </footer>
  );
}
