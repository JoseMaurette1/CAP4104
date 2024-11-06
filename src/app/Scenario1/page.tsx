import React from "react";
import StyledText from "../_components/StyledText";
import Image from "next/image";
import Dude from "@/app/assets/Dude.jpeg";

const page = () => {
  const Joe = {
    name: "Joe",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        className="mb-10 border rounded"
        src={Dude}
        alt="pic"
        width={300}
        height={300}
      ></Image>
      <div className="border border-2 p-4 hover:border-dashed  transform transition-transform duration-300 hover:translate-y-[-4px]">
        <h1 className="text-center">
          Scenario 1: <StyledText>{Joe.name}</StyledText>
        </h1>
        <div className="mt-4 text-center">
          <div className="w-full max-w-4xl px-6">
            <p className="pt-4 text-gray-400 text-xl">
              After a long weekend of hiking multiple trails, Joe logs onto
              TrailTales to tell his Tale about his Trails.
            </p>
            <p className="pt-2 text-gray-400 text-xl">
              Joe uploads photos and adds notes and categorizes his hikes by
              difficulty for reference in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
