import { useHistory } from "react-router";
import { toast } from "react-toastify";

import { useMutation } from "@apollo/client";
import { Formik, Form, Field } from "formik";
import { useTheme } from "styled-components";

import { Button, InputField } from "../../../components";
import { MUTATION_MOVIE, QUERY_MOVIES } from "../../../graphql/services";
import { initialMovie, validationSchema } from "./formValidation";
import { FieldCategory } from "./fragments/FieldCategory";
import { ActionContainer, FormContainer, FormItem } from "./MovieForm.styles";

export const MovieForm = () => {
  const { colors } = useTheme();
  const history = useHistory();

  const handleBack = () => history.push("/");

  const [mutationMovie] = useMutation(MUTATION_MOVIE, {
    refetchQueries: [{ query: QUERY_MOVIES }],
    onCompleted: () => {
      toast.success("Salvo com sucesso!");
      handleBack();
    },
    onError: () => {
      toast.error("Falha ao salvar!");
    },
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    await mutationMovie({
      variables: {
        createMovieMovieInput: {
          ...values,
        },
      },
    });
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialMovie} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting, isValid }) => (
        <Form>
          <FormContainer>
            <FormItem>
              <Field
                required
                type="text"
                name="name"
                id="name"
                label="Nome:"
                disabled={isSubmitting}
                component={InputField}
              />
            </FormItem>

            <FormItem>
              <Field
                required
                type="text"
                name="description"
                id="description"
                label="Descrição:"
                disabled={isSubmitting}
                component={InputField}
              />
            </FormItem>

            <FormItem>
              <Field
                type="text"
                name="imageUrl"
                id="imageUrl"
                label="URL imagem:"
                disabled={isSubmitting}
                component={InputField}
              />
            </FormItem>

            <FormItem>
              <FieldCategory required name="category" id="category" label="Categoria:" disabled={isSubmitting} />
            </FormItem>

            <ActionContainer>
              <Button
                disabled={isSubmitting}
                backgroundColor={colors.mediumGrey}
                hoverColor={colors.lightGrey}
                onClick={handleBack}
              >
                Cancelar
              </Button>

              <Button type="submit" disabled={isSubmitting || !isValid}>
                Salvar
              </Button>
            </ActionContainer>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};
