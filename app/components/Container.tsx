import React from "react";
interface ContainerProps {
  children: React.ReactNode;
}
const Container = async ({ children }: ContainerProps) => {
  return (
    <div
      className="max-w-[1920px]
  mx-auto
  xl:px-20
  md:2
  px-4


  "
    >
      {children}
    </div>
  );
};

export default Container;
