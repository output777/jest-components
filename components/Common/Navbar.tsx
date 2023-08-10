import React from "react";

export interface NavbarProps {
  className?: string;
  children?: React.ReactElement;
}

function Navbar({ className, children }: NavbarProps) {
  return <section className={className}>{children}</section>;
}

export default Navbar;
