import { useQuery } from "@apollo/client";

import { MOVIES } from "./graphql/services";

function App() {
  const { loading, error, data } = useQuery(MOVIES);

  if (loading) {
    return <h1>loading</h1>;
  }

  if (error) {
    return <h1>error</h1>;
  }

  return (
    <div>
      {data?.movies?.map((movie) => (
        <h1 key={movie?.id}>{movie.name}</h1>
      ))}
    </div>
  );
}

export default App;
