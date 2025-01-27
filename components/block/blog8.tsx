import { ArrowRight } from "lucide-react";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags?: string[];
}

interface Blog8Props {
  heading?: string;
  posts?: Post[];
}

const Blog8 = ({
  heading = "Blog Posts",
  posts = [
    {
      id: "post-1",
      title:
        "Building Modern UIs: A Deep Dive into Shadcn and React Components",
      summary:
        "Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques.",
      label: "Web Design",
      author: "Sarah Chen",
      published: "15 Feb 2024",
      url: "#",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
      tags: ["Web Design", "UI Development"],
    },
    {
      id: "post-2",
      title: "Mastering Tailwind CSS: From Basics to Advanced Techniques",
      summary:
        "Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.",
      label: "Web Design",
      author: "Michael Park",
      published: "22 Feb 2024",
      url: "#",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
      tags: ["Web Design", "CSS"],
    },
  ],
}: Blog8Props) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16">
        <h2 className="mx-auto mb-3 text-pretty text-center text-2xl font-semibold md:mb-4 md:text-3xl lg:mb-6 lg:max-w-3xl">
          {heading}
        </h2>
        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              className="group order-last grid gap-y-6 sm:order-first sm:col-span-12 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:col-span-10 lg:col-start-2 lg:gap-x-12"
            >
              <div className="sm:col-span-5">
                <div className="mb-4 md:mb-6">
                  <div className="flex text-xs uppercase tracking-wider text-muted-foreground">
                    {post.tags?.map((tag) => (
                      <span key={tag} className="mr-3 md:mr-5 lg:mr-6">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                  {post.title}
                </h3>
                <div className="mt-4 flex items-center space-x-2 md:mt-5">
                  <span className="font-semibold md:text-base">Read more</span>
                  <ArrowRight className="ml-2 size-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="order-first sm:order-last sm:col-span-5">
                <div className="aspect-[16/9] overflow-clip rounded-lg border border-border">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-[1.05]"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog8 };
