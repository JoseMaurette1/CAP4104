import React from "react";
import StyledText from "../_components/StyledText";
import Image from "next/image";
import Dude from "@/app/assets/Dude.jpeg";

const page = () => {
  const Joe = {
    name: "Joe",
    age: 30,
    interests: ["Hiking", "Photography", "Camping"],
    bio: "Joe is an outdoor enthusiast who loves filming his outdoor adventures.",
    goals:
      "Joe wants a website where he can post his adventures to keep them as a record without having to worry about social media.",
    painpts:
      "He dislikes social media and all the interactions that come with it and prefers just to be able to document his journeys and post pictures.",
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
          Persona 1: <StyledText>{Joe.name}</StyledText>
        </h1>
        <div className="mt-4 text-center">
          <h2 className="text-xl">Age: {Joe.age}</h2>
          <h3 className="mt-2 text-xl">Interests:</h3>
          <ul className="list-disc list-inside mt-2 text-center text-xl ">
            {Joe.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
          <div className="w-full max-w-4xl px-6">
            <p className="pt-4 text-gray-400 text-xl"> {Joe.bio}</p>
            <p className="pt-2 text-gray-400 text-xl"> {Joe.goals}</p>
            <p className="pt-2 text-gray-400 text-xl"> {Joe.painpts}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
