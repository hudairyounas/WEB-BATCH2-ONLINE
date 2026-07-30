import React from 'react'
import { useDispatch } from 'react-redux';
import { doLogout } from '../../store/slices/auth.slice';

const Home = () => {


  const dispatch = useDispatch();

  return (
    <div>

      <button onClick={() => dispatch(doLogout())} className="border-2 border-red-500 px-2 py-1 rounded-md">Logout</button>
    </div>
  )
}

export default Home