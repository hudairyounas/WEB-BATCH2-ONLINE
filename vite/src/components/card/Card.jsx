import React from 'react'
import Table from '../table/Table'

const Card = ({name, age, email}) => {
  return (
    <div style={{border:"2px solid black", margin:"10px", textAlign:"center"}}>
        {/* <div>
            <h1>Name- {names}</h1>
            <h2>age - {age}</h2>
        </div>
        <Table data={data} /> */}
        <Table name={name}  age={age} email={email}  />
    </div>
  )
}

export default Card