import styled from "styled-components";

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectStyled = styled.select`
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: ${(props) => props.theme.borderRadius.small};
  color: ${(props) => props.theme.colors.grey};
  font-size: 16px;
  padding: ${(props) => props.theme.spaces.xsmall};

  &:focus {
    outline: none;
    box-shadow: 1px 5px 15px ${(props) => props.theme.colors.lightGrey};
  }

  option {
    color: ${(props) => props.theme.colors.grey};
  }
`;

export const LabelRequired = styled.label`
  color: ${(props) => props.theme.colors.error};
`;

export const ErrorMessageStyled = styled.div`
  padding: 5px;
  color: ${(props) => props.theme.colors.error};
  font-size: 14px;
`;
