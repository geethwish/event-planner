/// <reference types="nativewind/types" />

// Declare png as a module so that we can import it in our components
declare module "*.png" {
  const value: any;
  export default value;
}
