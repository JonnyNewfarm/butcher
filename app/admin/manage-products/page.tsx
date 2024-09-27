import { getLoggedInUser } from "@/actions/getLoggedInUser";
import getProducts from "@/actions/getProducts";
import Container from "@/app/components/Container";
import NullData from "@/app/components/nullData";
import React from "react";
import ManageProductClient from "./ManageProductClient";

const ManageProducts = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getLoggedInUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }
  return (
    <div className="pt-8">
      <Container>
        <ManageProductClient products={products} />
      </Container>
    </div>
  );
};

export default ManageProducts;
