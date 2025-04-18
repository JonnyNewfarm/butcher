"use client";

import { useCallback, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import Button from "../Button";
import ProductDetailsImg from "./ProductDetailsImg";
import SetQuantity from "./SetQuantity";
import { useCart } from "@/hooks/useProductCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";
import SetColor from "./SetColor";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

interface ProductDetailProps {
  product: any;
}

export type ProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  selectedImage: selectedImageType;
  quantity: number;
  price: number;
  size: string;
  brand: string;
};

export type selectedImageType = {
  image: string;
  color: string;
  colorCode: string;
};

const SORT_OPTIONS = [
  { name: "Small", value: "small" },
  { name: "Medium", value: "medium" },
  { name: "Large", value: "large" },
  { name: "XL", value: "xl" },
  { name: "XXL", value: "xxl" },
] as const;

const HR = () => {
  return <hr className="w-[80%] my-2" />;
};
const ProductDetails = ({ product }: ProductDetailProps) => {
  const { handleAddToCart, cartProducts } = useCart();
  const [alreadyInCart, setAlreadyInCart] = useState(false);
  const [filter, setFilter] = useState({
    sort: "small",
  });

  const router = useRouter();

  const [cartProduct, setCartProduct] = useState<ProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    selectedImage: { ...product.images[0] },
    quantity: 1,
    price: product.price,
    size: filter.sort,
    brand: product.brand,
  });

  console.log(filter.sort);

  useEffect(() => {
    setAlreadyInCart(false);
    if (cartProducts) {
      const index = cartProducts.findIndex((item) => item.id === product.id);
      if (index > -1) {
        setAlreadyInCart(true);
      }
    }
  }, [cartProducts]);

  const handleColorSelect = useCallback(
    (value: selectedImageType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImage: value };
      });
    },
    [cartProduct.selectedImage]
  );

  const handleSize = useCallback(
    (value: string) => {
      setCartProduct((prev) => {
        return { ...prev, size: value };
      });
    },
    [cartProduct.size]
  );

  const handleImageSelector = useCallback(
    (value: selectedImageType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImage: value };
      });
    },
    [cartProduct.selectedImage]
  );

  const handleCartDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity-- };
    });
  }, [cartProduct]);

  const handleCartIncrease = useCallback(() => {
    if (cartProduct.quantity === 25) {
      return;
    }
    setCartProduct((next) => {
      return { ...next, quantity: next.quantity++ };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:mt-10">
      <ProductDetailsImg
        handleImage={handleImageSelector}
        cartProduct={cartProduct}
        product={product}
      />
      <div className="bg-stone-200/50 p-5 rounded-xl">
        <h2 className="text-4xl font-bold ">{product.name}</h2>
        <div className="flex gap-2 items-center"></div>
        <HR />
        <div className="text-justify">{product.description}</div>
        <HR />
        <div className="flex gap-1">
          <span className="font-semibold">Category:</span>
          <p>{product.category}</p>
        </div>
        <div className="flex gap-1">
          <span className="font-semibold">Brand:</span>
          <p>{product.brand}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Inventory:</p>
          <div className={product.inStock ? "text-teal-600" : "text-red-600"}>
            {product.inStock ? "In stock" : "Out of stock"}
          </div>
        </div>

        <HR />
        {alreadyInCart ? (
          <>
            <p className="mb-2 flex items-center gap-1">
              <MdCheckCircle />
              <span>Product already add to cart</span>
            </p>
            <div>
              <button
                className="bg-stone-800 rounded-lg hover:opacity-95 text-white text-nowrap text- w-full pt-3 pb-3"
                onClick={() => router.push("/cart")}
              >
                View cart
              </button>
            </div>
          </>
        ) : (
          <>
            <SetColor
              cartProduct={cartProduct}
              images={product.images}
              handleColorSelect={handleColorSelect}
            />
            <SetQuantity
              cartProduct={cartProduct}
              handleCartDecrease={handleCartDecrease}
              handleCartIncrease={handleCartIncrease}
            />
            <HR />

            <DropdownMenu>
              <DropdownMenuTrigger className="flex font-semibold">
                Size
                <IoIosArrowDown className="mt-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white" align="start">
                {SORT_OPTIONS.map((option) => (
                  <button
                    className={cn("text-left w-full px-4 py-2 text-sm", {
                      "text-stone-900 bg-stone-200 ":
                        option.value === filter.sort,
                      "": option.value !== filter.sort,
                    })}
                    key={option.name}
                    onClick={() => {
                      setFilter((prev) => ({
                        ...prev,
                        sort: option.value,
                      }));
                      handleSize(option.value);
                    }}
                  >
                    {option.name}
                  </button>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <p className="text-sm">{filter.sort}</p>

            <div className="justify-center flex mt-6">
              <button
                className="bg-stone-800 hover:opacity-95 text-white text-nowrap text-lg w-full pt-3 pb-3 rounded-lg"
                onClick={() => handleAddToCart(cartProduct)}
              >
                Add to cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
