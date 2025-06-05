import Prism from "prismjs";
import React from "react";
import "prismjs/components/prism-typescript";

import "prismjs/themes/prism-tomorrow.css";

import { CopyButton } from "@/components/CopyButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type ComponentRendererProps = {
  name: string;
  Component: React.ComponentType<Record<string, unknown>>;
  code: string;
};

export function ComponentRenderer({
  name,
  Component,
  code,
}: ComponentRendererProps) {
  const highlighted = Prism.highlight(
    code,
    Prism.languages.typescript,
    "typescript",
  );

  return (
    <div className="w-full max-w-full overflow-x-hidden border-b pt-16">
      <Tabs defaultValue="preview" className="w-full">
        <div className="container">
          <h2 className="mb-4 text-lg font-normal">{name}</h2>
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="preview"
          className="w-full max-w-full overflow-x-hidden pt-4"
        >
          <Component />
        </TabsContent>
        <TabsContent value="code" className="pt-4">
          <div className="container">
            <div className="relative">
              <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-xs">
                <code
                  className="language-ts"
                  dangerouslySetInnerHTML={{ __html: highlighted }}
                />
              </pre>
              <div className="absolute top-2 right-2">
                <CopyButton code={code} />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
