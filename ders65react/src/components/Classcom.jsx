import React, { Component } from 'react'

class Classcom extends Component {

   state = {
      increase:0,
      x : 0
   }

   componentDidMount(){  // bir kere çalışır
    console.log("HELLO");
   }

   componentDidUpdate(){
    console.log("State her güncellendiğinde çalışır");
   }
   
   render() {
    return (
      <div>
          <div className='text-center m-3'>
            <h2>Class Component</h2>
             <span>{this.state.increase} </span> <br />
             <input className='m-5' type="button" value={"Arttır"} onClick={() => { this.setState({increase: this.state.increase + 1}) }} />
          </div>
      </div>
    )
  }
}

export default Classcom