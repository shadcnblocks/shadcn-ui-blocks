import { Cta10 } from "@/components/block/cta10";

const demoData = {
  heading: "Ready to Get Started?",
  description:
    "Join thousands of satisfied customers using our platform to build amazing websites.",
  buttons: {
    primary: {
      text: "Get Started",
      url: "#",
    },
    secondary: {
      text: "Learn More",
      url: "#",
    },
  },
};

function Cta10Demo() {
  return <Cta10 {...demoData} />;
}

export { Cta10Demo };
