import React from 'react'

function User(props) {
  return (
    <>
      <h4>{props.fname}</h4>
      <p>{props.username}</p>
      <p>{props.age}</p>
      <h4>{props.id}</h4>
      <form>
        <input type="text" name={props.id} onChange={props.myColor.bind(this,props.id)} />
      </form>
      <hr />
    </>
  )
}

User.defaultProps = {
  fname:"İsim yok",
  username:"Kullanıcı adı yok",
  age: "-",
}

export default User;