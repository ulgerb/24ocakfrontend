import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  // const [değişken, değişkeni değiştiricek fonksiyon] = useState(default değer)
  // STATE START
  const [s1, setS1] = useState("Merhaba");
  const [s2, setS2] = useState(0);
  // STATE END
  
  let list = ["Merhaba", "Selam", "Naber", "Günün Nasıldı", "Hoşgeldin", "Buralarda Yenisin"]
  const myHello = ()=>{
    let index = Math.floor(Math.random() * 6);
    setS1(list[index])
  }
  
  // Arttırma
  const inCrease = () => {
    console.log(s2);
    if (s2 === 9){
      setS2(-9)
    }else{
      setS2(s2 + 1) // 0 1 2 3 4 5 6
    }
  }
  // Azaltma
  const deCrease = ()=>{
    (s2 === -9)? setS2(9) : setS2(s2 - 1);
    // koşul ? true ise : false ise; 
  }
  
  return (
    <div className="App">
      <Card title= {s1} myHello= {myHello} text={s2} myincrease={inCrease} mydecrease={deCrease}/>
    </div>
  );
}

export default App;
