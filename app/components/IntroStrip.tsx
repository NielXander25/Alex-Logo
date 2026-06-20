export default function IntroStrip() {
  return (
    <section className="border-t border-b border-line py-12 px-5 sm:px-10">
      <p className="max-w-[1180px] mx-auto font-[var(--font-archivo)] font-medium text-[clamp(18px,2.4vw,26px)] leading-[1.5] text-fg-dim">
        Three principles run through every project here:{" "}
        <strong className="text-fg font-semibold">
          structure before style
        </strong>{" "}
        — a mark should hold together on a grid before it holds together on a
        billboard;{" "}
        <strong className="text-fg font-semibold">one idea, stated once</strong>{" "}
        — the best logos resist the urge to explain themselves twice; and{" "}
        <strong className="text-fg font-semibold">built for use</strong>, not
        just for the reveal post.
      </p>
    </section>
  );
}
