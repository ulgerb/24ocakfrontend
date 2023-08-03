import { useState } from "react";
import { Context, Users } from "./contexts/Context";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Listadd from "./pages/Listadd"

function App() {

  const [users, setUsers] = useState(Users)

  return (
    <Context.Provider value={{users,setUsers}}>
      <BrowserRouter>
        <div className="d-flex gap-3">
          <Link to={"/"}>Liste</Link>
          <Link to={"/ListeyeEkle"}>Listeye Ekle</Link>
        </div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/ListeyeEkle" Component={Listadd} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
