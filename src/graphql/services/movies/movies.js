import gql from "graphql-tag";

export const QUERY_MOVIES = gql`
  query Movies {
    movies {
      id: _id
      name
      description
      imageUrl
      category {
        id: _id
        name
      }
    }
  }
`;

export const MUTATION_MOVIE = gql`
  mutation CreateMovieMutation($createMovieMovieInput: MovieInput!) {
    createMovie(movieInput: $createMovieMovieInput) {
      id: _id
    }
  }
`;
