import { promises as fs } from "fs";
import path from "path";

const blocksDir = path.join(__dirname, "../src/block");
const outputFile = path.join(__dirname, "../src/blocks.generated.json");

async function main() {
  const files = (await fs.readdir(blocksDir)).filter((f) => f.endsWith(".tsx"));

  const blocks = files.map((f) => {
    const name = path.basename(f, ".tsx");
    // Capitalize first letter (for consistency with imports)
    return name.charAt(0).toUpperCase() + name.slice(1);
  });

  await fs.writeFile(outputFile, JSON.stringify(blocks, null, 2));
  console.log(`Generated ${outputFile} with ${blocks.length} blocks.`);
}

main();
