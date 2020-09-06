import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.nav`
  position: fixed;
  height: 100vh;
  background-color: #1a262b;
  width: 250px;
  box-shadow: 4px 0 10px #00000015;

  @media only screen and (max-width: 600px) {
    width: 80px;
  }
`;

export const LogoContainer = styled.section`
  text-align: center;
  margin: 16px 0;
  img {
    width: 100px;
  }
  @media only screen and (max-width: 600px) { 
    img{
      width: 40px;
    }
  }
`;

export const MenuContainer = styled.menu`
  ul {
    list-style: none;
    li {
      + li {
        border-top: 2px solid black;
      }
      a {
        display: block;
        width: 100%;
        text-decoration: none;
        border-left: 3px solid #1a262b;
        padding: 12px;
        color: white;
        background-color: #1a262b;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        :hover {
          background-color: ${lighten(0.05, "#1a262b")};
          border-left: 3px solid #fd3550;
        }
      }
    }
    .active {
      box-shadow: inset 0 0 5px #00000050;
      background-color: ${lighten(0.05, "#1a262b")};
      border-left: 3px solid #fd3550;
    }
  }
  @media only screen and (max-width: 600px) {
    ul {
      li {
        a {
          text-align: center;
        }
      }
    }
  }
`;

export const IconMenuItem = styled.span`
  margin-right: 16px;
  @media only screen and (max-width: 600px) {
    margin-right: 0;
  }
`;
export const IconMenuText = styled.span`
  color: #d6d6d6;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
