import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useSelector } from "react-redux";
import Carousels from "./components/Carousels";
import SeachInput from "./components/SearchInput";
import Loader from "./components/Loader";

function App() {
  const movies = useSelector((state) => state.movies.value);
  const moviesLoading = useSelector((state) => state.movies.isLoading);


  return (
    <div id="app">
      <Navbar />
      <div id="movies">
        <div className="overlay-sfondo"></div>
        
        <Carousels />

        <SeachInput   movies={movies} />

        <Loader moviesLoading={moviesLoading} />

        {movies.results?.length <= 0 && (
          <div className="loader">
            Nessun film in lista. Effettua la ricerca
          </div>
        )}

        <div className="box-movies">
          {movies.results &&
            movies.results.map((item, id) => <Card key={id} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
