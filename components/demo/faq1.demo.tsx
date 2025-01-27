import { Faq1 } from "@/components/block/faq1";

const demoData = {
  heading: "Frequently asked questions",
  items: [
    {
      question: "What is shadcn/ui?",
      answer:
        "shadcn/ui is a collection of reusable components built using Radix UI and Tailwind CSS.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply install the components you need and start building your next project with beautiful, accessible components.",
    },
    {
      question: "Is it free to use?",
      answer:
        "Yes, shadcn/ui is completely free and open-source. You can use it in your personal and commercial projects.",
    },
    {
      question: "Can I customize the components?",
      answer:
        "Absolutely! All components are built with customization in mind. You can modify colors, styles, and behavior to match your needs.",
    },
  ],
};

function Faq1Demo() {
  return <Faq1 {...demoData} />;
}

export { Faq1Demo };
