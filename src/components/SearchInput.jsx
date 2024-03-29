 

const SeachInput = ({title, setTitle}) => {

    const handleInputChange = (event) => {
        setTitle(event.target.value);
      };
  return (
    <>
      
      <div className="input-box">
          <input
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