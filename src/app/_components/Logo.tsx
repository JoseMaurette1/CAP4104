import React from "react";
import Link from "next/link";

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
      <div className="absolute top-0 right-0">
        {/* Add right corner logo later */}
      </div>
    </>
  );
};

export default Logo;
