import { useMDXComponents } from "@/mdx-components";
import { type TableOfContents, getTableOfContents } from "@/lib/toc";
import type { MDXComponents } from "mdx/types";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode, {
  type Options as RehypeOptions,
} from "rehype-pretty-code";
import type { Frontmatter } from "@/types/mdx";

export const rehypeOptions: RehypeOptions = {
  defaultLang: {
    block: "plaintext",
    inline: "plaintext",
  },
  filterMetaString: (string) => string.replace(/filename="[^"]*"/, ""),
  // See Options section below.
  // The default theme is github-dark-dimmed. Shiki has a bunch of [pre-packaged themes](https://shiki.style/themes#themes), which can be specified as a plain string
  theme: "one-dark-pro",
};

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
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          // @ts-expect-error pkg `unified` Pluggable/Pluggin type mismatching
          // more info: https://github.com/hashicorp/next-mdx-remote/issues/86
          [rehypePrettyCode, rehypeOptions],
        ],
      },
    },
    components: useMDXComponents({ ...components }),
  });
  const toc = await getTableOfContents(input);

  return { frontmatter, content, toc };
};
