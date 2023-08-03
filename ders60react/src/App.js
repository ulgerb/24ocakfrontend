import './App.css';
import Com from './Com';
import Comfunc from './Comfunc';
import Navbar from './Navbar';

function App() {
  let list1 = [1,2,3]
  return (
    
    <div className="App">
        <Navbar item1="Anasayfa" item2="Ürünler" item3="Hakkımızda" item4="İletişim"/>

      <h3>Merhaba React</h3>
      <p>5 + 5</p>
      <p>{ "5"+"5" }</p>
      <p>{ 5*4 }</p>
      {
        list1.forEach(element => {
          
        })
      }
      <p>{ 5+"merhaba" }</p>
      <h3>
        <Com></Com>
        <Comfunc fname="Ahmet" product="TV" category="Elektronik"/>
        <Comfunc product="Telefon" fname="Mehmet" category="Elektronik"/>
      </h3>
    </div>
  );
}

export default App;
