import { useState } from 'react';
import './App.css';
import Ccom from './components/Ccom';
import Fcom from './components/Fcom';
// ./ => aynı dizin
// ../ => bir üst klasör dizini

function App() {

  let [x,setX] = useState("Merhaba")
  
  return (
    <div className="App">
      <div>
        <h2>{x} Class Component</h2>
        <Ccom title="Neden Borsa Yükselişte?" author="Berat Çoban" text="lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"/>
        <Ccom 
          title= "Basketbol Liginin En İnanılmaz Anları"
          text="ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem "
          author="Deniz Devrim"
          asd1= "asdasd"
          asd2= {x}
        />
        <Ccom title="başlık 3" text="text 3" author="yazar 3"/>
      </div>

      <div>
        <h2>Functions Component</h2>
        <Fcom 
          title="Yeni Çağın Belalı Oyunu"
          text="lorem lorem lorem lorem lorem lorem lorem lorem "
          author="Emre Elibal"
        />

        <Fcom title="Günün En İlgi Çekici Yemekleri" text="ipsum ipsupm ipsum ipsupm ipsum ipsupm" author="Aras Yıldırım" />
        
      </div>
      
    </div>
  );
}

export default App;
