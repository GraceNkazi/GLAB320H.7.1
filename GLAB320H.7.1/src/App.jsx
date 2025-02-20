import { useState, useEffect } from 'react'
import './App.css'


// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  //  Constant with your API Key
  const apiKey = "a12613c1";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    try {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    console.log(response);
    console.log(data);

    // Set the Movie state to the received data
    setMovie(data);
  } catch(e) {
    console.error(e)
  }
  }

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

// We pass the getMovie function as a prop called moviesearch
return (
<div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}