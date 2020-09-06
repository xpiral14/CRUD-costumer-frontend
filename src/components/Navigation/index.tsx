import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiFamilyTree } from "react-icons/gi";
import { MdGroup } from "react-icons/md";

import {
  Container,
  LogoContainer,
  MenuContainer,
  IconMenuItem,
  IconMenuText,
} from "./styles";

import logo from "../../assets/3lmlogo.png";

export const Navigation = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
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
            <Link
              to="/cargos"
              className={(activeMenuItem === "cargos" && "active") || ""}
              onClick={() => setActiveMenuItem("cargos")}
            >
              <IconMenuItem>
                <GiFamilyTree />
              </IconMenuItem>
              <IconMenuText>Cargos</IconMenuText>
            </Link>
          </li>
          <li>
            <Link
              to="/funcionarios"
              className={(activeMenuItem === "funcionarios" && "active") || ""}
              onClick={() => setActiveMenuItem("funcionarios")}
            >
              <IconMenuItem>
                <MdGroup />
              </IconMenuItem>
              <IconMenuText>Funcionário</IconMenuText>
            </Link>
          </li>
        </ul>
      </MenuContainer>
    </Container>
  );
};
