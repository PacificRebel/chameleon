import React from 'react'

function Colour(props) {
  return (
    <div className="colour" style={{color: props.newColour}}>
      I am a Chameleon
    </div>
  )
}

export default Colour
