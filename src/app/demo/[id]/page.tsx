import fs from "fs";
import path from "path";

import { getDynamicDemo } from "@/lib/dynamic";

export default async function Page({ params }: { params: { id: string } }) {
  const Component = await getDynamicDemo(params.id);
  return (
      <Component />
  );
}

export async function generateStaticParams() {
  const blocksDirectory = path.join(process.cwd(), "src", "components", "demo");

  const files = fs.readdirSync(blocksDirectory);

  const blocks = files
    .filter((file) => file.match(/\.(tsx|jsx|ts|js)$/))
    .map((file) => ({
      id: file.replace(/\.(tsx|jsx|ts|js)$/, ""),
    }));

  return blocks;
}
