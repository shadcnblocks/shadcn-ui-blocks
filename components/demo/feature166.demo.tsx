import { Feature166 } from "@/components/block/feature166";

const demoData = {
  heading: "Blocks built with Shadcn & Tailwind",
  description:
    "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  feature1: {
    title: "UI/UX Design",
    description:
      "Creating intuitive user experiences with modern interface design principles and user-centered methodologies.",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
  feature2: {
    title: "Responsive Development",
    description:
      "Building websites that look and function perfectly across all devices and screen sizes.",
    image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
  },
  feature3: {
    title: "Brand Integration",
    description:
      "Seamlessly incorporating your brand identity into every aspect of your website's design.",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
  feature4: {
    title: "Performance Optimization",
    description:
      "Ensuring fast loading times and smooth performance through optimized code and assets.",
    image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
  },
};

function Feature166Demo() {
  return <Feature166 {...demoData} />;
}

export { Feature166Demo };
