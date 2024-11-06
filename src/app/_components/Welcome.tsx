import React from "react";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import GradientText from "./GradientText";
import StyledText from "./StyledText";
const Welcome = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-bold text-3xl p-2">
          Welcome to <GradientText>TrailTales</GradientText>
        </h1>
        <h2 className="font-bold text-xl  p-2">
          Share and Document your Camping and Hiking experiences with
          TrailTales.
        </h2>
        <p className="font-bold text-gray-400 p-2">
          Upload images, detailed descriptions and comments without the need of{" "}
          <StyledText>Social Media.</StyledText>
        </p>
        <div className="pt-8">
          <Button
            variant="contained"
            size="large"
            className="bg-gray-800 hover:bg-gray-900"
            href="/Introduction"
            endIcon={<KeyboardDoubleArrowRightIcon />}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
