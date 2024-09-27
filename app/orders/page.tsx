import { getLoggedInUser } from "@/actions/getLoggedInUser";

import Container from "@/app/components/Container";
import NullData from "@/app/components/nullData";
import React from "react";
import OrderClient from "./OrderClient";

import getOrdersByUserId from "@/actions/getOrdersByUserId";

const ManageOrders = async () => {
  const currentUser = await getLoggedInUser();
  if (!currentUser) {
    return <NullData title="Access denied" />;
  }
  const orders = await getOrdersByUserId(currentUser?.id);

  if (!orders) {
    return <NullData title="No orders yet" />;
  }

  return (
    <div className="pt-10">
      <Container>
        <OrderClient orders={orders} />
      </Container>
    </div>
  );
};

export default ManageOrders;
