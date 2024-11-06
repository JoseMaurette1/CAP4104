import React, { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

const GradientText = ({ children }: TextProps) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
      {children}
    </span>
  );
};

export default GradientText;
