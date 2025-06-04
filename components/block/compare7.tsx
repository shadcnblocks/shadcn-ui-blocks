import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Compare7 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-semibold">Compare Us</h2>
        <p className="mb-8 text-center text-muted-foreground">
          A modern framework for building websites that is better than the
          competition.
        </p>
        <div className="mx-auto max-w-3xl overflow-x-auto">
          <Table className="rounded border text-left shadow-lg">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead className="bg-muted px-6 py-4 font-semibold">
                  Shadcn
                </TableHead>
                <TableHead className="px-6 py-4 font-semibold">
                  Bootstrap
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-foreground">
              <TableRow>
                <TableCell className="px-6 py-4">Design System</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  Modern, Utility-first
                </TableCell>
                <TableCell className="px-6 py-4">
                  Classic, Component-based
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Customization</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  Highly customizable
                </TableCell>
                <TableCell className="px-6 py-4">Limited by default</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Dark Mode</TableCell>
                <TableCell className="bg-muted px-6 py-4">Built-in</TableCell>
                <TableCell className="px-6 py-4">
                  Requires extra setup
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">TypeScript Support</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  First-class
                </TableCell>
                <TableCell className="px-6 py-4">Partial</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Accessibility</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  Focus on a11y
                </TableCell>
                <TableCell className="px-6 py-4">Basic</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Component Count</TableCell>
                <TableCell className="bg-muted px-6 py-4">30+</TableCell>
                <TableCell className="px-6 py-4">25+</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">License</TableCell>
                <TableCell className="bg-muted px-6 py-4">MIT</TableCell>
                <TableCell className="px-6 py-4">MIT</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Premium Components</TableCell>
                <TableCell className="bg-muted px-6 py-4">Available</TableCell>
                <TableCell className="relative px-6 py-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-pointer underline decoration-dotted">
                        Not included
                      </span>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={8} className="max-w-xs">
                      <span className="mb-1 block font-semibold">
                        Premium Only
                      </span>
                      Some advanced components are only available in paid
                      versions or require third-party libraries.
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Figma Kit</TableCell>
                <TableCell className="bg-muted px-6 py-4">Yes</TableCell>
                <TableCell className="relative px-6 py-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-pointer text-muted-foreground underline decoration-dotted">
                        No
                      </span>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={8} className="max-w-xs">
                      <span className="mb-1 block font-semibold">
                        Figma Kit Unavailable
                      </span>
                      Bootstrap does not provide an official Figma kit, but
                      community kits may exist.
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export { Compare7 };
