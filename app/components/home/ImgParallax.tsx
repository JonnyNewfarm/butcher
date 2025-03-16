"use client";
import React, { useRef } from "react";
import para1 from "../../../public/parallax/para1.jpg";
import para2 from "../../../public/parallax/para2.jpg";
import para3 from "../../../public/parallax/para3.jpg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const ImgParallax = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    { img: para1, style: "h-[60vh] w-[50vh] z-[1]", value: 0 },

    {
      img: para2,
      style: "left-[57vw] top-[15vh] h-[40vh] w-[30vh] z-[2]",
      value: md,
    },

    {
      img: para3,
      style: "left-[27.5vw]  top-[40vh] h-[25vh] w-[20vh] z-[3]",
      value: lg,
    },
  ];

  return (
    <div ref={container} className="relative h-screen  bg-custom-color ">
      <div className="mt-20 absolute left-20 text-5xl font-bold">
        <h1>Lotano&apos;s</h1>
        <h1>new collection</h1>
      </div>

      <div className="flex w-full justify-center relative mt-[20vh]">
        {images.map((image, i) => {
          return (
            <motion.div
              style={{ y: image.value }}
              key={i}
              className={`absolute object-cover ${image.style}`}
            >
              <Image
                className="object-cover"
                fill
                placeholder="blur"
                alt="image"
                src={image.img}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ImgParallax;
