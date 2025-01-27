interface Logo {
  name: string;
  logo: string;
  className: string;
}

interface Logos8Props {
  title?: string;
  subtitle?: string;
  logos?: Logo[];
}

const Logos8 = ({
  title = "Trusted by these companies",
  subtitle = "Used by the world's leading companies",
  logos = [
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
}: Logos8Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-1 text-muted-foreground">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.logo}
                alt={`${logo.name} logo`}
                width={109}
                height={48}
                className={logo.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos8 };
