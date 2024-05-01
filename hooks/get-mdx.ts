import fs from "fs";
import path from "path";
import type { MDXComponents } from "mdx/types";
import type { Frontmatter } from "@/types/mdx";
import { type TableOfContents } from "@/lib/toc";
import { useConvertMdxContent } from "./convert-mdx";

const rootDirectory = path.join(process.cwd(), "content");

export const useGetMdxBySlugs = async <T extends Frontmatter = Frontmatter>(
  slugs: string[],
  components?: MDXComponents,
): Promise<{
  frontmatter: T;
  content: React.ReactNode;
  toc: TableOfContents;
}> => {
  const lastSlug = slugs.at(-1) ?? "";
  const realSlug = lastSlug.replace(/\.mdx$/, "");
  let filePath = path.join(
    rootDirectory,
    ...slugs.slice(0, -1),
    `${realSlug}.mdx`,
  );

  if (!fs.existsSync(filePath)) {
    filePath = path.join(rootDirectory, ...slugs, `index.mdx`);
    if (!fs.existsSync(filePath)) {
      throw new Error(
        `Could not find MDX file for the given slugs: ${slugs.join("/")}`,
      );
    }
  }

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  return await useConvertMdxContent(fileContent, components);
};

/**
 * Retrieves an array of available slug paths based on the .mdx and .md files in the specified directory.
 * @param {string[]} slugs - An array of strings representing the directory path.
 * @returns {string[][]} An array of available slug paths, where each inner array represents a single slug path.
 */
export const getAvailableMdxSlugs = (slugs: string[] = []): string[][] => {
  const directoryPath = path.join(rootDirectory, ...slugs);

  try {
    const files = fs.readdirSync(directoryPath);

    const availableSlugs = files.flatMap((file) => {
      const filePath = path.join(directoryPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        const nestedSlugs = getAvailableMdxSlugs([...slugs, file]);
        return nestedSlugs;
      } else {
        return [[...slugs, file]];
      }
    });

    return availableSlugs;
  } catch (error) {
    return [];
  }
};
