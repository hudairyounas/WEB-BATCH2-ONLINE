import React from 'react'

const Table = ({name, age, email}) => {
  return (
    <table>
        <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
        </tr>
    </table>
  )
}

export default Table