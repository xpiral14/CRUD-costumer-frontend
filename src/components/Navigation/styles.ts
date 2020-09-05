import styled from "styled-components";

export const Container = styled.nav`
  height: 100vh;
  background-color: #1a262b;

  box-shadow: 4px 0 10px #00000015;
`;

export const LogoContainer = styled.section`
  text-align: center;
  margin: 16px 0;
  img {
    width: 100px;
  }
`;

export const MenuContainer = styled.menu`
  ul {
    list-style: none;
    li {
      padding: 12px;
      color: white;
      + li {
        border-top: 2px solid black;
      }
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;
