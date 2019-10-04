import React from "react";
import Button from "../../../styles/components/Button";
import { Container, SigninForm } from "../styles";

const SignIn = () => (
  <Container>
    <SigninForm>
      <h1>Bem Vindo</h1>
      <span>E-MAIL</span>
      <input type="email" name="email" />
      <span>SENHA</span>
      <input type="password" name="password" />
      <Button type="submit" size="big">
        Entrar
      </Button>
    </SigninForm>
  </Container>
);

export default SignIn;
