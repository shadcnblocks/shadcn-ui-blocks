import { Feature13 } from "@/components/block/feature13";

const demoData = {
  heading: "A better way to build websites",
  features: [
    {
      id: "feature-1",
      title: "Built for artists and designers",
      subtitle: "FOR DESIGNERS",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore quis facilis molestias!",
      image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    },
    {
      id: "feature-2",
      title: "Built for coders and developers",
      subtitle: "FOR DEVELOPERS",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore quis facilis molestias!",
      image: "https://www.shadcnblocks.com/images/block/placeholder-4.svg",
    },
  ],
};

function Feature13Demo() {
  return <Feature13 {...demoData} />;
}

export { Feature13Demo };
