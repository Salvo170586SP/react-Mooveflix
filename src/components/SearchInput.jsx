import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovie } from "../redux/moviesSlice";

const SeachInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchMovie(''));
  }, [dispatch]);

  const searchMovies = () => {
    dispatch(fetchMovie(title));
    setTitle("");
  };

  return (
    <>
      <div className="input-box">
        <input
          className="focus:outline-none focus:ring focus:ring-red-800"
          type="text"
          placeholder="cerca film..."
          value={title}
          onChange={handleInputChange}
        />
        <button
          className="bg-yellow-400 text-white hover:bg-yellow-500 rounded-md p-2 mx-2"
          onClick={searchMovies}
        >
          cerca
        </button>
      </div>
    </>
  );
};

export default SeachInput;
