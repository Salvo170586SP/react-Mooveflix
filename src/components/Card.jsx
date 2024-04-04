import { Link } from "react-router-dom";
import "./Card.scss";

const Card = (props) => {

   return (
    <div className="card" tabIndex="0" key={props.id}>
      <div className="overlay"></div>
      <figure>
        {props.poster_path ? (
          <img
            width={100}
            src={`https://image.tmdb.org/t/p/w342/${props.poster_path}`}
            alt={props.title}
          />
        ) : (
          <img
            className="placeholder"
            src="https://www.altavod.com/assets/images/poster-placeholder.png"
            alt="placeholder"
          />
        )}
      </figure>
      <div className="body-text">
        <Link
          to={`/movies/${props.id}`}
          className="scopri text-black font-bold"
        >
          Scopri di più
        </Link>
        <h2>{props.title}</h2>
        <span className="actors">Trama:{props.overview}</span>
        <span className="year">Year:{props.release_date}</span>
      </div>
    </div>
  );
};

export default Card;
