import React from "react";
import Chart from "@/app/assets/Chart.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h1 className="pb-2 font-bold text-white text-2xl">
          TrailTales Flowchart:
        </h1>
        <Image src={Chart} alt="FlowChart" width={800} height={300} />
      </div>
    </>
  );
};

export default page;
