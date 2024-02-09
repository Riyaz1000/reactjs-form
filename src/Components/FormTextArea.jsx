import propTypes from "prop-types";

const FormTextArea = ({
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
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className="outline-none p-3 mt-1 sm:px-[136px] px-[47px] py-3 rounded bg-gray-300"
        value={value}
        onChange={handleOnChange}
        required={required}
      ></textarea>
    </div>
  );
};
FormTextArea.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string,
  OnChange: propTypes.func,
};

export default FormTextArea;
