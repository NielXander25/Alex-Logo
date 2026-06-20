export type CaseStudy = {
  id: string;
  num: string;
  title: string;
  meta: string;
  brief: React.ReactNode;
  logicLabel: string;
  logic: React.ReactNode;
  constructionLabel: string;
  construction: React.ReactNode;
  tags: string[];
  media: {
    src: string;
    alt: string;
    tag: string;
    variant?: "default" | "gradient" | "process";
  }[];
  reverse?: boolean;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
  dark?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/logos/b1c325fd63eb60b56531c15056aeb57e.jpg",
    alt: "Arvoan brand identity system across business cards, app icon, and packaging",
    caption:
      "Full brand identity system — wordmark, arrow lockup, and packaging built around a single geometric 'a' monogram.",
    wide: true,
  },
  {
    src: "/logos/d9b16e3fc7fa200e7463f91c5859e82d_webp.jpg",
    alt: "Hand-drawn construction sketch for an infinity symbol N logo on graph paper",
    caption:
      "Construction sketch — an infinity symbol and the letter N built on a shared angle grid, graph paper.",
  },
  {
    src: "/logos/f0846aa2d35c6fed3daa14680876f9c5_webp.jpg",
    alt: "Golden ratio circle grid construction for a lowercase g monogram logo",
    caption:
      "Golden-ratio grid study for a lowercase 'g' monogram — circle proportions mapped before a single curve was drawn.",
  },
  {
    src: "/logos/b9474df1c2d42aad270d783171ca941f_webp.jpg",
    alt: "Six wordmark logo with a hidden number six formed from the letterforms",
    caption:
      "Wordmark play — a numeral hidden inside a typeface, built for a brand literally named after the trick.",
  },
  {
    src: "/logos/b4e92f48f0c262af2a37b3a9c8d2350d.jpg",
    alt: "Brenza Studio brand identity in navy and gold across merchandise and stationery",
    caption:
      "Full brand system in two-color block — bold geometric monogram extended across apparel and print.",
    wide: true,
    dark: true,
  },
  {
    src: "/logos/2a515a25818ee5dfdfba75077c11ee7d_webp.jpg",
    alt: "Minimal four-point spark or star logo mark in white on black",
    caption:
      "A four-point spark mark — built from two overlapping teardrop curves, nothing else.",
    dark: true,
  },
  {
    src: "/logos/Screenshot_20260620-101901.jpg",
    alt: "Adobe Illustrator screen showing a coffee brand badge logo in progress",
    caption:
      "Process — a coffee badge mark mid-build, Illustrator, before the type was set into its final arcs.",
  },
];
