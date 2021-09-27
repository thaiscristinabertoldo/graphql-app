import styled from "styled-components";

export const CardContainer = styled.div`
  height: inherit;
  perspective: 1000px;
  width: inherit;
`;

export const CardContent = styled.div`
  height: inherit;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s linear 0.1s;
  width: inherit;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  backface-visibility: hidden;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  color: ${(props) => props.theme.colors.white};
  height: inherit;
  left: 0;
  position: absolute;
  top: 0;
  transform: rotateY(0);
  width: inherit;
`;

export const CardBack = styled.div`
  backface-visibility: hidden;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  color: ${(props) => props.theme.colors.white};
  height: inherit;
  left: 0;
  position: absolute;
  top: 0;
  transform: rotateY(180deg);
  width: inherit;
`;

export const CardItem = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: space-between;
  padding: ${(props) => props.theme.spaces.small};
`;
