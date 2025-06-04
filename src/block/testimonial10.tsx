import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial10Props {
  quote?: string;
  author?: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
}

const Testimonial10 = ({
  quote = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  author = {
    name: "Customer Name",
    role: "Role",
    avatar: {
      src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
      alt: "Customer Name",
    },
  },
}: Testimonial10Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <p className="mb-16 max-w-4xl px-8 font-medium lg:text-3xl">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <Avatar className="size-12 md:size-16">
              <AvatarImage src={author.avatar.src} alt={author.avatar.alt} />
              <AvatarFallback>{author.name}</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-medium md:text-base">{author.name}</p>
              <p className="text-sm text-muted-foreground md:text-base">
                {author.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial10 };
