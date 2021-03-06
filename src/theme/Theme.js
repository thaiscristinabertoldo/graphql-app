import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

const customTheme = {
  colors: {
    primary: "#000000",
    secondary: "#40E0D0",
    white: "#fff",
    error: "#c9302c",
    success: "#388E3C",
    grey: "#2D2E2E",
    mediumGrey: "#6E6E6E",
    lightGrey: "#A4A4A4",
  },
  borderRadius: {
    small: "0.4rem",
    medium: "0.8rem",
    large: "1.2rem",
  },
  spaces: {
    xsmall: "0.6rem",
    small: "1.2rem",
    medium: "1.6rem",
    large: "2.4rem",
    xlarge: "3.2rem",
    xxlarge: "4.0rem",
  },
};

export const Theme = ({ children }) => <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;

Theme.propTypes = {
  children: PropTypes.node,
};
