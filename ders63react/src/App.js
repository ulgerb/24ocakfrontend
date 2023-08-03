import { useState } from "react";
import Users from "./components/Users";
import Cusers from "./components/Cusers";

function App() {
  

  const [users, setUsers] = useState([
    { fname: "Ayşe", username: "ayse1", password: "111", age: "29" },
    { fname: "Mehmet", username: "mehmet2", password: "222", age: "24" },
    { fname: "Ali", username: "ali3", password: "333", age: "22" },
    { fname: "Veli", username: "veli4", password: "444", age: "35" },
    { fname: "Fatma", username: "fatma5", password: "555", age: "41" },
  ])
  
  return (
    <div className="App">
      <Users users={users} />
      <Cusers users={users} />
    </div>
  );
}

export default App;
