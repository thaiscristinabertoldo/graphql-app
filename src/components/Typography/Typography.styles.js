import styled from "styled-components";

export const TypographyStyled = styled("h1").attrs(({ level }) => ({
  as: `h${level}`,
}))`
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  margin: 0;
`;
