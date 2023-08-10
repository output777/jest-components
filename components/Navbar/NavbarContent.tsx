import Link from "next/link";
import React from "react";

export default function NavbarContent() {
  const items = ["home", "content"];

  return (
    <ul className="flex gap-4 justify-end items-center h-full text-white">
      {items.map((item, index) => (
        <Link href={`${item === "home" ? "/" : `/${item}`}`}>
          <li key={index}>{item}</li>
        </Link>
      ))}
    </ul>
  );
}
