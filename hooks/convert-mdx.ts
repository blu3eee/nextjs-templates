import { useMDXComponents } from "@/mdx-components";
import { type TableOfContents, getTableOfContents } from "@/lib/toc";
import type { MDXComponents } from "mdx/types";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
type Frontmatter = Record<string, unknown>;

export const useConvertMdxContent = async <T extends Frontmatter = Frontmatter>(
  input: string,
  components?: MDXComponents,
): Promise<{
  frontmatter: T;
  content: React.ReactNode;
  toc: TableOfContents;
}> => {
  const { frontmatter, content } = await compileMDX<T>({
    source: input,
    options: {
      parseFrontmatter: true,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
    components: useMDXComponents({ ...components }),
  });
  const toc = await getTableOfContents(input);

  return { frontmatter, content, toc };
};
