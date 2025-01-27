import { Play, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Hero115Props {
  icon?: React.ReactNode;
  heading: string;
  description?: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  trustText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const Hero115 = ({
  icon = <Play className="size-6 fill-primary" />,
  heading = "Blocks built with Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttonText = "Discover Features",
  buttonIcon = <Zap className="ml-2 size-4" />,
  trustText = "Trusted by 25.000+ Businesses Worldwide",
  imageSrc = "https://shadcnblocks.com/images/block/placeholder-1.svg",
  imageAlt = "placeholder",
}: Hero115Props) => {
  return (
    <section className="overflow-hidden py-32">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-5">
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute left-1/2 top-1/2 -z-10 mx-auto size-[800px] rounded-full border p-16 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border"></div>
              </div>
            </div>
            <span className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20">
              {icon}
            </span>

            <h1 className="mx-auto max-w-screen-lg text-balance text-center text-3xl font-medium md:text-6xl">
              {heading}
            </h1>
            <p className="mx-auto max-w-screen-md text-center text-muted-foreground md:text-lg">
              {description}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pb-12 pt-3">
              <Button size="lg">
                {buttonText} {buttonIcon}
              </Button>
              <div className="text-xs text-muted-foreground">{trustText}</div>
            </div>
          </div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="mx-auto h-full max-h-[524px] w-full max-w-screen-lg rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero115 };
