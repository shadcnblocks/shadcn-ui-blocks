import { Logos8 } from "@/components/block/logos8";

const demoData = {
  title: "Trusted by these companies",
  subtitle: "Used by the world's leading companies",
  logos: [
    {
      name: "Vercel",
      logo: "https://shadcnblocks.com/images/block/logos/vercel.svg",
      className: "h-7 w-auto",
    },
    {
      name: "Astro",
      logo: "https://shadcnblocks.com/images/block/logos/tailwind.svg",
      className: "h-5 w-auto",
    },
    {
      name: "Supabase",
      logo: "https://shadcnblocks.com/images/block/logos/supabase.svg",
      className: "h-6 w-auto",
    },
    {
      name: "Figma",
      logo: "https://shadcnblocks.com/images/block/logos/figma.svg",
      className: "h-5 w-auto",
    },
    {
      name: "Astro",
      logo: "https://shadcnblocks.com/images/block/logos/astro.svg",
      className: "h-6 w-auto",
    },
  ],
};

function Logos8Demo() {
  return <Logos8 {...demoData} />;
}

export { Logos8Demo };
