import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  padding: 0 16px;
  display: flex;
  flex-direction: row-reverse;
  height: 60px;
  width: calc(100% - 250px);
  right: 0;
  background: linear-gradient(to right, #ef1a63, #fe6900);
  grid-area: hd;
  display: flex;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    span {
      color: white;
    }
    img {
      margin-left: 16px;
      width: 48px;
      border-radius: 30px;
    }
  }
  @media only screen and (max-width: 600px) {
    width: calc(100% - 50px);
  }
`;
