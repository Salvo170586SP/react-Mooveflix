import { useEffect, useState } from "react";
import Card from "./Card";
import "./FetchMovie.scss";

const FetchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("titanic");
 /*  const [filteredData, setFilteredData] = useState([]); */

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=52506c224db8dc42f817a52dcdd3da51`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  }, [title]);

/*   const filterMovie = () => {
    const filteredMovies = movies.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredData(filteredMovies);
  };
 */
/*   console.log(filteredData); */
  return (
    <div id="movies">
      <div className="overlay-sfondo"></div>
      <div className="input-box">
        <input
          type="text"
          placeholder="cerca film..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      {/*   <button onClick={filterMovie}>clicca</button> */}
      </div>

      <div className="box-movies">
        {movies.map((item, id) => (
          <Card key={id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FetchMovie;
