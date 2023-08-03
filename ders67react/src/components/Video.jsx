import React, { useContext } from 'react'
import { ContextVideo } from '../contexts/ContextVideo'
import { ContextCards } from '../contexts/ContextCards'

function Video() {
   const contextVideo = useContext(ContextVideo)
   const contextCards = useContext(ContextCards)

   console.log(contextCards);
   return (
      <div className='row my-3'>
         <h3>Videolar</h3>

         {
            contextVideo.video.map((v) => {
               return (
                  <div className="col-3">
                     <div className="card">
                        <div className="card-header text-bg-dark">{v}</div>
                        <div className="card-body">
                           <div className="btn btn-primary">Video Başlat</div>
                        </div>
                     </div>
                  </div>
               )
            })
         }

      </div>
   )
}

export default Video