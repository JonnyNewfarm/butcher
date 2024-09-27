import { getLoggedInUser } from "@/actions/getLoggedInUser";

import Container from "@/app/components/Container";
import NullData from "@/app/components/nullData";
import React from "react";
import ManageOrderClient from "@/app/admin/manage-orders/ManageOrderClient";
import getOrders from "@/actions/getOrders";

const ManageProducts = async () => {
  const orders = await getOrders();
  const currentUser = await getLoggedInUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }
  return (
    <div className="pt-10">
      <Container>
        <ManageOrderClient orders={orders} />
      </Container>
    </div>
  );
};

export default ManageProducts;
