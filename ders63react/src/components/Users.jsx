import React from 'react'
import User from './User'

function Users(props) {

   let users = props.users
   
   return (
      <div>
         <table className="table table-hover">
            <thead className="table-dark">
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">Ad</th>
                  <th scope="col">Kullanıcı Adı</th>
                  <th scope="col">Yaşı</th>
               </tr>
            </thead>
            <tbody>
               <User fname={users[0].fname} username={users[0].username} age={users[0].age} />
               <User fname={users[1].fname} username={users[1].username} age={users[1].age} />
               <User fname={users[2].fname} username={users[2].username} age={users[2].age} />
               <User fname={users[3].fname} username={users[3].username} age={users[3].age} />
               <User fname={users[4].fname} username={users[4].username} age={users[4].age} />

            </tbody>
         </table>
      </div>
   )
}

export default Users