import React from "react";

import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";

export const Padrao: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Navigation />
      <Content>{children}</Content>
    </Container>
  );
};
