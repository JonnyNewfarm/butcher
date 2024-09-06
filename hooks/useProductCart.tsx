"use client";
import { ProductType } from "@/app/components/products/ProductDetails";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type ProductCartContextType = {
  totalQuantity: number;
  totalAmount: number;
  cartProducts: ProductType[] | null;
  handleAddToCart: (product: ProductType) => void;
  handleRemoveFromCart: (product: ProductType) => void;
  handleCartIncrease: (product: ProductType) => void;
  handleCartDecrease: (product: ProductType) => void;
  handleClearCart: () => void;
};

export const ProductCartContext = createContext<ProductCartContextType | null>(
  null
);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState<ProductType[] | null>(null);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const cartItems: any = localStorage.getItem("cartItems");
    const products: ProductType[] | null = JSON.parse(cartItems);
    setCartProducts(products);
  }, []);

  useEffect(() => {
    const getTotal = () => {
      if (cartProducts) {
        const { total, quantity } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;

            acc.total += itemTotal;
            acc.quantity += item.quantity;
            return acc;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        setTotalQuantity(quantity);
        setTotalAmount(total);
      }
    };
    getTotal();
  }, [cartProducts]);

  const handleAddToCart = useCallback((product: ProductType) => {
    setCartProducts((prev) => {
      let updatedCart;
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const handleRemoveFromCart = useCallback(
    (product: ProductType) => {
      if (cartProducts) {
        const filterProducts = cartProducts.filter((item) => {
          return item.id !== product.id;
        });

        setCartProducts(filterProducts);
        localStorage.setItem("cartItems", JSON.stringify(filterProducts));
      }
    },
    [cartProducts]
  );

  const handleCartIncrease = useCallback(
    (product: ProductType) => {
      let updatedCart;
      if (product.quantity === 99) {
        return <div>Maximum amount reached</div>;
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const index = cartProducts.findIndex((item) => item.id === product.id);
        if (index > -1) {
          updatedCart[index].quantity = ++updatedCart[index].quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleCartDecrease = useCallback(
    (product: ProductType) => {
      let updatedCart;
      if (product.quantity === 1) {
        return <div>Maximum amount reached</div>;
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const index = cartProducts.findIndex((item) => item.id === product.id);
        if (index > -1) {
          updatedCart[index].quantity = --updatedCart[index].quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setTotalQuantity(0);
    localStorage.setItem("cartItems", JSON.stringify(null));
  }, [cartProducts]);

  const cartValue = {
    totalQuantity,
    totalAmount,
    cartProducts,
    handleAddToCart,
    handleRemoveFromCart,
    handleCartIncrease,
    handleCartDecrease,
    handleClearCart,
  };

  return <ProductCartContext.Provider value={cartValue} {...props} />;
};

export const useCart = () => {
  const context = useContext(ProductCartContext);

  if (context === null) {
    throw new Error("usecart does not work outside the cartContextProvider");
  }

  return context;
};
