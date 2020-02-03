import React, { Component } from 'react';
import Tile from './Tile';

class Board extends Component {

  constructor(props) {
    super(props);
    const boardWidth = 3;
    const boardHeight = 3;
    const boardSize = boardWidth * boardHeight;
    const tileArrangement = new Array(boardSize).fill(0).map((_, i) => i);
    tileArrangement[boardSize-1] = null;
    console.log(tileArrangement);

    this.state = {
      boardWidth,
      boardHeight,
      tileArrangement,
      startingOrder: new Array(boardSize).fill(0).map((_, i) => i + 1).sort(() => Math.random() - 0.5)
    }
    this.shuffle()
  }

  moveTiles = (val) => {
    
  }

  checkWiningStatus = () => {

  }

  shuffle = () => {
    
  }

  getTilePosition = (tileIndex) => {
    const left = 100 * (tileIndex % this.state.boardWidth) / this.state.boardWidth;
    const top = 100 * (Math.floor(tileIndex / this.state.boardWidth) % this.state.boardHeight) / this.state.boardHeight;
    return {
      top: `${top}%`,
      left: `${left}%`
    };
  }

  renderTiles() {
    return (
      <div>
        { this.state.tileArrangement
            .filter(v => v !== null)
            .map((v, i) => <Tile key={v} handleClick={this.moveTiles} innerValue={v + 1} tileAreas={this.getTilePosition(i)} />) }
      </div>
    )
  }

  render() {
    return (
      <div className="board">
        {this.renderTiles()}
      </div>
    );
  }
}

export default Board;
