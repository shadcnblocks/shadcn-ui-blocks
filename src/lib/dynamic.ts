import { pascalCase } from "change-case";
import fs from "fs";
import dynamic from "next/dynamic";
import path from "path";

export async function getDynamicComponent(id: string) {
  const pascalCaseId = pascalCase(id);
  return dynamic(
    () => import(`../components/block/${id}`).then((mod) => mod[pascalCaseId]),
    {
      suspense: true,
    },
  );
}

export async function getComponentFilenames(): Promise<string[]> {
  const dirPath = path.join(process.cwd(), "src/components/block");
  return await fs.promises.readdir(dirPath);
}

export async function getDynamicDemo(id: string) {
  const pascalCaseId = pascalCase(id);
  return dynamic(
    () =>
      import(`../components/demo/${id}.demo`).then(
        (mod) => mod[`${pascalCaseId}Demo`],
      ),
    {
      suspense: true,
    },
  );
}
