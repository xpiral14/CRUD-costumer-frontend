import styled from "styled-components";

export const Container = styled.main`
  display: grid;

  grid-template:
    "nv hd hd hd" 60px
    "nv ds ds ds" auto
    "nv ds ds ds" auto
    / 250px auto auto auto;
`;

export const Content = styled.section`
  padding: 16px;
  grid-area: ds;
`;
