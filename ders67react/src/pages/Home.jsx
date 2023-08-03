import React from 'react'
import Card_list from "../components/Card_list";
import Video from "../components/Video";

function Home() {
   return (
      <div className="container">
         <h2>Anasayfa</h2>
         <Video />

         <Card_list />
      </div>
   )
}

export default Home