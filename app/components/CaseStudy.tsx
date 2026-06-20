import Image from "next/image";
import Reveal from "./Reveal";

export type CaseStudyMedia = {
  src: string;
  alt: string;
  tag: string;
  variant?: "default" | "gradient" | "process";
};

export default function CaseStudy({
  num,
  title,
  meta,
  brief,
  logicLabel,
  logic,
  constructionLabel,
  construction,
  tags,
  media,
  reverse = false,
}: {
  num: string;
  title: string;
  meta: string;
  brief: React.ReactNode;
  logicLabel: string;
  logic: React.ReactNode;
  constructionLabel: string;
  construction: React.ReactNode;
  tags: string[];
  media: CaseStudyMedia[];
  reverse?: boolean;
}) {
  return (
    <Reveal>
      <article
        className={`max-w-[1180px] mx-auto px-5 sm:px-10 py-16 md:py-[140px] border-t border-line grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-[72px] items-start ${
          reverse ? "" : ""
        }`}
      >
        <div
          className={`flex flex-col gap-[18px] md:sticky md:top-[110px] ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          {media.map((m, i) => (
            <div
              key={i}
              className={`relative bg-bg-raised border border-line rounded overflow-hidden ${
                m.variant === "process" ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={m.src}
                alt={m.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={
                  m.variant === "gradient"
                    ? "object-contain p-6 bg-[#fafaf8]"
                    : "object-cover"
                }
              />
              <div className="absolute top-3 left-3 font-mono text-[10px] tracking-wide text-fg-dim bg-bg/78 px-[9px] py-[5px] rounded-sm border border-line">
                {m.tag}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`pt-2 ${reverse ? "md:order-1" : "md:order-2"}`}
        >
          <p className="font-mono text-signal text-[13px] mb-3.5 block">
            {num}
          </p>
          <h3 className="font-[var(--font-archivo)] font-bold text-[clamp(24px,3vw,32px)] leading-[1.2] mb-3.5">
            {title}
          </h3>
          <p className="font-mono text-fg-faint text-[11px] mb-6 block">
            {meta}
          </p>
          <p className="text-[17px] text-fg-dim mb-8 leading-[1.6] [&_em]:text-fg [&_em]:font-semibold [&_em]:not-italic">
            {brief}
          </p>

          <div className="py-6 border-t border-line">
            <p className="font-mono text-signal text-[11px] mb-2.5 block">
              {logicLabel}
            </p>
            <p className="text-[15px] text-fg-dim leading-[1.65] [&_em]:text-fg [&_em]:font-semibold [&_em]:not-italic [&_.mono]:text-fg [&_.mono]:font-mono">
              {logic}
            </p>
          </div>

          <div className="py-6 border-t border-line">
            <p className="font-mono text-signal text-[11px] mb-2.5 block">
              {constructionLabel}
            </p>
            <p className="text-[15px] text-fg-dim leading-[1.65] [&_em]:text-fg [&_em]:font-semibold [&_em]:not-italic [&_.mono]:text-fg [&_.mono]:font-mono">
              {construction}
            </p>
          </div>

          <div className="flex gap-2.5 flex-wrap mt-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10.5px] text-fg-dim border border-line px-3 py-[7px] rounded-full tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
