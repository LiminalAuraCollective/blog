import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import React, { AnchorHTMLAttributes } from "react";

interface Props
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  className?: string;
  children?: React.ReactNode;
}

function NavigationLink({ href, className, children, ...rest }: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "mr-3 text-blue-700 hover:underline decoration-solid",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default React.memo(NavigationLink);
