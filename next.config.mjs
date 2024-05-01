import remarkGfm from "remark-gfm";
import nextMdx from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const rehypeOptions = {
  defaultLang: {
    block: "plaintext",
    inline: "plaintext",
  },
  filterMetaString: (string) => string.replace(/filename="[^"]*"/, ""),
  // See Options section below.
  // The default theme is github-dark-dimmed. Shiki has a bunch of [pre-packaged themes](https://shiki.style/themes#themes), which can be specified as a plain string
  theme: "one-dark-pro",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

/**
 * See [Configuring MDX + NextJS](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
 *
 * Use [MDX](https://github.com/mdx-js/mdx) with [Next.js](https://github.com/vercel/next.js)
 */
const withMDX = nextMdx({
  extension: /\.mdx?$/,
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
