import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchFullMovie } from "./redux/moviesSlice";
import Carousels from "./components/Carousels";
import SeachInput from "./components/SearchInput";
import Loader from "./components/Loader";

function App() {
  const movies = useSelector((state) => state.movies.value);
  const moviesLoading = useSelector((state) => state.movies.isLoading);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("superman");

  useEffect(() => {
    dispatch(fetchFullMovie(title));
  }, [title, dispatch]);

  return (
    <div id="app">
      <Navbar />
      <div id="movies">
        <div className="overlay-sfondo"></div>
        
        <Carousels />

        <SeachInput title={title} setTitle={setTitle} />

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
