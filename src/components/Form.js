import { FaSearch } from "react-icons/fa";

const Form = () => {
  return (
    <form className="form">
      <input
        type="text"
        required
        minLength={3}
        placeholder="City name"
        className="input-city-name"
      />
      <FaSearch role="button"/>
    </form>
  );
};

export default Form;
