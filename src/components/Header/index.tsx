import React from "react";

import { Container } from "./styles";

import perfilImage from "../../assets/perfil.png";
export const Header = () => {
  return (
    <Container>
      <div>
        <span>
          Bem vindo, <strong>Samuel!</strong>{" "}
        </span>
        <img src={perfilImage} alt="Samuel Reis" />
      </div>
    </Container>
  );
};
