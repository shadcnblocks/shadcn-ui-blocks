import { Cta11 } from "@/components/block/cta11";

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

function Cta11Demo() {
  return <Cta11 {...demoData} />;
}

export { Cta11Demo };
