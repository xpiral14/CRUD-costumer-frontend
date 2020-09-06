import styled from "styled-components";

export const Container = styled.main`
  display: grid;

  grid-template:
    "nv hd hd hd" 60px
    "nv ds ds ds" auto
    "nv ds ds ds" auto
    / 250px auto auto auto;
  @media only screen and (max-width: 600px) {
    grid-template:
      "nv hd hd hd" 60px
      "nv ds ds ds" auto
      "nv ds ds ds" auto
      / 80px auto auto auto;
  }
`;

export const Content = styled.section`
  padding: 16px;
  grid-area: ds;
`;
