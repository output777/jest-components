import React from "react";

export interface ButtonProps {
  className?: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLElement>, callback?: () => void) => void;
}

export default function Button({ className, label, onClick }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
