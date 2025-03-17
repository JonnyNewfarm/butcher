import React from "react";
import ImgParallax from "./ImgParallax";
import HorizontalScroll from "./HorizontalScroll";

const ParallaxContainer = () => {
  return (
    <main className="relative h-[500vh]">
      <Section1 />
      <Section2 />
    </main>
  );
};

export default ParallaxContainer;

const Section1 = () => {
  return <HorizontalScroll />;
};

const Section2 = () => {
  return <ImgParallax />;
};

const Section3 = () => {
  return <ImgParallax />;
};
