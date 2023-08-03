import React from 'react'
import { useContext } from 'react'
import { Context } from '../contexts/Context'

function Home() {

   const context = useContext(Context)

   const listDelete = (id)=>{
      console.log(id);
      context.setUsers(
         context.users.filter(user => user.id !== id)
      )
   }
   
   return (
      <div>
         <h2>Anasayfa</h2>

         <table class="table">
            <thead>
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">Ad & Soyad</th>
                  <th scope="col">Email</th>
                  <th scope="col">Sil</th>
               </tr>
            </thead>
            <tbody>

               {
                  context.users.map((user) => {
                     return (
                        <tr>
                           <th scope="row">{user.id} </th>
                           <td>{user.fullname} </td>
                           <td>{user.email} </td>
                           <td><button onClick={listDelete.bind(this,user.id)} className='btn btn-danger'>Sil</button></td>
                        </tr>

                     )
                  })
               }


            </tbody>
         </table>

      </div>
   )
}

export default Home