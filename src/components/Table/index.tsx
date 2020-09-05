import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  thead {
    tr {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      th {
        background-color: #1a262b;
        padding: 12px;
        font-weight: bold;
        color: white;
        box-shadow: 0 5px 8px #00000020;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 12px;
      }
      + tr {
        td {
          border-top: 1px solid #dee2e6;
        }
      }
    }
  }
`;

export default Table;
