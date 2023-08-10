import React from "react";

export interface SiderbarProps {
  className?: string;
  children?: React.ReactElement;
}

function Sidebar({ className, children }: SiderbarProps) {
  return <section className={className}>{children}</section>;
}

export default Sidebar;
