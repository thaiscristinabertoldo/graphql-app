import { useQuery } from "@apollo/client";
import { Field } from "formik";

import { SelectField } from "../../../../../components";
import { CATEGORIES } from "../../../../../graphql/services";

export const FieldCategory = (props) => {
  const { data, loading } = useQuery(CATEGORIES);

  return <>{!loading && <Field as="select" component={SelectField} options={data?.categories || []} {...props} />}</>;
};
