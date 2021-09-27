import * as Yup from "yup";

export const initialMovie = {
  name: "",
  description: "",
  imageUrl: "",
  category: "",
};

export const validationSchema = () => {
  return Yup.object({
    name: Yup.string().required("Informe o nome!"),
    description: Yup.string().required("Informe a descrição!"),
    imageUrl: Yup.string("A URL imagem deve ser uma string"),
    category: Yup.string().required("Informe a categoria!"),
  });
};
