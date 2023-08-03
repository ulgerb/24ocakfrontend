import React from 'react'

function Contact() {
  return (
    <div className='container py-4'>
      <form action="" style={{width:"500px", margin:"auto"}}>
         <label className='form-label' htmlFor="">İsim Soyisim</label>
         <input className='form-control' type="text" />
         <textarea className='form-control' placeholder='Ne hakkında iletişime geçmek istiyorsunuz?' cols="30" rows="10"></textarea>
      </form>
    </div>
  )
}

export default Contact