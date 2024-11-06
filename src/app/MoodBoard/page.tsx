import React from "react";
import Image from "next/image";
import MoodBoard from "@/app/assets/MoodBoard.jpg";
import Mood2 from "@/app/assets/Mood2.png";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="pb-8  font-bold text-white text-2xl">
          TrailTales MoodBoard:
        </h1>
        <div className="flex flex-row space-x-4 justify-center">
          <Image src={MoodBoard} alt="pic" width={800} height={200} />
          <Image src={Mood2} alt="pic" width={800} height={300} />
        </div>
      </div>
    </>
  );
};

export default page;
