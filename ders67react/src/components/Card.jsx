import React from 'react'

function Card(props) {
   return (
      <div className="card">
         <div className="card-body">
            <h5 className="card-title">{props.title} </h5>
            <h6 className='card-subtitle text-muted text-success'>{props.category} </h6>
            <p className="card-text">{props.text} </p>
            <h5>₺{props.price} </h5>
            <div className='d-flex justify-content-between'>
               <button type="button" className="btn btn-primary">Sepete Ekle</button>
               <button type="button" onClick={props.cardDelete} className="btn btn-danger">Sil</button>
            </div>
         </div>
      </div>
   )
}


export default Card