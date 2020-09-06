import styled from "styled-components";

const Select = styled.select`
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 1rem;
  border: 1px solid #ced4da;
  transition: 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export default Select;
