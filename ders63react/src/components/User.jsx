import React from 'react'

function User(props) {
  return (
    <>
      <tr>
         <th scope="row">1</th>
         <td>{props.fname}</td>
         <td>{props.username}</td>
         <td>{props.age}</td>
      </tr>
    </>
  )
}

export default User