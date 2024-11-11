import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import Button from "@mui/material/Button";

const Logo = () => {
  return (
    <>
      <div className="absolute top-5 left-5">
        <Link href={"/"}>
          <h1 className="font-serif font-mono text-xl border-double border-gray-400 border-4 p-2 rounded hover:border-solid hover:border-white transform transition-transform duration-300 hover:translate-y-[-4px]">
            TrailTales
          </h1>
        </Link>
        {/* Left Corner Logo */}
      </div>
      <div className="absolute top-5 right-5">
        <Button
          href="https://github.com/JoseMaurette1/CAP4104"
          className="text-white transform transition-transform duration-300 hover:translate-y-[-4px]"
        >
          <GitHubIcon />
        </Button>
      </div>
    </>
  );
};

export default Logo;
