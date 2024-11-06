import React from "react";
import StyledText from "../_components/StyledText";

const page = () => {
  const Beth = {
    name: "Beth",
    age: 54,
    interests: ["Nature Walks", "Photography", "Camping"],
    bio: "Beth is a retired woman in her mid 50's who likes to spend most of her time with her husband exploring different nature trails. She often plans getaways to national parks with her husband.",
    goals:
      "Beth wants to create memories that last a lifetime so her children and family can look back on.",
    painpts:
      "Beth struggles to keep her pictures organized. Beth does not like social media and only wants a website where she can keep her pictures and store her families memories.",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="border border-2 p-4 hover:border-dashed  transform transition-transform duration-300 hover:translate-y-[-4px]">
        <h1 className="text-center">
          Persona 1: <StyledText>{Beth.name}</StyledText>
        </h1>
        <div className="mt-4 text-center">
          <h2 className="text-xl">Age: {Beth.age}</h2>
          <h3 className="mt-2 text-xl">Interests:</h3>
          <ul className="list-disc list-inside mt-2 text-center text-xl ">
            {Beth.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
          <p className="pt-4 text-gray-400 text-xl"> {Beth.bio}</p>
          <p className="pt-2 text-gray-400 text-xl"> {Beth.goals}</p>
          <p className="pt-2 text-gray-400 text-xl"> {Beth.painpts}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
