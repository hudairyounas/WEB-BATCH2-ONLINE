import React, { useState } from 'react'

const UseState = () => {

    const [userName, setUserName] = useState("")


    const handleClick = (num) => {
        console.log("clicked", num);
    }


    const handleOnChange = (e) =>{
        // userName = e.target.value
        setUserName(e.target.value)
        console.log(e.target.value)
    }

  return (
    <>
    <input type="text" placeholder='Enter some data' onChange={handleOnChange} />
    <button onClick={() => {
        handleClick(10)
    }}>Click me</button>
    <h1>{userName}</h1>
    </>
  )
}

export default UseState