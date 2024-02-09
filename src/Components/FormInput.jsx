import propTypes from "prop-types";

const FormInput = ({
  name,
  label,
  placeholder,
  value,
  handleOnChange,
  required,
}) => {
  //   console.log(props);
  return (
    <div className="mt-4">
      <label htmlFor={name} className="mr-2 flex font-semibold ">
        {label}

        {required ? <span className="text-red-500 ml-1">*</span> : ""}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        className="outline-none p-3 mt-1 px-32 py-2 rounded bg-gray-300"
        value={value}
        onChange={handleOnChange}
        required={required}
      />
    </div>
  );
};
FormInput.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string,
  OnChange: propTypes.func,
};

export default FormInput;
