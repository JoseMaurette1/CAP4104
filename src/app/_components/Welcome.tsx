import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-row space-x-4 justify-center">
          <Image src={"/Prototype.png"} alt="pic" width={800} height={300} />
        </div>
      </div>
    </>
  );
};

export default Welcome;
