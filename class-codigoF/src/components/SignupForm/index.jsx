import { useForm } from "react-hook-form";

const SignupForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleClearclick = () => {
    reset();
  };
  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <lavel>
        Name
        <input {...register("name", { required : true })} ></input>
      </lavel>
      <br />
      <lavel>
        Age
        <input {...register("age", {required : true})} ></input>
      </lavel>
      <br />
      <lavel>
        Address
        <input {...register("address", {required : true})} ></input>
      </lavel>
      <br />
      <lavel>
        Phone
        <input {...register("phone", {required : true})} ></input>
      </lavel>
      <br />
      <div>
        <button type="button" onClick={handleClearclick}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;
