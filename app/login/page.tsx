import React from "react";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import LoginForm from "./login";
import { getLoggedInUser } from "@/actions/getLoggedInUser";

const Login = async () => {
  const currentUser = await getLoggedInUser();
  return (
    <Container>
      <FormWrap>
        <LoginForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default Login;
