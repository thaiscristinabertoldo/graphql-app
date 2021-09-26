import styled from "styled-components";

export const MovieContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const MovieItem = styled.div`
  width: 250px;
  height: 300px;
  margin-bottom: ${(props) => props.theme.spaces.xlarge};
`;
