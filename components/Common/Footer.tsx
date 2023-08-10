import React, { ReactNode } from "react";

export interface FooterProps {
  className: string;
  children?: ReactNode;
}

function Footer({ className, children }: FooterProps) {
  return <footer className={className}>{children}</footer>;
}

export default Footer;
