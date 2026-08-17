"use client"

import Image from "next/image";
import React, { useState } from "react";
import file from "@/assets/next.svg"

const Home = () => {
  const [username, setUsername] = useState("Ali");

  return (
    <div>
      <h1>Home page</h1>
      <h2>User name - {username}</h2>
      <Image src={file} alt='' />
      {/* <Header /> */}
    </div>
  );
};

export default Home;
