import { FaSearch } from "react-icons/fa";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        minLength={3}
        placeholder="City name"
        className="input-city-name"
        autoComplete="off"
      />
      <button type="submit" className="button-search">
        <FaSearch />
      </button>
    </form>
  );
};

export default Form;
