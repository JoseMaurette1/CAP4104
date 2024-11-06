import React from "react";
import Link from "next/link";

const links = [
  { href: "/Introduction", label: "Introduction" },
  { href: "/Persona1", label: "Persona 1" },
  { href: "/Persona2", label: "Persona 2" },
  { href: "/Scenario1", label: "Scenario 1" },
  { href: "/Scenario2", label: "Scenario 2" },
  { href: "/FlowChart", label: "Flow Chart" },
  { href: "/WireFrame", label: "WireFrame" },
  { href: "/StoryBoard", label: "StoryBoard" },
  { href: "/MoodBoard", label: "MoodBoard" },
];
export default function Navbar() {
  return (
    <div className="text-gray-500 space-x-4 flex justify-center pt-10">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="hover:text-white transform transition-transform duration-300 hover:translate-y-[-4px]"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
