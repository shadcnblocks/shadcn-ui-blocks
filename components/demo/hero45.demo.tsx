import { HandHelping, Users, Zap } from "lucide-react";
import { Hero45 } from "@/components/block/hero45";

const demoData = {
  badge: "Easy to use",
  heading: "Blocks built with Shadcn & Tailwind",
  imageSrc: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
  imageAlt: "placeholder",
  features: [
    {
      icon: <HandHelping className="h-auto w-5" />,
      title: "Flexible Support",
      description:
        "Benefit from around-the-clock assistance to keep your business running smoothly.",
    },
    {
      icon: <Users className="h-auto w-5" />,
      title: "Collaborative Tools",
      description:
        "Enhance teamwork with tools designed to simplify project management and communication.",
    },
    {
      icon: <Zap className="h-auto w-5" />,
      title: "Lightning Fast Speed",
      description:
        "Experience the fastest load times with our high performance servers.",
    },
  ],
};

function Hero45Demo() {
  return <Hero45 {...demoData} />;
}

export { Hero45Demo };
