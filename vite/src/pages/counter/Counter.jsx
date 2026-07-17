import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAge, changePassword, changeUsername, getUser } from '../../store/slices/user.slice'

const Counter = () => {

  // const dispatch = useDispatch()
  // const userName = useSelector((store)=>store.userSlice.user1.userName)
  // const userAge = useSelector((store)=>store.userSlice.user1.age)
  // const userPassword = useSelector((store)=>store.userSlice.user1.password)

  // const userNameChangeHandler = (e)=>{
  //   dispatch(changeUsername(e.target.value))
  // }
  // const userAgeChangeHandler = (e)=>{
  //   dispatch(changeAge(e.target.value))
  // }
  // const userPasswordChangeHandler = (e)=>{
  //   dispatch(changePassword(e.target.value))
  // }

  const dispatch = useDispatch();

  const userList = useSelector((store) => store.userSlice.userList);
  const error = useSelector((store) => store.userSlice.error);
  const isLoading = useSelector((store) => store.userSlice.isLoading);

console.log(error)
console.log(isLoading)
  
  console.log(userList);

  useEffect(()=>{
    dispatch(getUser());
  }, [dispatch])

  

  return (
    <div>
      {
        isLoading ? <h1>Data is Loading</h1> :
        userList.map((user) =>{
          return (
            <h1 key={user.id}>{user.name}</h1>
          )
        })
      }


      {/* <h1>My name is {userName}</h1>
      <h1>My age is {userAge}</h1>
      <h1>My password is {userPassword}</h1>
      <input type="text" onChange={userNameChangeHandler} placeholder='enter your name' />
      <input type="text" onChange={userAgeChangeHandler} placeholder='enter your age'/>
      <input type="text" onChange={userPasswordChangeHandler} placeholder='enter your password'/> */}
    </div>
  )
}

export default Counter