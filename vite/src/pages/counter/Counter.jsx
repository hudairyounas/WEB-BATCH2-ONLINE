import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {

  const count = useSelector((store) => store.counterSlice.count);
  const username = useSelector((store) => store.counterSlice.userName);
  const user = useSelector((store) => store)
  // console.log(count, username)
  // console.log(user)
  console.log(user)

  return (
    <div>
      <p>{count}</p>
      <p>{username}</p>
    </div>
  )
}

export default Counter