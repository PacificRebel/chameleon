import React, { Component } from 'react'
import Colour from './Colour'
import "./App.css";

class Chameleon extends Component {
  constructor(props) {
    super(props)
    this.state = {currentColour: "black"}
  }

changeToRed = () => {
  this.setState({currentColour: "red"})
}

changeToBlue = () => {
  this.setState({currentColour: "blue"})
}

changeToYellow = () => {
  this.setState({currentColour: "yellow"})
}

  render() {
    const buttonStyle = {
      fontFamily: "Quattrocento",
      fontSize: 40
    }
    return(
      <div className="change-colour">
      <h1 style={buttonStyle}>
        <button onClick={this.changeToRed}>Change to Red</button>
        <button onClick={this.changeToBlue}>Change to Blue</button>
        <button onClick={this.changeToYellow}>Change to Yellow</button>
          <Colour newColour={this.state.currentColour}/>
          </h1>
      </div>
    )
  }
}
export default Chameleon;
