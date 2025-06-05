import { FaGithub } from "react-icons/fa6";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b py-20 font-sans after:absolute after:bottom-0 after:left-0 after:block after:h-20 after:w-full after:bg-[linear-gradient(var(--color-transparent),var(--color-white))] after:content-[''] md:py-32">
      <div className="relative container">
        <img
          src="/images/circles.svg"
          alt=""
          className="absolute top-[-68.75rem] right-[-86.25rem] z-[-1] block aspect-square h-auto w-[181.25rem] max-w-none"
        />
        <div className="grid grid-cols-1 items-center justify-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl leading-[1.1] font-normal md:text-5xl xl:text-6xl">
              A collection of free opensource blocks for shadcn/ui
            </h1>
            <div className="flex gap-2">
              <Button asChild variant="default" className="w-fit">
                <a href="#">
                  <FaGithub /> Star on Github
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden justify-self-center lg:block lg:justify-self-end">
            <div className="flex aspect-[0.955145119/1] flex-col rounded-xl border bg-white p-3 shadow-xl sm:w-[22.625rem]">
              <AspectRatio
                ratio={1.110367893 / 1}
                className="w-full overflow-hidden rounded-lg bg-muted"
              >
                <img
                  src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                  alt=""
                  className="block h-full w-full object-cover object-center"
                />
              </AspectRatio>
              <div className="m-auto flex w-full items-center justify-between">
                <div className="flex items-center gap-2 rounded-md px-2 py-1">
                  <img
                    src="/images/shadcn-ui-icon.svg"
                    alt="shadcn UI"
                    className="h-4 w-4"
                  />
                  <p className="text-xs font-semibold sm:text-sm">shadcn/ui</p>
                </div>
                <div className="flex items-center gap-2 rounded-md px-2 py-1">
                  <img
                    src="/images/tailwind-icon.svg"
                    alt="Tailwind CSS"
                    className="size-5"
                  />
                  <p className="text-xs font-semibold sm:text-sm">Tailwind</p>
                </div>
                <div className="flex items-center gap-2 rounded-md px-2 py-1">
                  <img
                    src="/images/react-icon.svg"
                    alt="React"
                    className="h-4 w-4"
                  />
                  <p className="text-xs font-semibold sm:text-sm">React</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
