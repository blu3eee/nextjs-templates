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
    <div className="grow flex">
      <div className="flex-none flex flex-col gap-1 bg-secondary/50 p-2">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={cn(
              "px-4 py-2 hover:bg-black/20 rounded-lg font-medium text-sm",
              path === item.href && "bg-black/80",
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="grow flex p-2">{children}</div>
    </div>
  );
}
