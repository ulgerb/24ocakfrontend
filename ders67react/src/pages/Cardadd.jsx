import React, { useContext } from 'react'
import { ContextCards } from '../contexts/ContextCards'

function Cardadd() {

   const context = useContext(ContextCards)
   
   const cardAdd = (e)=>{
      e.preventDefault() // sayfanın yenilenmesii engeller
      let newcard = {title: e.target.title.value, category: e.target.subtitle.value, price:e.target.price.value, text:e.target.text.value}
      context.setCards(
         [...context.cards , newcard]
      )
      
      alert("Kart Başarıyla Eklendi")
   }
   
   return (
      <div className='container' style={{ padding: "100px 200px" }}>
         <h2>Kart Ekle</h2>
         <form onSubmit={cardAdd}>
            <div>
               <label className='form-label'>Başlık</label>
               <input type="text" name='title' className="form-control" />
            </div>
            <div>
               <label className='form-label'>Alt Başlık</label>
               <input type="text" name='subtitle' className="form-control" />
            </div>
            <div>
               <label className='form-label'>Kart Açıklama</label>
               <textarea className='form-control' name="text" cols="30" rows="6"></textarea>
            </div>
            <div>
               <label className='form-label'>Fiyat</label>
               <input className='form-control' type="number" name="price" />
            </div>
            <button className='btn btn-secondary' type='submit'>Kart Oluştur</button>
         </form>

      </div>
   )
}

export default Cardadd