import React from 'react'

function Tile(props) {
  return (
    <button
      className="square"
      style={props.tileAreas}
      onClick={() => props.handleClick(props.innerValue)}
    >
      {props.innerValue}
    </button>
  )
}

export default Tile
