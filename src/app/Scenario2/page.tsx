import React from "react";
import StyledText from "../_components/StyledText";
import Image from "next/image";
import Girl from "@/app/assets/Girl.jpeg";

const page = () => {
  const Beth = {
    name: "Beth",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        className="mb-10 border rounded"
        src={Girl}
        alt="pic"
        width={300}
        height={300}
      ></Image>
      <div className="border border-2 p-4 hover:border-dashed  transform transition-transform duration-300 hover:translate-y-[-4px]">
        <h1 className="text-center">
          Scenario 2: <StyledText>{Beth.name}</StyledText>
        </h1>
        <div className="mt-4 text-center">
          <div className="w-full max-w-4xl px-6">
            <p className="pt-4 text-gray-400 text-xl">
              After a long getaway weekend with her husband, Beth logs onto
              TrailTales with her family and uploads her favorite photos and
              adds notes about her experiences.
            </p>
            <p className="pt-2 text-gray-400 text-xl">
              She categorizes each trip and can select the ones that she
              classifies as family to show her children.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
