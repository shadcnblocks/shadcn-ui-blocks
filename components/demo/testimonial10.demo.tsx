import { Testimonial10 } from "@/components/block/testimonial10";

const demoData = {
  quote:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  author: {
    name: "Customer Name",
    role: "Role",
    avatar: {
      src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
      alt: "Customer Name",
    },
  },
};

function Testimonial10Demo() {
  return <Testimonial10 {...demoData} />;
}

export { Testimonial10Demo };
