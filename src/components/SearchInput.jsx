 

const SeachInput = ({title, setTitle}) => {

    const handleInputChange = (event) => {
        setTitle(event.target.value);
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
        </div>
    </>
  );
};

export default SeachInput;