import React from "react";
import InputForm from "./InputForm";
import useForm from "./useForm";
import validate from './validateInfo'
import "./signup.css"

const Form = () => {
  const { handleChange, values, handleSubmit,errors} = useForm(validate);
  return (
    <form className="form-right" onSubmit={handleSubmit}>
      <h2>Buat Akunmu dengan mengisi kolom dibawah</h2>
      <InputForm
        htmlFor="username"
        label="Username"
        id="username"
        placeholder="username"
        type="text"
        name="username"
        value={values.username}
        onChange={(e)=>handleChange("username", e)}
      />
    {errors.username && <p>{errors.username}</p>}
      <InputForm
        htmlFor="email"
        label="Email"
        id="email"
        placeholder="email"
        // type="email"
        name="email"
        value={values.email}
        // onChange={handleChange}
        onChange={(e)=>handleChange("email", e)}
      />
      {errors.email && <p>{errors.email}</p>}
      <InputForm
        htmlFor="password"
        label="Password"
        id="password"
        placeholder="password"
        type="password"
        name="password"
        value={values.password}
        // onChange={handleChange}
        onChange={(e)=>handleChange("password", e)}
      />
      {errors.password && <p>{errors.password}</p>}
      <InputForm
        htmlFor="password2"
        label="Confirm Password"
        id="password2"
        placeholder="Re-type password"
        type="password"
        name="password2"
        value={values.password2}
        // onChange={handleChange}
        onChange={(e)=>handleChange("password2", e)}
      />
      {errors.password2 && <p>{errors.password2}</p>}
      <span>Sudah punya Akun? Login <a href="#signin
      ">Disini</a> </span>
      <button>Submit</button>
    </form>
  );
};

export default Form;
