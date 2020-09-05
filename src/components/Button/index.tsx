import styled, { css } from "styled-components";
import { darken } from "polished";
const ButtonColors: { [x: string]: any } = {
  normal: {
    primary: {
      background: "#008cff",
      textColor: "#fff",
    },
    secondary: {
      background: "#75808a",
      textColor: "#fff",
    },
    success: {
      background: "#15ca20",
      textColor: "#fff",
    },
    danger: {
      background: "#fd3550",
      textColor: "#fff",
    },
    warning: {
      background: "#ff9700",
      textColor: "#fff",
    },
    info: {
      background: "#0dceec",
      textColor: "#fff",
    },
  },
  outlined: {
    primary: {
      background: "#008cff",
      textColor: "#008cff",
    },
    secondary: {
      background: "#75808a",
      textColor: "#75808a",
    },
    success: {
      background: "#15ca20",
      textColor: "#15ca20",
    },
    danger: {
      background: "#fd3550",
      textColor: "#fd3550",
    },
    warning: {
      background: "#ff9700",
      textColor: "#ff9700",
    },
    info: {
      background: "#0dceec",
      textColor: "#0dceec",
    },
  },
};

type ButtonThemeTypes =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

interface ButtonProps {
  rounded?: boolean;
  outlined?: boolean;
  btnTheme: ButtonThemeTypes;
}

const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  ${(p) =>
    p.rounded &&
    css`
      border-radius: 30px;
      background: none;
    `};
  ${(p) =>
    p.outlined
      ? css`
          border: 1px solid ${ButtonColors.outlined[p.btnTheme].background};

          color: ${ButtonColors.outlined[p.btnTheme].textColor};

          &:hover {
            background-color: ${ButtonColors.outlined[p.btnTheme].background};
            color: white;
          }
        `
      : css`
          background: ${ButtonColors.normal[p.btnTheme].background};
          color: white;

          &:hover {
            background-color: ${darken(
              0.1,
              ButtonColors.outlined[p.btnTheme].background
            )};
          }
        `}
`;

export default Button;
