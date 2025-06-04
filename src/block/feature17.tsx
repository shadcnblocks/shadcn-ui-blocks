import {
  DollarSign,
  MessagesSquare,
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature17Props {
  heading?: string;
  subheading?: string;
  features?: Feature[];
}

const Feature17 = ({
  heading = "Our Core Features",
  subheading = "Features",
  features = [
    {
      title: "Performance",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <Timer className="size-4 md:size-6" />,
    },
    {
      title: "Innovation",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <Zap className="size-4 md:size-6" />,
    },
    {
      title: "Quality",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <ZoomIn className="size-4 md:size-6" />,
    },
    {
      title: "Accessibility",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <PersonStanding className="size-4 md:size-6" />,
    },
    {
      title: "Affordability",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <DollarSign className="size-4 md:size-6" />,
    },
    {
      title: "Customer Support",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <MessagesSquare className="size-4 md:size-6" />,
    },
  ],
}: Feature17Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-7xl">
        <p className="mb-4 text-xs text-muted-foreground md:pl-5">
          {subheading}
        </p>
        <h2 className="text-3xl font-medium md:pl-5 lg:text-4xl">{heading}</h2>
        <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
          {features.map((feature, idx) => (
            <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
              <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                {feature.icon}
              </span>
              <div>
                <h3 className="font-medium md:mb-2 md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature17 };
