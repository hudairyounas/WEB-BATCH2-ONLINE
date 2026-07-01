import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);
  // componentDidMount(() => {

  // })

  // componentWillUnmount(() => {

  // })

  // componentDidUpdate(() => {

  // })

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

//   useEffect(() => {
//     return () => {
//       alert("Unmounted");
//       console.log("Component unmounted");
//     };
//   }, []);

  console.log("component render");

  return <button onClick={() => setCount(count + 1)}>count - {count}</button>;
};

export default UseEffect;
