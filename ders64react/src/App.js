import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './components/User';

function App() {
  const [users, setUsers] = useState([
    {id:1, fname: "Ayşe", username: "ayse1", password: "111", age: "29",color:"red" },
    {id:2, username: "mehmet2", password: "222", age: "24",color:"lightblue" },
    {id:3, fname: "Ali", username: "ali3", password: "333", age: "22",color:"purple" },
    {id:4, fname: "Veli", password: "444", age: "35",color:"gray" },
    {id:5, fname: "Fatma", username: "fatma5", password: "555", age: "41",color:"green" },
    {id:6, fname: "Ahmet", username: "ahmet5", password: "666", age: null ,color:"yellow"},
    {id:7, fname: "Hayriye", username: "hayriye5", password: "777",color:"brown" },
  ])

  const myColor = (id,e)=>{
    // console.log(e.target.value);
    // ...user => kullanıcının içerisindeki değerleri parçalayarak getirir
    // yani user = {...user}
    // {...user, fname:"Değişti"} => içerisindeki değerleri getirir
    // ama fname değişir
    console.log(e,id); // 1 2 3 input id numarası geliyor

    setUsers(
      users.map((user)=>{
        return(
          
            (id === user.id) ? {...user,color: e.target.value}: user
          
        )
      })
    )
    
    
   
  }
  
  return (
    <div className="App">
      
      <div style={{border:"4px solid black"}}>
          {
            users?.map((user)=>{
              return(
                <div key={user.id} style={{backgroundColor: user.color }}>
                  <User id={user.id} myColor={myColor} fname={user.fname} username={user.username} age={user.age} />
                </div>
              )
            })
          }
      </div>
      
    </div>
  );
}

export default App;
