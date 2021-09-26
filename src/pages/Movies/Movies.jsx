import { useQuery } from "@apollo/client";

import { Card } from "../../components";
import { ImageFeedback, IMAGE_TYPE } from "../../components";
import { MOVIES } from "../../graphql/services";
import { MovieContainer, MovieItem } from "./Movies.styles";

export const Movies = () => {
  const { loading, error, data } = useQuery(MOVIES);

  if (loading) {
    return <ImageFeedback message="Carregando lista de filmes..." type={IMAGE_TYPE.LOADING} />;
  }

  if (error) {
    return (
      <ImageFeedback
        message="Falha ao obter a lista de filmes :("
        type={IMAGE_TYPE.ERROR}
        description="Tente novamente mais tarde!"
      />
    );
  }

  return (
    <MovieContainer>
      {data?.movies?.map(({ _id: id, name, description, imageUrl }) => (
        <MovieItem key={id}>
          <Card item={{ title: name, description, imageUrl }} />
        </MovieItem>
      ))}
    </MovieContainer>
  );
};
