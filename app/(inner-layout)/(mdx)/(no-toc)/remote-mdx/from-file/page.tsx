import { getAvailableMdxSlugs } from "@/hooks/get-mdx";
import { cn } from "@/lib/utils";
import { poppinsFont } from "@/styles/fonts";
import React from "react";
import MdxWithSlugs from "@/content/mdx-with-slugs.mdx";

const Page = (): JSX.Element => {
  const routes = getData();
  return (
    <div className="">
      <div className={cn("font-semibold text-xl", poppinsFont.className)}>
        Routes
      </div>
      <div className="flex flex-col gap-2">
        {routes.map((route, index) => (
          <a
            key={index}
            href={`/remote-mdx/from-file/projects/${route.join("/")}`}
            className="font-medium bg-secondary/80 text-secondary-foreground w-full px-4 py-2 rounded-md text-sm"
          >
            /remote-mdx/from-file/projects/{route.join("/")}
          </a>
        ))}
      </div>
      <div>
        <MdxWithSlugs />
      </div>
    </div>
  );
};

export default Page;

const getData = (): string[][] => {
  return getAvailableMdxSlugs(["mdx-examples"]).map((slugs) => slugs.slice(1));
};
