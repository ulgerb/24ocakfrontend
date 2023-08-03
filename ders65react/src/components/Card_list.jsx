import React, { useEffect, useState } from 'react'
import Card from './Card'
import Classcom from './Classcom';

function Card_list(props) {

   const myColor = (id, e) => {
      console.log(id, e.target.value); // hangi inputa yazdığımı id'den öğrenicem , inputun içerisine ne yazıldığını e ile öğrenicem
      props.setCards(
         props.cards.map((card) => {
            return ((id === card.id) ? { ...card, color: e.target.value } : card)
         })
      )
   }

   // const myFunc = () => {
   //    console.log("merhaba");
   // }
   // myFunc()

   const [increase, setIncrease] = useState(0)
   
   
   useEffect(() => {
      console.log("useEffect çalışıyosunnnn")
   },[increase])

   return (
      <div className='row'>
         <Classcom/>
         
         <div className='text-center m-3'>
            <h2>Func Component</h2>
            <span>{increase} </span> <br />
            <input className='m-5' type="button" value={"Arttır"} onClick={() => { setIncrease(increase + 1) }} />
         </div>

         {/* <Card title={props.cards[0].title} subtitle={props.cards[0].subtitle} price={props.cards[0].price} /> */}

         {
            props.cards.map((card) => {
               return (
                  <div key={card.id} className='col-4'>
                     <Card color={card.color} myColor={myColor} id={card.id} title={card.title} subtitle={card.subtitle} price={card.price} />
                  </div>
               )
            })
         }

      </div>
   )
}

export default Card_list