import React from "react";
import { Heading } from "@pancakeswap/uikit";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <>
      <img src="images/gorilla-face.svg" alt="" style={{ height: "50px", width: "50px" }} {...props} />
      <Heading {...props}>MonkeySwap</Heading>
    </>
  );
};

export default React.memo(Logo);
