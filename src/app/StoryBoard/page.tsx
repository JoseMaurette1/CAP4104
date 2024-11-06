import React from "react";
import Image from "next/image";
import StoryBoard from "@/app/assets/StoryBoard.jpg";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="pb-2 font-bold text-white text-2xl">
        TrailTales StoryBoard:
      </h1>
      <Image src={StoryBoard} alt="pic" width={800} height={300} />
    </div>
  );
};

export default page;
