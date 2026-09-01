import React from "react";
import { useState } from "react";
import axios from "axios";

const UserData = () => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");

  const getUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:5000/user?email=${email}`);

      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={getUser}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      {user ?(
        <div>
            <p>{user?.userData?._id}</p>
          <p>Name: {user?.userData?.name}</p>
          <p>Email: {user?.userData?.email}</p>
          <p>Phone: {user?.userData?.phone}</p>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
};

export default UserData;
