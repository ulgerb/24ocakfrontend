import React, { Component } from 'react'

class Cuser extends Component {

   
   
   render() {
      return (
         <>
            <tr>
               <th scope="row">1</th>
               <td>{this.props.fname}</td>
               <td>{this.props.username}</td>
               <td>{this.props.age}</td>
            </tr>
         </>
      )
   }
}


export default Cuser;