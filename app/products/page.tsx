export const revalidate = 0;
import getProducts, { IProductParams } from "@/actions/getProducts";
import ProductsCard from "@/app/components/products/ProductsCard";
import Container from "../components/Container";
import NullData from "../components/nullData";

import FilterProductsMenu from "../components/products/FilterProductsMenu";
import FilterProductsMobile from "../components/products/FilterProductsMobile";

interface HomeProps {
  searchParams: IProductParams;
}

const ProductsPage = async ({ searchParams }: HomeProps) => {
  const products = await getProducts(searchParams);

  if (products.length == 0) {
    return <NullData title="Oops! No products found." />;
  }

  return (
    <>
      <div className="flex justify-center items-center text-lg font-semibold text-white bg-stone-600 py-1">
        Free shipping in February
      </div>

      <div className="flex  items-center  text-lg font-semibold h-12  bg-[#e4e4e1] py-1">
        <div className="absolute left-[15vw] text-stone-900 items-center flex gap-x-5">
          <h1 className="flex items-center">{searchParams.gender} </h1>

          <h1 className="flex items-center">{searchParams.category} </h1>
          <h1>{searchParams.brand}</h1>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-52 flex sm:justify-center   bg-[#e4e4e1] sm:h-screen">
          <div className="sm:hidden block ">
            <FilterProductsMobile />
          </div>
          <div className="hidden sm:block">
            <FilterProductsMenu />
          </div>
        </div>
        <div className="">
          <div
            style={{ scrollbarWidth: "thin" }}
            className="grid grid-cols-2  shadow-inner overflow-y-auto h-screen scroll-smooth  shadow-stone-300 border-t-[1px] px-6 border-stone-400 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-8"
          >
            {products
              .sort((a, b) => {
                if (searchParams.price === "high") {
                  return (a.price! - b.price!) as any;
                }
                if (searchParams.price === "Low") {
                  return (b.price! - a.price!) as any;
                }
                if (searchParams.price === "") {
                  return products;
                }
              })
              .map((product: any) => {
                return <ProductsCard key={product.id} data={product} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
