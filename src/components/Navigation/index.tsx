import React from "react";
import { Container, LogoContainer, MenuContainer } from "./styles";
import logo from "../../assets/3lmlogo.png";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="logomarca 3LM" />
        </Link>
      </LogoContainer>
      <MenuContainer>
        <ul>
          <li>
            <Link to="/cargos">Cargos</Link>
          </li>
          <li>
            <Link to="/funcionarios">Funcionário</Link>
          </li>
          <li>Funcionario</li>
        </ul>
      </MenuContainer>
    </Container>
  );
};
