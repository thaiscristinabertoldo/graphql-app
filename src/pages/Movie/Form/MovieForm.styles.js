import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormItem = styled.div`
  margin-bottom: ${(props) => props.theme.spaces.medium};
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
