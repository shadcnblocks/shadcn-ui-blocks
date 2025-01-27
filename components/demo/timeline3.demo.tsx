import { Timeline3 } from "@/components/block/timeline3";

const demoData = {
  heading: "Experience the difference with us",
  description:
    "We believe in creating lasting partnerships with our clients, focusing on long-term success through collaborative innovation and dedicated support.",
  buttons: {
    primary: {
      text: "Start Now",
      url: "#",
    },
    secondary: {
      text: "Book a demo",
      url: "#",
    },
  },
  features: [
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Dedicated Support",
      description:
        "Expanded operations to 5 new countries, reaching millions of new users.",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-5.svg",
      title: "Series B Funding",
      description:
        "Secured $50M in Series B funding to accelerate product development.",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-5.svg",
      title: "Product Launch",
      description: "Successfully launched our flagship product to market.",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-5.svg",
      title: "Company Founded",
      description: "Started with a vision to revolutionize the industry.",
    },
  ],
};

function Timeline3Demo() {
  return <Timeline3 {...demoData} />;
}

export { Timeline3Demo };
