import fs from "fs/promises";
import path from "path";
import React from "react";

import { ComponentRenderer } from "@/components/ComponentRenderer";
import { Hero } from "@/components/Hero";
import { SidebarProvider } from "@/components/ui/sidebar";

import blocksList from "@/blocks.generated.json";

import MinimapSidebar from "../components/MinimapSidebar";

const blocks = blocksList as string[];

type Block = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<any>;
  code: string;
};

export default async function Page() {
  const blocksWithCode: Block[] = await Promise.all(
    blocks.map(async (blockName) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let Component: React.ComponentType<any>;
      try {
        // Dynamic import of the block component
        Component = (await import(`@/block/${blockName.toLowerCase()}`))[
          blockName
        ];
      } catch {
        Component = () => <div>Block not found: {blockName}</div>;
      }
      const blockFile = path.join(
        process.cwd(),
        "src/block",
        `${blockName.toLowerCase()}.tsx`,
      );
      let code = "";
      try {
        code = await fs.readFile(blockFile, "utf8");
      } catch {
        code = "// Block source not found";
      }
      return { name: blockName, Component, code };
    }),
  );

  return (
    <SidebarProvider>
      <div className="flex">
        {/* Main content with blocks */}
        <div className="flex-1">
          <Hero />
          {blocksWithCode.map((block) => (
            <div id={`block-${block.name}`} key={block.name}>
              <ComponentRenderer {...block} />
            </div>
          ))}
        </div>
        {/* Minimap sidebar */}
        <MinimapSidebar
          blocks={blocksWithCode.map((b) => ({ name: b.name }))}
        />
      </div>
    </SidebarProvider>
  );
}
