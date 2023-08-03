import { useContext, useState } from "react";
import { data_cards } from "./contexts/Data_cards";
import { ContextCards } from "./contexts/ContextCards";
import { ContextVideo } from "./contexts/ContextVideo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";


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
      <ContextVideo.Provider value={{ video, setVideo }}>
        <ContextCards.Provider value={{ cards, counter, users, setCards }} >
          <BrowserRouter>
          <Navbar/>
          {/* <Link to={"/Anasayfa"} className="btn btn-success">a tagı yerine kullanıyoruz</Link> */}
            { /* Sayfayla ilgili url ayarları yapıyoruz */ }
            <Routes>
              <Route path="/" Component={Home} /> 
              <Route path="/Hakkımızda" Component={About} /> {/* url'e Hakkımızda yazınca About componenti çalışır */}
              <Route path="/İletişim" Component={Contact} /> 
            </Routes>
          </BrowserRouter>

        </ContextCards.Provider>
      </ContextVideo.Provider>
    </>
  );
}

export default App;
