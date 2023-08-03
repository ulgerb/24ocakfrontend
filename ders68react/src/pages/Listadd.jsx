import React from 'react'
import { useContext } from 'react'
import { Context } from '../contexts/Context'

function Listadd() {

  const context = useContext(Context)

  const listAdd = (e)=>{
    e.preventDefault()
    console.log(context.users.length);
    const newuser = {
      id: (context.users.length === 0 ? 1 : context.users[context.users.length - 1].id + 1 ) ,
      fullname: e.target.fullname.value ,
      email:e.target.email.value ,
    }

    context.setUsers(
      [...context.users, newuser]
    )

    alert("Listeye Eklendi")
    
  }
  
  return (
    <div className='row my-5'>
      <h2>Listeye Ekle</h2>
      <form onSubmit={listAdd} className="col-4">
        <input className='form-control' name='fullname' type="text" placeholder='Ad Soyad' />
        <input className='form-control' name='email' type="email" placeholder='Email' />
        <button type="submit" className="btn btn-secondary">Ekle</button>
      </form>
    </div>
  )
}

export default Listadd