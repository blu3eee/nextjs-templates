"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

interface ItemProps {
  href: string;
  name: string;
}
const items: ItemProps[] = [
  {
    href: "/mdx",
    name: "Import MDX Content",
  },
  {
    href: "/mdx/mdx-page",
    name: "File based routing",
  },
  {
    href: "/mdx/using-imports",
    name: "Using Imports",
  },
  {
    href: "/mdx/local-styles",
    name: "Local styles",
  },
  {
    href: "/remote-mdx",
    name: "Remote MDX",
  },
  {
    href: "/remote-mdx/compile",
    name: "Compile MDX",
  },
  {
    href: "/remote-mdx/from-file",
    name: "Remote MDX with Slugs",
  },
];

/**
 * MDXLayout
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered within the layout.
 * @returns {JSX.Element} The Layout component.
 */
export default function MDXLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const path = usePathname();
  return (
    <div className="container flex-1">
      <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
          <div className="flex-none flex flex-col gap-1 p-2 h-full">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={cn(
                  "px-4 py-2 hover:bg-secondary/70 rounded-lg font-medium text-sm",
                  path === item.href &&
                    "bg-secondary/80 text-secondary-foreground",
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </aside>
        <div className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px] min-w-0">
          <div className="mx-auto w-full min-w-0">
            {/* <hr className="my-4 md:my-6" /> */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
