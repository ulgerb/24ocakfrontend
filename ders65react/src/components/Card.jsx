import React from 'react'
// rfce
function Card(props) {
   return (

      <div style={{ background: props.color }} className="card p-4">
         <h3>{props.title} </h3>
         <h5>{props.subtitle} </h5>
         <h4>{props.price}₺ </h4>
         <form>
            <input type="text" onChange={props.myColor.bind(this,props.id)} className="form-control" />
         </form>
      </div>
   )
}

export default Card