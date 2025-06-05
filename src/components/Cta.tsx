import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <section className="">
      <div className='flex items-center justify-center bg-[url("https://shadcnblocks.com/images/block/patterns/circles.svg")] bg-cover bg-center py-20 text-center md:p-20'>
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-3xl font-semibold text-balance md:text-5xl">
              Want Hundreds more blocks? Visit Shadcnblocks.com
            </h1>
            <p className="md:text-lg">
              Try our tools and services to build your website faster.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg" asChild>
                <a href="https://shadcnblocks.com">Visit Shadcnblocks.com</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta };
