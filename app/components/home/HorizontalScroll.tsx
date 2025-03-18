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
        setDim("-80%");
      } else if (width >= 768) {
        setDim("-200%");
      } else {
        setDim("-250%");
      }
    };

    updateDim();

    window.addEventListener("resize", updateDim);

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

  const FadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <div ref={containerRef} className="h-[400vh] bg-stone-900">
      <motion.h1
        variants={FadeInAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-white absolute top-5 sm:top-8 left-10 text-4xl sm:text-5xl font-bold"
      >
        Our brands
      </motion.h1>
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
