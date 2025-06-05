import { promises as fs } from "fs";
import path from "path";

const blocksDir = path.join(__dirname, "../src/block");
const screenshotsDir = path.join(__dirname, "../public/screenshots/block");
const readmePath = path.join(__dirname, "../README.md");

async function getBlockIds() {
  const files = await fs.readdir(blocksDir);
  return files
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => path.basename(f, ".tsx"));
}

async function getScreenshotFilename(id: string): Promise<string | null> {
  const png = `${id}.png`;
  const jpg = `${id}.jpg`;
  try {
    await fs.access(path.join(screenshotsDir, png));
    return `/public/screenshots/block/${png}`;
  } catch (e) {
    /* ignore error */
  }
  try {
    await fs.access(path.join(screenshotsDir, jpg));
    return `/public/screenshots/block/${jpg}`;
  } catch (e) {
    /* ignore error */
  }
  return null;
}

async function generateTable(blockIds: string[]) {
  // First, gather all content for each column
  const screenshotContents = await Promise.all(
    blockIds.map(async (id) => {
      const screenshot = await getScreenshotFilename(id);
      return screenshot ? `![${id}](${screenshot})` : "";
    }),
  );
  const blockIdContents = blockIds.map((id) => `\`${id}\``);
  // Include header in width calculation
  const screenshotHeaderText = "Screenshot";
  const blockIdHeaderText = "Block ID";
  const screenshotColWidth = Math.max(
    screenshotHeaderText.length,
    ...screenshotContents.map((c) => c.length),
  );
  const blockIdColWidth = Math.max(
    blockIdHeaderText.length,
    ...blockIdContents.map((c) => c.length),
  );
  // Pad headers
  const screenshotHeader = screenshotHeaderText.padEnd(screenshotColWidth, " ");
  const blockIdHeader = blockIdHeaderText.padEnd(blockIdColWidth, " ");
  // Separator lines
  const screenshotSep = "".padEnd(screenshotColWidth, "-");
  const blockIdSep = "".padEnd(blockIdColWidth, "-");
  // Build rows
  const rows = await Promise.all(
    blockIds.map(async (id, i) => {
      const imgTag = screenshotContents[i];
      const paddedImgTag = imgTag.padEnd(screenshotColWidth, " ");
      const paddedId = blockIdContents[i].padEnd(blockIdColWidth, " ");
      return `| ${paddedImgTag} | ${paddedId} |`;
    }),
  );
  return [
    `| ${screenshotHeader} | ${blockIdHeader} |`,
    `| ${screenshotSep} | ${blockIdSep} |`,
    ...rows,
  ].join("\n");
}

async function updateReadme(table: string) {
  let readme = await fs.readFile(readmePath, "utf8");
  // Remove any existing '## Blocks' section and its table
  const blocksSectionRegex = /## Blocks[\s\S]*?(?=^## |Z)/gm;
  readme = readme.replace(blocksSectionRegex, "");
  // Add static markdown at the top
  const staticTop = `# Free Blocks for shadcn/ui\n\nA simple collection of 44 free marketing blocks for shadcn/ui, Tailwind and React.`;
  // Add static markdown at the bottom
  const staticBottom = `\n\nFind hundreds more blocks at https://shadcnblocks.com\n`;
  // Insert the new blocks section after the static markdown
  const newReadme = [staticTop, "\n## Blocks\n", table, staticBottom].join(
    "\n",
  );
  await fs.writeFile(readmePath, newReadme);
  console.log(
    "README.md updated with blocks table, static header, and static footer.",
  );
}

async function main() {
  const blockIds = await getBlockIds();
  const table = await generateTable(blockIds);
  await updateReadme(table);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
