import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, decrement, increment, changeAge, changePhone } from '../../store/slices/counter.slice';

const Counter = () => {

  // const count = useSelector((store) => store.counterSlice.count);
  // const username = useSelector((store) => store.counterSlice.userName);
  // const user = useSelector((store) => store.userSlice.user.name)
  // // console.log(count, username)
  // // console.log(user)
  // console.log(user)

  const dispatch = useDispatch()

  const count = useSelector((store) => store.counterSlice.count);
  const username = useSelector((store) => store.counterSlice.userName);

  const incrementFunc =() =>{
     dispatch(increment())
  }

  const decrementFunc =() =>{
   dispatch(decrement()) 
  }

  // useEffect(() => {
    // dispatch(changeName("gvfghvgvgf")) 
  // }, []);
  // username
  // age
  // phone

  // increment
  // decrement

  return (
    <div>
    <button onClick={incrementFunc} className='p-2 bg-red-500 rounded cursor-pointer'>+</button>
    <h1>{count}</h1>
    <button onClick={decrementFunc} className='p-2 bg-green-500 rounded cursor-pointer'>-</button>
    <input type="text" onChange={(e) => dispatch(changeName(e.target.value))} className='border-2 border-gray-500' />
    <h1>{username}</h1>
    <input type="text" onChange={(e) => dispatch(changeAge(e.target.value))} className='border-2 border-gray-500' />
    <input type="text" onChange={(e) => dispatch(changePhone(e.target.value))} className='border-2 border-gray-500' />
    </div>
  )
}

export default Counter