import { useContext, useState } from "react";
import Card_list from "./components/Card_list";
import { data_cards } from "./contexts/Data_cards";
import { ContextCards } from "./contexts/ContextCards";
import { ContextVideo } from "./contexts/ContextVideo";
import Video from "./components/Video";


function App() {


  // 1) contexts klasörü içerisine createContext oluşturulur
  // 2) app.js içerisine oluşturulan context çekilir ve Provider olarak sağlayıcı gönderme işlemi yapar
  // 3) kullanmak istediğimiz sayfada useContext oluştururuz const context = useContext(ContextCards)
  
  // CONTEXT 

  // UseState
  const [cards, setCards] = useState(data_cards)
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([
    "ahmet", "mehmet", "ayşe", "fatma"
  ])
  const [video, setVideo] = useState([
    "film 1", "film 2", "film 3", "film 4"
  ])

  return (
    <>
      <ContextVideo.Provider value={{video,setVideo}}>
      <ContextCards.Provider value={{cards,counter,users}} >
    
      <div className="container">
        <h2>Anasayfa</h2>
          <Video/>

          <Card_list/>
      </div>
      
      </ContextCards.Provider>
      </ContextVideo.Provider>
    </>
  );
}

export default App;
