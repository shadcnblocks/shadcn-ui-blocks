import { Team1 } from "@/components/block/team1";

const demoData = {
  heading: "Meet our team",
  subheading: "We're hiring",
  description:
    "Join our team of passionate individuals working to build the future of web development.",
  members: [
    {
      id: "person-1",
      name: "Name",
      role: "Role",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
    },
    {
      id: "person-2",
      name: "Name",
      role: "Role",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
    },
    {
      id: "person-3",
      name: "Name",
      role: "Role",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
    },
    {
      id: "person-4",
      name: "Name",
      role: "Role",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
    },
    {
      id: "person-5",
      name: "Name",
      role: "Role",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
    },
    {
      id: "person-6",
      name: "Name",
      role: "Role",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-6.webp",
    },
    {
      id: "person-7",
      name: "Name",
      role: "Role",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-7.webp",
    },
    {
      id: "person-8",
      name: "Name",
      role: "Role",
      avatar: "https://www.shadcnblocks.com/images/block/avatar-8.webp",
    },
  ],
};

function Team1Demo() {
  return <Team1 {...demoData} />;
}

export { Team1Demo };
