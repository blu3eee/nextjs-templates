"use client";

import * as React from "react";

import type { TableOfContents } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

interface TocProps {
  toc: TableOfContents;
}

/**
 * Dashboard Table of Contents component that displays links to sections based on the TOC.
 * @param {TocProps} props - Props containing the table of contents.
 * @returns {React.ReactElement | null} - A React component for the TOC or null if no items.
 */
export function DashboardTableOfContents({
  toc,
}: TocProps): React.ReactElement | null {
  const itemIds = React.useMemo(
    () =>
      toc.items
        ? toc.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc],
  );
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!toc?.items) {
    return null;
  }

  return mounted ? (
    <div className="space-y-2">
      <p className="font-medium text-foreground/50">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  ) : null;
}

/**
 * Custom hook to determine the currently active item based on visibility within the viewport.
 * @param {Array<string | undefined>} itemIds - List of item IDs to observe.
 * @returns {string} - The ID of the currently active item.
 */
function useActiveItem(itemIds: Array<string | undefined>): string {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );

    itemIds?.forEach((id) => {
      if (!id) {
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return;
        }

        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TableOfContents;
  level?: number;
  activeItem?: string | null;
}

/**
 * Recursively renders a tree of items as nested lists.
 * @param {TreeProps} props - Props for rendering the tree, including the current level and active item.
 * @returns {React.ReactElement | null} - A React component for the nested list or null if no items.
 */
function Tree({
  tree,
  level = 1,
  activeItem,
}: TreeProps): React.ReactElement | null {
  return tree?.items?.length && level < 3 ? (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <a
              href={item.url}
              className={cn(
                "inline-block no-underline",
                item.url === `#${activeItem}`
                  ? "font-medium text-primary"
                  : "text-sm text-muted-foreground",
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
