import React from 'react'

function Card(props) {
   return (
      <div className='row'>
         <div className="col-6">
            <div className="card">
               <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="card-img-top" alt="Fissure in Sandstone" />
               <div className="card-body">
                  {/* Hello Uygulaması */}
                  <h5 className="card-title">{props.title}</h5>
                  <a href="#!" onClick={props.myHello} className="btn btn-primary">Hello</a>
                  {/* Arttırma Azaltma */}
                  <h5 className='mt-4'> {props.text} </h5>
                  <a href="#!" onClick={props.myincrease} className="btn btn-success mx-2">Arttır</a>
                  <a href="#!" onClick={props.mydecrease} className="btn btn-danger mx-2">Azalt</a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Card