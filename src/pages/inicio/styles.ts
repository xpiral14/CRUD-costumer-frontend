import styled from "styled-components";

export const Container = styled.div`
h1 {
    margin-bottom: 24px;
}
  p {
    + p {
      margin-top: 24px;
      line-height: 1.5;
    }
  }
`;
