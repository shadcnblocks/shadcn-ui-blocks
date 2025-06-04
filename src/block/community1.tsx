import { FaDiscord, FaGithub, FaXTwitter } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

const Community1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-5">
          <img src="https://shadcnblocks.com/images/block/block-1.svg" alt="logo" className="size-10" />
          <h2 className="text-center text-3xl font-semibold">
            Join our community
            <br />
            <span className="text-muted-foreground/80">
              of designers & developers
            </span>
          </h2>
          <div className="flex items-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://x.com/shadcnblocks"
                target="_blank"
                className="size-10"
              >
                <FaXTwitter />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/shadcnblocks"
                target="_blank"
                className="size-10"
              >
                <FaGithub />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://shadcnblocks.com"
                target="_blank"
                className="size-10"
              >
                <FaDiscord />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Community1 };
