import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id; 

  console.log(movieId);

  // fetch movie info
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(r => r.json())
      .then(movie => setMovie(movie))
      .catch(error => console.error(error));
  }, [movieId]);

  if (!movie.title) {
    return <h1>Loading...</h1>;
  };

  // movie genres
  const movieGenres = movie.genres.map((genre) => {
    return (
      <span key={genre}>genre</span>
    );
  });

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movieGenres}
      </main>
    </>
  );
};

export default Movie;
