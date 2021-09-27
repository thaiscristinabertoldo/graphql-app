import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";

import { Typography } from "../Typography";
import { ErrorMessageStyled, FieldContainer, InputStyled, LabelRequired } from "./InputField.styles";

export const InputField = ({ field, label, required = false, ...props }) => {
  const { colors } = useTheme();

  return (
    <FieldContainer>
      <Typography color={colors.grey} level={4} htmlFor={field.id}>
        {label} {required && <LabelRequired>*</LabelRequired>}
      </Typography>

      <InputStyled {...field} {...props} required={required} />

      <ErrorMessage name={field.name} component={ErrorMessageStyled} />
    </FieldContainer>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.object,
  required: PropTypes.bool,
};
