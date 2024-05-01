import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { poppinsFont } from "@/styles/fonts";
import { ChevronRight, Component } from "lucide-react";
import { Icons } from "@/components/icons";

/**
 * Home component that represents the main content of the homepage.
 * @returns {JSX.Element} The Home component.
 */
export default function Home(): JSX.Element {
  return (
    <div className="mb-4 flex flex-col gap-4 max-w-5xl mx-auto px-6 mt-4">
      <div className="flex justify-center items-center">
        <a
          href="/development"
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "flex items-center gap-2 text-secondary-foreground/80 ",
          )}
        >
          <Component size={16} />
          Development (Test Components)
          <ChevronRight size={16} />
        </a>
      </div>
      <div
        className={cn(
          "text-center w-full text-5xl font-semibold",
          poppinsFont.className,
        )}
      >
        NextJS Template
      </div>
      <div className="w-full flex items-center justify-center gap-2">
        <Button>Get Started</Button>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
        >
          <Image
            src={"https://github.com/blu3eee.png?size=1024"}
            height={1024}
            width={1024}
            alt="logo"
            className="object-fit h-full w-auto rounded-full"
          />
          Github
        </a>
      </div>
      <div className="bg-primary text-primary-foreground p-3 rounded-md">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse fugit
        nostrum sit voluptatum totam nihil omnis delectus dolorum voluptate
        ipsum exercitationem quidem reiciendis natus, asperiores repellat in,
        impedit dignissimos? Numquam.
      </div>
      <div className="flex justify-center items-center">
        <a
          href="/mdx"
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "flex items-center gap-2 text-secondary-foreground/80 ",
          )}
        >
          <Icons.fileText size={16} />
          Use MDX with NextJS
          <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}
