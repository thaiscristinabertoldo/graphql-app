import PropTypes from "prop-types";
import { useTheme } from "styled-components";

import imageError from "../../assets/error.svg";
import imageLoading from "../../assets/loading.svg";
import { Typography } from "../Typography";
import { ImageContainer } from "./ImageFeedback.styles";

export const IMAGE_TYPE = {
  ERROR: "error",
  LOADING: "loading",
};

export const ImageFeedback = ({ message, description, type }) => {
  const { colors } = useTheme();

  return (
    <ImageContainer>
      <img src={type === IMAGE_TYPE.ERROR ? imageError : imageLoading} alt={message} width="400px" />
      <Typography color={colors.secondary} fontWeight="bold">
        {message}
      </Typography>

      {description && (
        <Typography color={colors.lightGrey} level={3}>
          {description}
        </Typography>
      )}
    </ImageContainer>
  );
};

ImageFeedback.propTypes = {
  message: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.oneOf([IMAGE_TYPE.ERROR, IMAGE_TYPE.LOADING]),
};
