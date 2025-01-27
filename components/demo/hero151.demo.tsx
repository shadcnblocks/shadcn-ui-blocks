import { Hero151 } from "@/components/block/hero151";

const demoData = {
  heading: "Blocks built with Shadcn & Tailwind",
  description:
    "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  button: {
    text: "Get Started",
    url: "#",
  },
  testimonial: {
    quote: "Focused strategy, swift delivery",
    author: "John Doe",
    role: "CEO",
    company: "Company",
    avatars: [
      { image: "https://shadcnblocks.com/images/block/avatar-1.webp", fallback: "AB" },
      { image: "https://shadcnblocks.com/images/block/avatar-2.webp", fallback: "CD" },
      { image: "https://shadcnblocks.com/images/block/avatar-3.webp", fallback: "EF" },
    ],
  },
  images: {
    first: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    second: "https://www.shadcnblocks.com/images/block/placeholder-dark-2.svg",
    third: "https://www.shadcnblocks.com/images/block/placeholder-dark-3.svg",
    fourth:
      "https://www.shadcnblocks.com/images/block/placeholder-dark-7-tall.svg",
  },
};

function Hero151Demo() {
  return <Hero151 {...demoData} />;
}

export { Hero151Demo };
