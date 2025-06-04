"use client";

import { X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface Banner1Props {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  defaultVisible?: boolean;
}

const Banner1 = ({
  title = "Version 2.0 is now available!",
  description = "Check out all the",
  linkText = "new features",
  linkUrl = "#",
  defaultVisible = true,
}: Banner1Props) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="w-full border-b bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 text-center">
          <span className="text-sm">
            <span className="font-medium">{title}</span>{" "}
            <span className="text-muted-foreground">
              {description}{" "}
              <a
                href={linkUrl}
                className="underline underline-offset-4 hover:text-foreground"
                target="_blank"
              >
                {linkText}
              </a>
              .
            </span>
          </span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="-mr-2 h-8 w-8 flex-none"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export { Banner1 };
