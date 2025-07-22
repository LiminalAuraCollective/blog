import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes } from "react";

interface Props
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  className?: string;
  children?: React.ReactNode;
}

function AnchorLink({ href, className, children, ...rest }: Props) {
  return (
    <Link
      {...rest}
      href={href}
      className={cn("mr-3 text-[#f02e97] hover:underline decoration-solid", className)}
    >
      {children}
    </Link>
  );
}

export default AnchorLink;
