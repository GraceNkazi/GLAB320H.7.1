export default function MovieDisplay({ movie }) {
    // The component must return some JSX
    return (
    <>
    <h1>The MovieDisplay Component</h1>
    <h1>{movie?.Title}</h1>
    <h2>{movie?.Genre}</h2>
    <img src={movie?.Poster} alt={movie?.Title} />
    <h2>{movie?.Year}</h2>
    </>
    );
  }