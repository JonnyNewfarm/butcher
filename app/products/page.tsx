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
      <div className="text-center bg-stone-800 text-custom-color">
        <h1>Christmas discount - 3 for 2 on all products</h1>
      </div>
      <Container>
        <div className="sticky">
          <div className="flex flex-row mt-8">
            <div className="sticky z-10 border-stone-400 border-r-[0.5px]">
              <FilterProductsMenu />
            </div>
            <div className="w-full">
              {!searchParams.brand ? (
                <div className="flex flex-row justify-between">
                  <span className="pl-3 ">{searchParams.category}</span>

                  <FilterProductsMobile />
                </div>
              ) : (
                <div className="flex flex-row justify-between">
                  <span className="pl-3">{searchParams.brand}</span>
                  <FilterProductsMobile />
                </div>
              )}
              <div
                style={{ scrollbarWidth: "thin" }}
                className="grid grid-cols-2  shadow-inner overflow-y-auto h-[500px] scroll-smooth  shadow-stone-300 border-t-[1px] px-6 border-stone-400 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-8"
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
        </div>
      </Container>
    </>
  );
};

export default ProductsPage;
