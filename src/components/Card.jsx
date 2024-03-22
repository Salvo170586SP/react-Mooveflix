import "./Card.scss";

const Card = (props) => {
  return (
    <>
      <div className="card" tabIndex="0">
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
              src="https://www.altavod.com/assets/images/poster-placeholder.png"
              alt="placeholder"
            />
          )}
        </figure>
        <div className="body-text">
          <button className="scopri">Scopri di più</button>
          <h2>{props.title}</h2>
          <span className="actors">Trama:{props.overview}</span>
          <span className="year">Year:{props.release_date}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
