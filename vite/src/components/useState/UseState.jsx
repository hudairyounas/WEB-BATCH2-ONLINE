import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  // const [userName, setUserName] = useState("")

  // const handleClick = (num) => {
  //     console.log("clicked", num);
  // }

  // const handleOnChange = (e) =>{
  //     // userName = e.target.value
  //     setUserName(e.target.value)
  //     console.log(e.target.value)
  // }

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  //

  return (
    <>
      {/* <input type="text" placeholder='Enter some data' onChange={handleOnChange} />
    <button onClick={() => {
        handleClick(10)
    }}>Click me</button>
    <h1>{userName}</h1> */}
      {/* <button onClick={increment}>+</button>
    <span>{count}</span>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Reset</button> */}
    </>
  );
};

export default UseState;
