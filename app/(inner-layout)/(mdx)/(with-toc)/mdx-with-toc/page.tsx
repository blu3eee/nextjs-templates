import { useGetMdxBySlugs } from "@/hooks/get-mdx";
import React from "react";
import ContentBox from "@/components/mdx-example/content-box";
import { DashboardTableOfContents } from "@/components/toc";

const MdxWithToc = async (): Promise<JSX.Element> => {
  const { content, toc } = await useGetMdxBySlugs(["example.mdx"], {
    ContentBox,
  });
  return (
    <div className="relative max-w-screen-xl py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px] min-w-0">
      <div className="mx-auto w-full min-w-0 px-4">
        <hr className="my-4 md:my-6" />
        {content}
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          {toc && <DashboardTableOfContents toc={toc} />}
        </div>
      </div>
    </div>
  );
};

export default MdxWithToc;
