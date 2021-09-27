import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";

import { Typography } from "../Typography";
import { ErrorMessageStyled, FieldContainer, SelectStyled, LabelRequired } from "./SelectField.styles";

export const SelectField = ({ field, label, required = false, options, ...props }) => {
  const { colors } = useTheme();

  return (
    <FieldContainer>
      <Typography color={colors.grey} level={4} htmlFor={field.id}>
        {label} {required && <LabelRequired>*</LabelRequired>}
      </Typography>

      <SelectStyled {...field} {...props} required={required}>
        <option value="" hidden>
          Selecione uma opção
        </option>
        {options?.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </SelectStyled>

      <ErrorMessage name={field.name} component={ErrorMessageStyled} />
    </FieldContainer>
  );
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  field: PropTypes.object,
  required: PropTypes.bool,
};
