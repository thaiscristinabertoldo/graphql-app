import PropTypes from "prop-types";

import { TypographyStyled } from "./Typography.styles";

export const Typography = ({ children, fontWeight = "normal", level = 1, ...props }) => {
  return (
    <TypographyStyled fontWeight={fontWeight} level={level} {...props}>
      {children}
    </TypographyStyled>
  );
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  fontWeight: PropTypes.oneOf(["normal", "bold", "lighter"]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
