import { Hero47 } from "@/components/block/hero47";

const demoData = {
  heading: "Epic Blocks",
  subheading: " built with shadcn/ui & Tailwind",
  description:
    "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons: {
    primary: {
      text: "Get Started",
      url: "#",
    },
    secondary: {
      text: "Read the docs",
      url: "#",
    },
  },
  image: {
    src: "https://shadcnblocks.com/images/block/placeholder-dark-7-tall.svg",
    alt: "Placeholder",
  },
};

function Hero47Demo() {
  return <Hero47 {...demoData} />;
}

export { Hero47Demo };
