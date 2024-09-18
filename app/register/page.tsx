import React from "react";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import RegisterForm from "../components/inputs/RegisterForm";
import { getLoggedInUser } from "@/actions/getLoggedInUser";

const Register = async () => {
  const currentUser = await getLoggedInUser();

  return (
    <Container>
      <FormWrap>
        <RegisterForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default Register;
