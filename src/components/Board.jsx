import React, { Component } from 'react';
import Tile from './Tile';

class Board extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            tileAreas: {
                t1: {top:"0%", left:"0%"},
                t2: {top:"0%", left:"33%"},
                t3: {top:"0%", left:"66%"},
                t4: {top:"33%", left:"0%"},
                t5: {top:"33%", left:"33%"},
                t6: {top:"33%", left:"66%"},
                t7: {top:"66%", left:"0%"},
                t8: {top:"66%", left:"33%"},
                t9: {top:"66%", left:"66%"}
            },
            emptyTile: "t9"
        }
    }

    moveTiles = (val) => {

        const {emptyTile, tileAreas} = this.state
        const tileValue = `t${val}`

        const top = {
            top: parseInt(tileAreas[`t${val}`].top) - 33 + "%",
            left: tileAreas["t"+val].left
        }
        const bottom = {
            top: parseInt(tileAreas[`t${val}`].top) + 33 + "%",
            left: tileAreas["t"+val].left
        }
        const right = {
            top: tileAreas["t"+val].top,
            left: parseInt(tileAreas[`t${val}`].left) + 33 + "%"
        }
        const left = {
            top: tileAreas["t"+val].top,
            left: parseInt(tileAreas[`t${val}`].left) - 33 + "%"
        }
        const emptyTilePosition = {
            top: tileAreas[emptyTile].top,
            left: tileAreas[emptyTile].left
        }

        if(JSON.stringify(emptyTilePosition) === JSON.stringify(right)
        || JSON.stringify(emptyTilePosition) === JSON.stringify(left)
        || JSON.stringify(emptyTilePosition) === JSON.stringify(top)
        || JSON.stringify(emptyTilePosition) === JSON.stringify(bottom)){
            this.setState(prevState => {
                let tileAreas = {...prevState.tileAreas}
                tileAreas[prevState.emptyTile] = tileAreas[tileValue]
                tileAreas[tileValue] = emptyTilePosition
                return {tileAreas}
            })
        }

    }
    
    renderTiles(){
        return(
            <div>
                <Tile handleClick={this.moveTiles} innerValue="1" tileAreas={this.state.tileAreas.t1}/>
                <Tile handleClick={this.moveTiles} innerValue="2" tileAreas={this.state.tileAreas.t2} />
                <Tile handleClick={this.moveTiles} innerValue="3" tileAreas={this.state.tileAreas.t3} />
                <Tile handleClick={this.moveTiles} innerValue="4" tileAreas={this.state.tileAreas.t4} />
                <Tile handleClick={this.moveTiles} innerValue="5" tileAreas={this.state.tileAreas.t5} />
                <Tile handleClick={this.moveTiles} innerValue="6" tileAreas={this.state.tileAreas.t6} />
                <Tile handleClick={this.moveTiles} innerValue="7" tileAreas={this.state.tileAreas.t7} />
                <Tile handleClick={this.moveTiles} innerValue="8" tileAreas={this.state.tileAreas.t8} />
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
