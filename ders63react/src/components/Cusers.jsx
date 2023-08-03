import React, { Component } from 'react'
import Cuser from './Cuser'

class Cusers extends Component {

   state = {
      title: "Class Component",
      table_style: "table-dark",
      table_button: "Light Mod",
   }


   changeTableStyle = ()=>{
      if (this.state.table_button === "Light Mod"){
         this.setState({
            table_style: "table-secondary",
            title: "React Class Component",
            table_button: "Dark Mod",

         })
      }else if(this.state.table_button === "Dark Mod"){
         this.setState({
            table_style: "table-dark",
            table_button: "Light Mod",
         })
      }
   }
   
   render() {
      console.log(this.state);
      let users = this.props.users;
      
      return (
         <div>
            <h3>{this.state.title} <button onClick={this.changeTableStyle}>{this.state.table_button}</button></h3>
            <table className="table table-hover">
               <thead className= {this.state.table_style}>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Ad</th>
                     <th scope="col">Kullanıcı Adı</th>
                     <th scope="col">Yaşı</th>
                  </tr>
               </thead>
               <tbody>
                  <Cuser fname={users[0].fname} username={users[0].username} age={users[0].age} />
                  <Cuser fname={users[1].fname} username={users[1].username} age={users[1].age} />
                  <Cuser fname={users[2].fname} username={users[2].username} age={users[2].age} />
                  <Cuser fname={users[3].fname} username={users[3].username} age={users[3].age} />
                  <Cuser fname={users[4].fname} username={users[4].username} age={users[4].age} />

               </tbody>
            </table>
         </div>
      )
   }
}

export default Cusers;