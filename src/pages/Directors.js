import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  // fetch directors array on render
  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(r => r.json())
      .then((directors) => setDirectors(directors))
      .catch((error) => console.error(error));
  }, []);

  const directorAtricles = directors.map((director) => {
    const movies = director.movies.map((movie) => {
      return <li key={movie}>{movie}</li>;
    });

    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {movies}
        </ul>
      </article>
    );
  });

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {/* Director info here! */}
        {directorAtricles}
      </main>
    </>
  );
};

export default Directors;
