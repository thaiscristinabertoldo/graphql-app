import PropTypes from "prop-types";
import { useTheme } from "styled-components";

import { ButtonStyled } from "./Button.styles";

export const Button = ({ children, color, backgroundColor, hoverColor, ...props }) => {
  const { colors } = useTheme();

  return (
    <ButtonStyled
      color={color || colors.white}
      backgroundColor={backgroundColor || colors.primary}
      hoverColor={hoverColor || colors.grey}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverColor: PropTypes.string,
};
