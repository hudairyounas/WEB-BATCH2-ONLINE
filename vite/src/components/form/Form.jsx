import React, { useState } from "react";
import * as yup from "yup";

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let userSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters long").max(12, "Password must be less than 12 characters long"),
  });

  const fromData = async (e) => {
    e.preventDefault();

    try {
      let res = await userSchema.validate({
        name: name,
        email: email,
        password: password,
      });
      console.log(res)
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
    
  };

  return (
    <form>
      <label htmlFor="userName">Name: </label>
      <input
        className="border-2 border-gray-500"
        type="text"
        name="userName"
        id="userName"
        autoComplete="off"
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email: </label>
      <input
        className="border-2 border-gray-500"
        type="email"
        name="email"
        id="email"
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password: </label>
      <input
        className="border-2 border-gray-500"
        type="password"
        name="password"
        id="password"
        autoComplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="border-2 border-gray-500" type="submit" onClick={fromData}>
        Submit
      </button>
      <h1 className="text-red-500 text-2xl">{error}</h1>
    </form>
  );
};

export default Form;
