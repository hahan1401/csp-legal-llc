"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

const NAV_LINKS = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/ourfirm",
    label: "OUR FIRM",
  },
  {
    url: "/expertise",
    label: "OUR AREAS OF EXPERTISE",
  },
  {
    url: "/contact",
    label: "Contact",
  },
];

const NavLink = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <div className="flex gap-[1px] w-full">
      {NAV_LINKS.map((item) => (
        <Link
          key={item.url}
          className={`flex-1 text-white px-[15px] py-[10px] text-sm text-center uppercase ${
            item.url.includes(segment!) ? "bg-active" : "bg-outer-background"
          }`}
          href={item.url}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLink;
