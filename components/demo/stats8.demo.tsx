import { Stats8 } from "@/components/block/stats8";

const demoData = {
  heading: "Platform performance insights",
  description: "Ensuring stability and scalability for all users",
  link: {
    text: "Read the full impact report",
    url: "https://www.shadcnblocks.com",
  },
  stats: [
    {
      id: "stat-1",
      value: "250%+",
      label: "average growth in user engagement",
    },
    {
      id: "stat-2",
      value: "$2.5m",
      label: "annual savings per enterprise partner",
    },
    {
      id: "stat-3",
      value: "200+",
      label: "integrations with top industry platforms",
    },
    {
      id: "stat-4",
      value: "99.9%",
      label: "customer satisfaction over the last year",
    },
  ],
};

function Stats8Demo() {
  return <Stats8 {...demoData} />;
}

export { Stats8Demo };
