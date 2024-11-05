import React, { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

const StyledText = ({ children }: TextProps) => {
  return (
    <span className="font-bold text-xl font-serif text-blue-500">
      {children}
    </span>
  );
};

export default StyledText;
