"use client";

import { useEffect, useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export default function MinimapSidebar({
  blocks,
}: {
  blocks: { name: string }[];
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let current: string | null = null;
      for (const block of blocks) {
        const el = document.getElementById(`${block.name}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = block.name;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blocks]);

  return (
    <div className="sticky top-0 z-10 hidden h-screen md:block">
      <Sidebar
        side="right"
        variant="sidebar"
        collapsible="none"
        className="w-48 border-l bg-background/80 backdrop-blur"
      >
        <SidebarContent className="hide-scrollbar p-2">
          <SidebarGroup>
            <SidebarGroupLabel>Minimap</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {blocks.map((block) => (
                  <SidebarMenuItem key={block.name}>
                    <a
                      href={`#${block.name}`}
                      className={
                        "block truncate rounded px-2 py-1 text-xs transition-all " +
                        (active === block.name
                          ? "bg-accent font-bold text-accent-foreground"
                          : "hover:bg-accent")
                      }
                    >
                      {block.name}
                    </a>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
