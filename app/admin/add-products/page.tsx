import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import React from "react";
import AddProductForm from "./AddProductForm";
import { getLoggedInUser } from "@/actions/getLoggedInUser";
import NullData from "@/app/components/nullData";

const AddProducts = async () => {
  const currentUser = await getLoggedInUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }

  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <AddProductForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddProducts;
