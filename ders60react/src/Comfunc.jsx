import React from 'react'

function Comfunc(props) {

   let x = 20;
   let text = "Kullanıcının Eklediği Ürün";
   
  return (
    <>
    <h3>{text}</h3>
    <div>{ x+10 }</div>
    <div>{ props.fname }</div>
    <div>{ props.product }</div>
    <div>{ props.category }</div>
    <hr />
    </>
  )
}

export default Comfunc // export paylaşım, gönderme