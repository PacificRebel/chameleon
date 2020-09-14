import React, { Component } from 'react'
import Colour from './Colour'

class Chameleon extends Component {
  constructor(props) {
    super(props)
    this.state = {currentColour: "black"}
  }

  changeToRed = () => {

    // const newColour = this.state.currentColour.changeToRed((colour) => {
    //   //something
    // })
    this.setState({currentColour: "red"})
  }

  render() {
    return(
      <div className="change-to-red">
        <button onClick={this.changeToRed}>Change to Red</button>
          <Colour heli={this.state.currentColour}/> 
      </div>
    )
  }
}

export default Chameleon;
