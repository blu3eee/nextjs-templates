import React from "react";

/**
 * MDXLayout
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered within the layout.
 * @returns {JSX.Element} The Layout component.
 */
export default function NoTocLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px] min-w-0">
      <div className="mx-auto w-full min-w-0">
        {/* <hr className="my-4 md:my-6" /> */}
        {children}
      </div>
    </div>
  );
}
