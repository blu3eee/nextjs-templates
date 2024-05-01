import { cn, generateId } from "@/lib/utils";
import { rubikFont } from "@/styles/fonts";
import type { MDXComponents } from "mdx/types";
import React from "react";
import Content from "@/content/example.mdx";

const overrideComponents: MDXComponents = {
  h1: ({ children, className, ...props }) => (
    <h1
      id={generateId(String(children))}
      className={cn(
        "mt-8 scroll-m-20 text-6xl font-bold tracking-tight text-info",
        rubikFont.className,
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  ),
};

const Page = (): JSX.Element => {
  return <Content components={overrideComponents} />;
};

export default Page;
