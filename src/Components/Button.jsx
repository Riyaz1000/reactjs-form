import propTypes from "prop-types";

const InputButton = ({ text }) => {
  return (
    <div>
      <button
        type=""
        className="bg-black text-white hover:bg-gray-700 rounded sm:px-48 px-24 py-2 mt-6"
      >
        {text}
      </button>
    </div>
  );
};

InputButton.propTypes = {
  text: propTypes.string,
};

export default InputButton;
