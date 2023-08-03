import React, { useContext } from 'react'
import Card from './Card'
import { ContextCards } from '../contexts/ContextCards'
import { ContextVideo } from '../contexts/ContextVideo'

function Card_list(props) {

   const context = useContext(ContextCards)
   const contextVideo = useContext(ContextVideo)
   
   const cardDelete = (id,e)=>{
      console.log(context.cards.filter(card => card.id !== id));
      context.setCards(
         context.cards.filter(card => card.id !== id)
      )
   }
   
   return (
      <div className='row g-3 my-3'>
         <h3>Ürünlerim</h3>

         {
            context.cards.map((crd) => {
               return (
                  <div className="col-4">
                     <Card cardDelete={cardDelete.bind(this,crd.id)} title={crd.title} text={crd.text} price={crd.price} category={crd.category} />
                  </div>
               )
            })
         }
      </div>
   )
}

export default Card_list