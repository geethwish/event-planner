/// <reference types="nativewind/types" />

// Declare png as a module so that we can import it in our components
declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  import React from "react";

  import { SvgProps } from "react-native-svg";

  const content: React.FC<SvgProps>;

  export default content;
}
