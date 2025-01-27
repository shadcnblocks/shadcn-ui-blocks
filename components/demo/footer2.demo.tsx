import { Footer2 } from "@/components/block/footer2";

const demoData = {
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Shadcnblocks.com",
  },
  tagline: "Components made easy.",
  menuItems: [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "/overview" },
        { text: "Pricing", url: "/pricing" },
        { text: "Marketplace", url: "/marketplace" },
        { text: "Features", url: "/features" },
        { text: "Integrations", url: "/integrations" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "/about" },
        { text: "Team", url: "/team" },
        { text: "Blog", url: "/blog" },
        { text: "Careers", url: "/careers" },
        { text: "Contact", url: "/contact" },
        { text: "Privacy", url: "/privacy" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help", url: "/help" },
        { text: "Sales", url: "/sales" },
        { text: "Advertise", url: "/advertise" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "/twitter" },
        { text: "Instagram", url: "/instagram" },
        { text: "LinkedIn", url: "/linkedin" },
      ],
    },
  ],
  copyright: "© 2024 Copyright. All rights reserved.",
  bottomLinks: [
    { text: "Terms and Conditions", url: "/terms" },
    { text: "Privacy Policy", url: "/privacy" },
  ],
};

function Footer2Demo() {
  return <Footer2 {...demoData} />;
}

export { Footer2Demo };
