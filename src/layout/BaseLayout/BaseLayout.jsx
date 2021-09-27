import { ToastContainer } from "react-toastify";

import PropTypes from "prop-types";

import { Header } from "../../components";
import { Theme } from "../../theme";
import { LayoutContainer } from "./BaseLayout.styles";

export const BaseLayout = ({ children }) => (
  <Theme>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      theme="dark"
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />

    <Header />

    <LayoutContainer>{children}</LayoutContainer>
  </Theme>
);

BaseLayout.propTypes = {
  children: PropTypes.node,
};
