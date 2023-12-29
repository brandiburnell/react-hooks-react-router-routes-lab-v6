import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  // feth actors data from server
  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then((actors) => setActors(actors))
      .catch(error => console.error(error)); 
  }, []);

  const actorArticles = actors.map((actor) => {
    const movies = actor.movies.map((movie) => {
      return <li key={movie}>{movie}</li>;
    });

    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
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
        <h1>Actors Page</h1>
      </header>
      <main>
        {/* Actor info here! */}
        {actorArticles}
      </main>
    </>
  );
};

export default Actors;
