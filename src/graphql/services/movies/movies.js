import gql from "graphql-tag";

export const MOVIES = gql`
  query Movies {
    movies {
      id: _id
      name
      description
      category {
        _id
        name
        description
      }
    }
  }
`;
