import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  // const [data, setData] = useState([])

  useEffect(() => {
    console.log("component mounted");
  }, [count]);

  console.log("component render");

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* {data.slice(0, 5).map((item) => (
        <div className='w-full border-2 border-gray-500 my-2' key={item.id}>
          <h1 className='text-xl font-bold'>{item.title}</h1>
          <p className='text-sm'>{item.body}</p>
        </div>
      ))} */}

      <button
        className="bg-red-700 cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        click me
      </button>
      <p>{count}</p>
      {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum blanditiis excepturi quo adipisci. Veniam voluptatibus voluptate dicta blanditiis eveniet? Ratione perspiciatis voluptate, id quis odio minima? Quasi fugit modi accusamus?</p>
      <h1>hello from useEffect</h1> */}
    </div>
  );
};

export default UseEffect;
