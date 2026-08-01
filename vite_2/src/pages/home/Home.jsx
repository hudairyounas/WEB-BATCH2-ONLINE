import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from '../../store/slices/auth.slice';

const Home = () => {


  const dispatch = useDispatch();
  const name = useSelector((store) => store.authSlice.user.fullName);
  const email = useSelector((store) => store.authSlice.user.email);



  return (
    <div className='mt-10'>
      <h1 className='text-2xl text-red-500'>user - {name} - {email}</h1>
      <button onClick={() => dispatch(doLogout())} className="border-2 border-red-500 px-2 py-1 rounded-md">Logout</button>
    </div>
  )
}

export default Home