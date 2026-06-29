import React from 'react'
import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import UseState from '../../components/useState/UseState'


const Home = () => {

const data = [
  {name:"ali", age:22, email:"[EMAIL_ADDRESS]"},
  {name:"ahmad", age:20, email:"[EMAIL_ADDRESS]"},
  {name:"osama", age:18, email:"[EMAIL_ADDRESS]"},
  {name:"hassan", age:25, email:"[EMAIL_ADDRESS]"}
]


  return (
    <div className='home'>
        {/* <h1>Home page</h1>
        <Button btnText="click me" h1Tag="i am learning react" /> */}
        {/* {
          data.map((val) => {
            return(
              <Card names={val.name} age={val.age} data={val.email} />
            )
          })
        } */}
        {/* {
          data.map((item) => {
            return(
              <Card name={item.name} age={item.age} email={item.email} />
            )
          })
        } */}
        <UseState />
        
    </div>
  )
}

export default Home