import React from 'react'
import "./App.css"

function Colour(props) {
  return (
    <div className="colour" style={{color: props.newColour}}>
      I am a Chameleon
    </div>
  )
}

export default Colour
