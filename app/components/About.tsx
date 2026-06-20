import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-line px-5 sm:px-10">
      <Reveal className="max-w-[760px] mx-auto py-[120px]">
        <p className="font-mono text-fg-dim text-xs font-medium tracking-[0.08em] uppercase mb-[22px]">
          ABOUT
        </p>
        <h2 className="font-[var(--font-archivo)] font-extrabold text-[clamp(28px,4.5vw,42px)] leading-[1.15] mb-7">
          I build interfaces for a living. <br />
          Logos, the same way.
        </h2>
        <p className="text-[17px] text-fg-dim leading-[1.7] mb-14">
          I&apos;m Jathniel Alexander, a frontend engineer and the lead at
          KING&apos;SMIND LABS. Most of my working week is spent in component
          systems, design tokens, and interfaces that have to hold together
          under real use — and that habit of mind carries straight over into
          logo work. A mark, like an interface, has to survive being resized,
          recolored, and reused by people who weren&apos;t in the room when
          it was made. So I build them the same way: grid first, rationale
          second, polish last.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="border-t border-line pt-[18px]">
            <span className="font-mono text-2xl text-signal mb-2 block">
              03
            </span>
            <span className="text-[13px] text-fg-dim leading-[1.4]">
              Case studies, deep detail
            </span>
          </div>
          <div className="border-t border-line pt-[18px]">
            <span className="font-mono text-2xl text-signal mb-2 block">
              B.Eng
            </span>
            <span className="text-[13px] text-fg-dim leading-[1.4]">
              Electrical &amp; Electronics Engineering
            </span>
          </div>
          <div className="border-t border-line pt-[18px]">
            <span className="font-mono text-2xl text-signal mb-2 block">
              NG
            </span>
            <span className="text-[13px] text-fg-dim leading-[1.4]">
              Based in Nigeria, working worldwide
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
