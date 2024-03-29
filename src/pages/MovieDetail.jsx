import "./MovieDetail.scss";
import Navabr from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
    
const MovieDetail = () => {
  const { movieID } = useParams();
 
  const movies = useSelector((state) => state.movies.value);

  const movieDetail = movies.results?.filter(
    (item) => item.id == movieID.toString()
  )[0];


 
 
  console.log(movieDetail);

  return (
    <>
      <Navabr />
      <div className="movie-detail">
        <div className="overlay-sfondo"></div>

        <div id="cardDetail">
          <figure>
            {movieDetail?.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w342/${movieDetail?.poster_path}`}
                alt={movieDetail?.title}
              />
            ) : (
              <img
                src="https://www.altavod.com/assets/images/poster-placeholder.png"
                alt="placeholder"
              />
            )}
          </figure>

          <div className="boxText">
            <h3 className="itemText">{movieDetail?.title}</h3>
            <span className="itemText">Voto: {movieDetail?.vote_average}</span>
            <span className="itemText">
              Data di uscita: {movieDetail?.release_date}
            </span>
            <span className="itemText">
              Lingua orginale: {movieDetail?.original_language}
            </span>
            <p className="itemText uppercase">{movieDetail?.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
