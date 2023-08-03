import { useState } from "react";
import Card_list from "./components/Card_list";


function App() {
  let data_cards = [
    {id:1, title:"Card 1", subtitle:"Eşi bulunmayan card", price:12000, color:"red"},
    {id:2, title:"Card 2", subtitle:"Nadir cardlar arasındadır", price:5000, color:"lightblue"},
    {id:3, title:"Card 3", subtitle:"Sizin için en iyi özelliklere sahip", price:8000, color:"purple"},
  ]
  
  const [cards, setCards] = useState(data_cards)
  
  return (
    <div className="App">
      <Card_list cards={cards} setCards={setCards} />
    </div>
  );
}

export default App;
