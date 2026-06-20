import Nav from "./components/Nav";
import Hero from "./components/Hero";
import IntroStrip from "./components/IntroStrip";
import CaseStudy from "./components/CaseStudy";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <div className="grain" />
      <Nav />
      <Hero />
      <IntroStrip />

      <section id="studies" className="bg-bg">
        <Reveal className="max-w-[1180px] mx-auto px-5 sm:px-10 pt-[90px] md:pt-[120px] pb-14">
          <p className="font-mono text-fg-dim text-xs font-medium tracking-[0.08em] uppercase mb-[22px]">
            SELECTED WORK / 03 CASE STUDIES
          </p>
          <h2 className="font-[var(--font-archivo)] font-extrabold text-[clamp(30px,5vw,48px)] tracking-[-0.01em] max-w-[680px]">
            Three marks, three constructions.
          </h2>
        </Reveal>

        <CaseStudy
          num="01 / NDA"
          title="A circle that cradles a triangle"
          meta="ARCHITECTURE FIRM — CLIENT NAME WITHHELD PER NDA"
          brief={
            <>
              Two founders, one practice, and a brief with no patience for
              decoration: <em>bold, strong, no-nonsense.</em> No taglines
              about &quot;building dreams.&quot; They wanted a mark that
              looked load-bearing.
            </>
          }
          logicLabel="THE LOGIC"
          logic={
            <>
              The practice is built on two initials — C and A. Rather than
              letter them side by side, I built the C as a structural ring
              that <em>cradles</em> the A, so the two founders read as one
              continuous form, not two names stapled together. The triangle
              does double duty: it&apos;s the A, and it&apos;s the universal
              sign for structural stability — the shape every roof truss and
              load path reduces to.
            </>
          }
          constructionLabel="THE CONSTRUCTION"
          construction={
            <>
              Nothing in this mark is freehand. The triangle&apos;s legs, the
              circle&apos;s radius, and the negative-space gap between them
              are all locked to a single repeating module — marked as{" "}
              <span className="mono">x</span> across the construction grid.
              That discipline is what lets the mark survive being engraved,
              embossed, or shrunk to a favicon without the joints going soft.
            </>
          }
          tags={["MONOGRAM", "GRID-BUILT", "SINGLE COLOR"]}
          media={[
            {
              src: "/logos/1c2afd5df5bc136bfbae9ce51386cd5f_webp.jpg",
              alt: "Interlocking triangle and circle monogram logo combining the letters C and A, for an architecture firm",
              tag: "FINAL MARK",
            },
          ]}
        />

        <CaseStudy
          reverse
          num="02 / NDA"
          title="The hub hides in the negative space"
          meta="SOFTWARE PLATFORM — CLIENT NAME WITHHELD PER NDA"
          brief={
            <>
              The brief was three words: <em>premium, sleek, tech-forward.</em>{" "}
              The harder problem underneath it — this platform&apos;s whole
              pitch is that it&apos;s a hub, a single point where scattered
              things connect. That&apos;s an abstract claim to put in a shape.
            </>
          }
          logicLabel="THE LOGIC"
          logic={
            <>
              Rather than illustrate &quot;connection&quot; literally —
              nodes, lines, network diagrams, the usual tech-logo shorthand —
              I built a single continuous ribbon that loops back on itself.
              The connection isn&apos;t drawn; it&apos;s implied by the
              negative space the ribbon leaves behind, which resolves into a
              pin-like core sitting at the center. You don&apos;t connect to
              a hub. You discover it&apos;s already there.
            </>
          }
          constructionLabel="THE CONSTRUCTION"
          construction={
            <>
              This one started as five overlapping guide circles, visible in
              the working file — each one set the radius for one twist of
              the ribbon. I built the form in grayscale first, checking the
              negative-space pin held its shape at every stage, before any
              gradient was applied. Color came last, on purpose: a gradient
              can hide a weak shape, and I wasn&apos;t going to find out the
              hard way after sign-off.
            </>
          }
          tags={["GRADIENT MARK", "NEGATIVE SPACE", "CIRCLE-GRID"]}
          media={[
            {
              src: "/logos/b1b0b0e34927f134053cd8fefd7161ed.jpg",
              alt: "Gradient teal to deep blue swirl logo with a hidden negative-space pin shape at its center, for a tech platform",
              tag: "FINAL MARK",
              variant: "gradient",
            },
            {
              src: "/logos/Screenshot_20260620-101512.jpg",
              alt: "Adobe Illustrator screen showing the construction circles and guides used to build the swirl logo",
              tag: "CONSTRUCTION FILE",
              variant: "process",
            },
          ]}
        />

        <CaseStudy
          num="03 / CHARLOTTE DAVE"
          title="Where the ingredient becomes the face"
          meta="SKINCARE — CHARLOTTE DAVE"
          brief={
            <>
              Charlotte Dave needed a mark that said{" "}
              <em>natural, organic, calming</em> without leaning on the stock
              visual language of the category — no dewdrops, no generic
              botanical wreath, no script font promising &quot;clean
              beauty.&quot;
            </>
          }
          logicLabel="THE LOGIC"
          logic={
            <>
              The leaves in this mark aren&apos;t decoration around the brand
              — they <em>are</em> the brand. They stand in directly for the
              natural ingredients in the product line, growing out of where
              the hairline meets the silhouette, so the woman isn&apos;t
              holding or wearing the ingredient — she&apos;s made partly of
              it. The circle behind her closes the mark into something that
              reads instantly at thumbnail size, which matters far more than
              people admit for a brand that lives mostly on a phone screen.
            </>
          }
          constructionLabel="THE CONSTRUCTION"
          construction={
            <>
              The silhouette and leaves share one continuous outer contour —
              there&apos;s no point where you can separate &quot;face&quot;
              from &quot;leaf&quot; without the shape collapsing. That forced
              every curve to do two jobs at once: read as a jawline and a
              leaf edge simultaneously. The deep maroon was chosen over the
              more expected sage-green-and-blush palette specifically to
              feel premium rather than purely &quot;natural,&quot; since the
              brand sits at a higher price point than most organic skincare.
            </>
          }
          tags={["ILLUSTRATIVE MARK", "SHARED CONTOUR", "SINGLE COLOR"]}
          media={[
            {
              src: "/logos/c5785dc838c5265378ff7d8beff92fcf_webp.jpg",
              alt: "Maroon logo combining a woman's silhouette with leaf shapes, for Charlotte Dave skincare brand",
              tag: "FINAL MARK",
            },
          ]}
        />
      </section>

      <Gallery />
      <About />
      <Contact />
    </>
  );
}
