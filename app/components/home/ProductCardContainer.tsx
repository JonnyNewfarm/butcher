"use client";
import React from "react";
import { animate, motion, useScroll, useTransform } from "framer-motion";
import ProductsCard from "../products/ProductsCard";

interface ProductCardContainerProps {
  products: object[];
}

const ProductCardContainer = ({ products }: ProductCardContainerProps) => {
  const FadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.05 * index,
        },
      };
    },
  };

  return (
    <div className="py-5 border-t-[1px] bg-custom-color w-full rounded-xl">
      <h1 className="font-semibold text-xl">By Dormo</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 p-6 rounded-xl lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-6  w-full">
        {products.slice(0, 6).map((product: any, index) => {
          return (
            <motion.div
              variants={FadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              key={index}
            >
              {" "}
              <ProductsCard key={product.id} data={product} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCardContainer;
