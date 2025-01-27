import { Hero32 } from "@/components/block/hero32";

const demoData = {
  heading: "Blocks Built With Shadcn & Tailwind",
  button: {
    text: "Discover all components",
    url: "https://www.shadcnblocks.com",
  },
  integrations: [
    [
      {
        id: "integration-1",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-1.svg"
          />
        ),
      },
      {
        id: "integration-2",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-2.svg"
          />
        ),
      },
      {
        id: "integration-3",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-3.svg"
          />
        ),
      },
      {
        id: "integration-4",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-4.svg"
          />
        ),
      },
      {
        id: "integration-5",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-5.svg"
          />
        ),
      },
    ],
    [
      {
        id: "integration-6",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-6.svg"
          />
        ),
      },
      {
        id: "integration-7",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-1.svg"
          />
        ),
      },
      {
        id: "integration-8",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-2.svg"
          />
        ),
      },
      {
        id: "integration-9",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-3.svg"
          />
        ),
      },
      {
        id: "integration-10",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-4.svg"
          />
        ),
      },
    ],
    [
      {
        id: "integration-11",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-5.svg"
          />
        ),
      },
      {
        id: "integration-12",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-6.svg"
          />
        ),
      },
      {
        id: "integration-13",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-1.svg"
          />
        ),
      },
      {
        id: "integration-14",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-2.svg"
          />
        ),
      },
      {
        id: "integration-15",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-3.svg"
          />
        ),
      },
    ],
  ],
};

function Hero32Demo() {
  return <Hero32 {...demoData} />;
}

export { Hero32Demo };
