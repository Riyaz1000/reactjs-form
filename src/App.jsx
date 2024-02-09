import { useState } from "react";
import InputButton from "./Components/Button";
import FormInput from "./Components/FormInput";
import FormTextArea from "./Components/FormTextArea";

function App() {
  const [form, setForm] = useState({
    fullName: "",
    emailAddress: "",
    desc: "",
  });
  // const [fullName, setfullName] = useState("");
  // const [email, setemailAddress] = useState("");

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const submitFormToServer = (e) => {
    e.preventDefault();

    console.log(form);
    alert("Your Form is Successfully Submitted");
  };

  return (
    <div className=" bg-gray-700 sm:h-[695px] h-[695px]  m-auto">
      <p className="text-white font-semibold sm:text-4xl text-2xl p-7  text-center  ">
        React Form
      </p>

      <form action="" onSubmit={submitFormToServer}>
        <div className="bg-gray-200 sm:mr-[500px] mr-[10px]  sm:ml-[500px] ml-[10px] h-[450px] p-10 rounded">
          {/* {JSON.stringify(fullName, setemailAddress)} */}

          <FormInput
            name="fullName"
            label="FullName"
            placeholder="Enter your Fullname"
            value={form.fullName}
            handleOnChange={handleInputs}
            required
          />
          <FormInput
            name="emailAddress"
            label="Email Address"
            placeholder="Enter your Email"
            value={form.email}
            handleOnChange={handleInputs}
            required
          />

          <FormTextArea
            name="desc"
            label="Description"
            placeholder="Enter your description"
            value={form.desc}
            handleOnChange={handleInputs}
          />

          <InputButton text={"Submit"} />
        </div>
      </form>
    </div>
  );
}

export default App;
