const Loader = ({ moviesLoading }) => {
  return (
    <>{moviesLoading == true && <div className="loader">Loading...</div>}</>
  );
};

export default Loader;
