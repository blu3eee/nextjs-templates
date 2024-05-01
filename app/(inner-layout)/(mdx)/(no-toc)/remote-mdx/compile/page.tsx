import { useConvertMdxContent } from "@/hooks/convert-mdx";
import { cn } from "@/lib/utils";
import { poppinsFont } from "@/styles/fonts";
import React from "react";

/**
 * Renders page based on compiled MDX content with frontmatter.
 * @returns {JSX.Element} - A JSX element rendering the content or a 404 message.
 */
export default async function Page(): Promise<JSX.Element> {
  // Optionally provide a type for your frontmatter object
  const { content, frontmatter } = await useConvertMdxContent<{
    title: string;
    author: string;
  }>(
    `---
title: RSC Frontmatter Example
author: Khai Phuoc Nguyen (Jack)
---
## Hello World
This is from Server Components!
`,
  );
  return (
    <div className="flex flex-col gap-2 mt-2">
      <div className={cn("flex flex-col gap-2", poppinsFont.className)}>
        <span className="text-6xl font-bold text-info">
          {frontmatter.title}
        </span>
        <span className="text-foreground font-medium">
          <span className="text-foreground/80">Author:</span>{" "}
          {frontmatter.author}
        </span>
      </div>
      <div>{content}</div>
    </div>
  );
}
