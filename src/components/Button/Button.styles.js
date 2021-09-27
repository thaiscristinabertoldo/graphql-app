import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: ${(props) => props.theme.spaces.xsmall};
  border: 1px solid ${(props) => (props.disabled ? props.theme.colors.lightGrey : props.backgroundColor)};
  background-color: ${(props) => (props.disabled ? props.theme.colors.lightGrey : props.backgroundColor)};
  border-radius: ${(props) => props.theme.borderRadius.small};
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: 16px;
  cursor: ${(prop) => (prop.disabled ? "default" : "pointer")};

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => (props.disabled ? props.theme.colors.lightGrey : props.hoverColor)};
    border: 1px solid ${(props) => (props.disabled ? props.theme.colors.lightGrey : props.hoverColor)};
    box-shadow: ${(props) => (props.disabled ? "none" : `1px 5px 15px ${props.theme.colors.lightGrey}`)};
  }
`;
