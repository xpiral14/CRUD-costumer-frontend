import styled from "styled-components";

export const Container = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
      padding: 16px;
      background-color: #15ca20;
      color: white;
    }
    margin: 20px 0;
  }
  table {
    width: 100%;
    text-align: center;
    td {
      padding: 0 16px;
    }

    tbody {
      tr {
        td {
          :last-child {
            a {
              + a {
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }
`;
