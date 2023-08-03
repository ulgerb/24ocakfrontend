import React from 'react'
import Card_list from "../components/Card_list";
import Video from "../components/Video";
import {img1} from "../img/bgpln.png"

function Home() {
   return (
      <div className="container">
         <h2>Anasayfa</h2>
         <img width={500} src={img1} alt="" />
         
         <Video />

         <Card_list />
      </div>
   )
}

export default Home