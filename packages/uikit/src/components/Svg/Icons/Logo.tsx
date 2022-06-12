import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return <img src="images/gorilla-face.svg" alt="" style={{ height: "50px", width: "50px" }} {...props} />;
};

export default Icon;
