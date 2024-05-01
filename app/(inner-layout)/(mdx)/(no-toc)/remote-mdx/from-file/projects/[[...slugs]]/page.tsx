import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getAvailableMdxSlugs, useGetMdxBySlugs } from "@/hooks/get-mdx";
import { cn } from "@/lib/utils";
import type { Frontmatter } from "@/types/mdx";
import { ChevronLeft } from "lucide-react";

/**
 * Generates static params for static site generation.
 * @returns {Array<object>} - An array of params for each static page.
 */
export function generateStaticParams(): Array<{ slugs: string[] }> {
  const slugsArray = getAvailableMdxSlugs(["mdx-examples"]);

  return slugsArray.map((slugs) => ({
    slugs,
  }));
}

const useGetContent = async (
  slugs: string[],
): Promise<{
  frontmatter: Frontmatter;
  content: React.ReactNode;
} | null> => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontmatter, content } = await useGetMdxBySlugs<{
      title?: string;
      author?: string;
    }>(["mdx-examples"].concat(slugs ?? []));
    return { frontmatter, content };
  } catch {
    return null;
  }
};

interface PageProps {
  params: {
    slugs: string[];
  };
}
const Page: React.FC<PageProps> = async ({ params }): Promise<JSX.Element> => {
  const data = await useGetContent(params.slugs);
  if (!data) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-row h-24 gap-8 items-center justify-center px-6 py-3 border rounded-lg">
          <h2 className="text-3xl">404</h2>
          <Separator orientation="vertical" />
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            Could not find requested resource
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between gap-4">
        <a
          href="/remote-mdx/from-file"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "gap-2",
          )}
        >
          <ChevronLeft size={20} />
          Back
        </a>
      </div>
      <div>{data.content}</div>
    </div>
  );
};
export default Page;
