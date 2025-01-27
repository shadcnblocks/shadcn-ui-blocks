import {
  DollarSign,
  MessagesSquare,
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from "lucide-react";

import { Feature17 } from "@/components/block/feature17";

const demoData = {
  heading: "Our Core Features",
  subheading: "Features",
  features: [
    {
      title: "Performance",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <Timer className="size-4 md:size-6" />,
    },
    {
      title: "Innovation",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <Zap className="size-4 md:size-6" />,
    },
    {
      title: "Quality",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <ZoomIn className="size-4 md:size-6" />,
    },
    {
      title: "Accessibility",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <PersonStanding className="size-4 md:size-6" />,
    },
    {
      title: "Affordability",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <DollarSign className="size-4 md:size-6" />,
    },
    {
      title: "Customer Support",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <MessagesSquare className="size-4 md:size-6" />,
    },
  ],
};

function Feature17Demo() {
  return <Feature17 {...demoData} />;
}

export { Feature17Demo };
