import Link from "next/link";
import React from "react";

export default function SidebarContent() {
  const items = ["home", "content"];

  return (
    <ul className="text-white mt-10 p-4">
      {items.map((item, index) => (
        <Link href={`${item === "home" ? "/" : `/${item}`}`}>
          <li key={index}>{item}</li>
        </Link>
      ))}
    </ul>
  );
}
