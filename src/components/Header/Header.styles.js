import styled from "styled-components";

export const HeaderBox = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  overflow: hidden;
  padding: ${(props) => props.theme.spaces.xsmall} ${(props) => props.theme.spaces.xlarge};
`;

export const TextContent = styled.div`
  margin-left: ${(props) => props.theme.spaces.xsmall};
`;

export const HeaderButton = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;
