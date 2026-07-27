import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slices/auth.slice";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formInfo = { email, password };
    dispatch(login(formInfo));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="border-2 border-red-500 px-2 py-1 rounded-md"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          autoComplete="off"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          className="border-2 border-red-500 px-2 py-1 rounded-md"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
          autoComplete="off"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
