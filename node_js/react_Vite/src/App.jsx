import React from "react";
import { useState } from "react";
import axios from "axios";
import UserData from "../components/UserData";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
        phone,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };


  const getUser = async ()  => {

  }



  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="number"
        name="phone"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>

<UserData />
    </>
  );
};

export default App;
