import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  //fetch movie data
  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then((movies) => setMovies(movies))
      .catch(error => console.log(error));
  }, []);

  const movieList = movies.map(movie => {
    return (
      <MovieCard title={movie.title} id={movie.id} key={movie.id}/>
    );
  });

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {/* Info goes here! */}
        {movieList}
      </main>
    </>
  );
};

export default Home;
