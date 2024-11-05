import React from "react";
import StyledText from "../_components/StyledText";
import Image from "next/image";
import TT from "@/app/assets/TT.png";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        className="mb-4 border-4 border-white rounded"
        src={TT}
        alt="Logo"
        width={400}
        height={300}
      ></Image>
      <div className="w-full max-w-4xl px-6">
        <p className="pt-4 text-xl">
          <StyledText>TrailTales</StyledText> is a web-based platform for
          outdoor enthusiasts who want to document their hiking and camping
          experiences through pictures and trip logs. Unlike social media
          platforms, TrailTales focuses on creating a personal, organized
          archive of hikes and camping trips, allowing users to upload images
          and detailed descriptions of trails, scenery, and camping experiences.
          The platform emphasizes simplicity and functionality without social
          media interactions like comments, likes, or follower counts.
        </p>
      </div>
    </div>
  );
};

export default page;
