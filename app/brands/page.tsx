export const revalidate = 0;
import getProducts, { IProductParams } from "@/actions/getProducts";
import Container from "../components/Container";
import NullData from "../components/nullData";
import ProductsCard from "../components/products/ProductsCard";

import FilterProductsMenu from "../components/products/FilterProductsMenu";

interface HomeProps {
  searchParams: IProductParams;
}

const ProductsPage = async ({ searchParams }: HomeProps) => {
  const products = await getProducts(searchParams);

  if (products.length == 0) {
    return <NullData title="Oops! No products found." />;
  }

  return (
    <Container>
      <div className="sticky">
        <div className="flex flex-row mt-8">
          <div className="sticky z-10 border-stone-400 border-r-[0.5px] ">
            <FilterProductsMenu />
          </div>
          <div>
            {!searchParams.brand ? (
              <span className="pl-3 font-semibold">
                {searchParams.category}
              </span>
            ) : (
              <span className="pl-3 font-semibold">{searchParams.brand}</span>
            )}
            <div
              style={{ scrollbarWidth: "thin" }}
              className="grid grid-cols-2 shadow-inner overflow-y-auto h-screen scroll-smooth  shadow-stone-300 border-t-[1px] px-6 border-stone-400 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-8"
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
  );
};

export default ProductsPage;
