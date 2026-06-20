import Image from "next/image";
import Reveal from "./Reveal";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="work" className="pb-16">
      <Reveal className="max-w-[1180px] mx-auto px-5 sm:px-10 pt-[120px] pb-14">
        <p className="font-mono text-fg-dim text-xs font-medium tracking-[0.08em] uppercase mb-[22px]">
          THE WIDER FIELD / SELECTED MARKS
        </p>
        <h2 className="font-[var(--font-archivo)] font-extrabold text-[clamp(30px,5vw,48px)] tracking-[-0.01em] max-w-[680px]">
          More from the sketchbook and the studio floor.
        </h2>
        <p className="text-fg-dim max-w-[560px] mt-[18px] text-base">
          Not every mark gets a full case study — some are explorations, some
          are full identity systems, some are still mid-construction. All of
          them earned their place here.
        </p>
      </Reveal>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3.5">
        {galleryItems.map((item, i) => (
          <Reveal key={item.src + i} className={item.wide ? "col-span-2" : ""}>
            <div
              className={`group relative rounded overflow-hidden border border-line aspect-square cursor-pointer ${
                item.dark ? "bg-[#0a0a0a]" : "bg-[#fafaf8]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 pb-3.5 text-[12.5px] leading-[1.4] text-fg bg-gradient-to-t from-black/88 to-transparent opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {item.caption}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
