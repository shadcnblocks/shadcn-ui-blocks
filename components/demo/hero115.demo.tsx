import { Hero115 } from "@/components/block/hero115";

const demoData = {
  heading: "Harness the Potential of Exceptional Design",
  description:
    "Build stunning websites effortlessly with our comprehensive design toolkit.",
  buttonText: "Discover Features",
  trustText: "Trusted by 25.000+ Businesses Worldwide",
  imageSrc: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
  imageAlt: "placeholder",
};

function Hero115Demo() {
  return <Hero115 {...demoData} />;
}

export { Hero115Demo };
