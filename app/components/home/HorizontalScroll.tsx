"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ImgContainer from "./ImgContainer";
import scroll1 from "../../../public/horizontalScroll/scroll1.jpeg";
import scroll2 from "../../../public/horizontalScroll/scroll2.jpg";
import scroll3 from "../../../public/horizontalScroll/scroll3.jpg";
import scroll4 from "../../../public/horizontalScroll/scroll4.jpg";
import scroll5 from "../../../public/horizontalScroll/scroll5.jpg";
import scroll6 from "../../../public/horizontalScroll/scroll6.jpg";

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const [dim, setDim] = useState("");

  useEffect(() => {
    const updateDim = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setDim("-80%"); // Large screens (1024px and above)
      } else if (width >= 768) {
        setDim("-200%"); // Medium screens (768px to 1023px)
      } else {
        setDim("-350%"); // Small screens (below 768px)
      }
    };

    // Initial update
    updateDim();

    // Run on window resize
    window.addEventListener("resize", updateDim);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", updateDim);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  console.log(dim);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", dim]);

  const images = [
    { src: scroll1, title: "Dormo" },
    { src: scroll2, title: "Domani" },
    { src: scroll3, title: "Lunettes" },
    { src: scroll4, title: "Pomeriggio" },
    { src: scroll5, title: "Lontano" },
    { src: scroll6, title: "Qualcuno" },
  ];

  return (
    <div ref={containerRef} className="h-[400vh] bg-stone-900">
      <div className="h-screen  overflow-hidden sticky top-0 flex justify-start items-center p-6">
        <motion.div style={{ x }} className="flex gap-x-8">
          {images.map((image, i) => (
            <div key={i} className="shrink-0">
              <ImgContainer title={image.title} src={image.src} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
