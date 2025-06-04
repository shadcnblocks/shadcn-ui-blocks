import fs from "fs/promises";
import path from "path";
import React from "react";

import { ComponentRenderer } from "@/components/ComponentRenderer";

import blocksList from "@/blocks.generated.json";

// type assertion for the generated array
const blocks = blocksList as string[];

type Block = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<any>;
  code: string;
};

export default async function Page() {
  // Dynamically import all block components and their code
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
    <div>
      <div className="container">
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-center text-8xl font-bold">Free Blocks</h1>
          <h2 className="text-center text-8xl font-bold">
            Free Shadcn/ui blocks
            {blocksWithCode.length}
          </h2>
        </div>
      </div>
      {blocksWithCode.map((block) => (
        <ComponentRenderer key={block.name} {...block} />
      ))}
    </div>
  );
}
