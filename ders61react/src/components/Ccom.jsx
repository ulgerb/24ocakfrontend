import React, { Component } from 'react'
import './Ccom.css'

// rcc class component oluşturur
// props değişkenlerin yerini hazırlar
// props ile oluşturulan değişkenlere dışardan değerler girilmelidir
class Ccom extends Component {
  render() {
   // document.body.className = "mybody";

    let {asd1,asd2} = this.props;
    return (
      <div>
         <h4 style={{backgroundColor:"lightblue"}}>{this.props.title}</h4>
         <p>{this.props.text}</p>
         <h5 className='author'>{this.props.author}</h5>
         <p>{asd1}</p>
         <p>{asd2}</p>
         <hr />
      </div>
    )
  }
}

export default Ccom;