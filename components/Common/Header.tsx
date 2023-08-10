import React, { ReactNode } from "react";

export interface HeaderProps {
  className?: string;
  children?: ReactNode;
}

export default function Header({ className, children }: HeaderProps) {
  return <header className={className}>{children}</header>;
}
