import React from "react";
import wireframe from "@/app/assets/wireframe.png";
import Image from "next/image";
import GridOnIcon from "@mui/icons-material/GridOn";
import Box from "@mui/material/Box";
import SettingsIcon from "@mui/icons-material/Settings";
import TerrainIcon from "@mui/icons-material/Terrain";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExploreIcon from "@mui/icons-material/Explore";
import CommentIcon from "@mui/icons-material/Comment";
import HikingIcon from "@mui/icons-material/Hiking";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const page = () => {
  const icons = [
    { id: "settings", icon: <SettingsIcon /> },
    { id: "grid", icon: <GridOnIcon /> },
    { id: "tips", icon: <TipsAndUpdatesIcon /> },
    { id: "terrain", icon: <TerrainIcon /> },
    { id: "hiking", icon: <HikingIcon /> },
    { id: "comment", icon: <CommentIcon /> },
    { id: "bookmark", icon: <BookmarkIcon /> },
    { id: "camera", icon: <CameraAltIcon /> },
    { id: "account", icon: <AccountBoxIcon /> },
    { id: "back", icon: <ArrowBackIcon /> },
    { id: "explore", icon: <ExploreIcon /> },
  ];
  const colors = [
    "#582F03",
    "#7F4F24",
    "#936639",
    "#C2C5AA",
    "#A4AC86",
    "#656D4A",
    "#414833",
    "#333D29",
  ];
  return (
    <div className="min-h-screen flex items-center flex-col justify-center">
      <h1 className="font-bold p-10">Example Wire Frame:</h1>
      <Image src={wireframe} alt="pic" height={1000} width={1000} />
      <h1 className="font-bold p-10">
        Icons that will be used throughout the website:{" "}
      </h1>
      <div className="flex flex-row gap-4">
        {icons.map(({ id, icon }) => (
          <div key={id}>{icon}</div>
        ))}
      </div>
      <h1 className="font-bold p-10 text-center">
        Theme: Explore and Share your adventure
      </h1>
      <h1 className="font-bold pb-5">Sample Color Palette: </h1>
      <div className="flex flex-row gap-4 pb-10 ">
        {colors.map((colors, index) => (
          <Box
            className=" transform transition-transform duration-300 hover:translate-y-[-4px]"
            key={index}
            sx={{ height: 100, width: 100, bgcolor: colors }}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
