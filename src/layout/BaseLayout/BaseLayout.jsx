import PropTypes from "prop-types";

import { Header } from "../../components";
import { Theme } from "../../theme";
import { LayoutContainer } from "./BaseLayout.styles";

export const BaseLayout = ({ children }) => (
  <Theme>
    <Header />

    <LayoutContainer>{children}</LayoutContainer>
  </Theme>
);

BaseLayout.propTypes = {
  children: PropTypes.node,
};
