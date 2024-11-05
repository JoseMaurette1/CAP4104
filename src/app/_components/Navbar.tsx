import React from "react";
import Link from "next/link";

const links = [
  { href: "./pages/Introduction", label: "Introduction" },
  { href: "./pages/Persona1", label: "Persona 1" },
  { href: "./pages/Persona2", label: "Persona 2" },
  { href: "./pages/Persona3", label: "Persona 3" },
  { href: "./pages/Scenario1", label: "Scenario 1" },
  { href: "./pages/Scenario2", label: "Scenario 2" },
  { href: "./pages/FlowChart", label: "Flow Chart" },
  { href: "./pages/WireFrame", label: "WireFrame" },
  { href: "./pages/GUIS", label: "GUI" },
  { href: "./pages/Bibliography", label: "Bibliography" },
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
