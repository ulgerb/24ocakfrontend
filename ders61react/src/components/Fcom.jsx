import React from 'react'
import './Fcom.css'

// rfce react functions component oluşturmanın kısa yolu
// function component içerisinde props parantez içerisine yazılmak zorundadır
// props dışardan değer alma
function Fcom(props) {
  return (
    <>

      <h4 style={{color:"lightcoral"}}>{props.title}</h4> {/* inline css gönder */}
      <p>{props.text}</p>
      <h5 className='author2'>{props.author}</h5> {/* class ile css gönder */}
      <hr />
      
    </>
  )
}

export default Fcom
