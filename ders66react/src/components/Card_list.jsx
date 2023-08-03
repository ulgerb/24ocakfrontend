import React, { useContext } from 'react'
import Card from './Card'
import { ContextCards } from '../contexts/ContextCards'
import { ContextVideo } from '../contexts/ContextVideo'

function Card_list(props) {

   const context = useContext(ContextCards)
   const contextVideo = useContext(ContextVideo)
   
   console.log(contextVideo);
   
   return (
      <div className='row g-3 my-3'>
         <h3>Ürünlerim</h3>

         {
            context.cards.map((crd) => {
               return (
                  <div className="col-4">
                     <Card title={crd.title} text={crd.text} price={crd.price} category={crd.category} />
                  </div>
               )
            })
         }
      </div>
   )
}

export default Card_list