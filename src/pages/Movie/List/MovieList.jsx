import { useQuery } from "@apollo/client";

import { Card, ImageFeedback, IMAGE_TYPE } from "../../../components";
import { QUERY_MOVIES } from "../../../graphql/services";
import { MovieContainer, MovieItem } from "./MovieList.styles";

export const MovieList = () => {
  const { loading, error, data } = useQuery(QUERY_MOVIES);

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
      {data?.movies?.map(({ id, name, description, imageUrl }) => (
        <MovieItem key={id}>
          <Card item={{ title: name, description, imageUrl }} />
        </MovieItem>
      ))}
    </MovieContainer>
  );
};
