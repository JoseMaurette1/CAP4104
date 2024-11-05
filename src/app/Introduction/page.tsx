import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      <div className="w-full max-w-4xl px-6">
        <h1 className="font-bold text-2xl text-center">
          TrailTales Introduction:
        </h1>
        <p>
          TrailTales is a web-based platform for outdoor enthusiasts who want to
          document their hiking and camping experiences through pictures and
          trip logs. Unlike social media platforms, TrailTales focuses on
          creating a personal, organized archive of hikes and camping trips,
          allowing users to upload images and detailed descriptions of trails,
          scenery, and camping experiences. The platform emphasizes simplicity
          and functionality without social media interactions like comments,
          likes, or follower counts.
        </p>

        <div className="flex flex-col items-center justify-center mt-4">
          <h2> Similar Products:</h2>
          <p>AllTrails</p>
          <p>Outdoor Project</p>
        </div>
      </div>
    </div>
  );
};

export default page;
