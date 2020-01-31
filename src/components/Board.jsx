import React, { Component } from 'react';
import Tile from './Tile';

class Board extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            tileAreas: {
                t1: {},
                t2: {},
                t3: {},
                t4: {},
                t5: {},
                t6: {},
                t7: {},
                t8: {},
                t9: {}
            },
            positions : [
                {top:"0%", left:"0%"},
                {top:"0%", left:"33%"},
                {top:"0%", left:"66%"},
                {top:"33%", left:"0%"},
                {top:"33%", left:"33%"},
                {top:"33%", left:"66%"},
                {top:"66%", left:"0%"},
                {top:"66%", left:"33%"},
                {top:"66%", left:"66%"}
            ],
            emptyTile: "t9",
            startingOrder: [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5)
        }
        this.shuffle()
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
            },this.checkWiningStatus)
        }

    }

    checkWiningStatus = () =>{
        let i = 0
        let tileAreas = this.state.tileAreas
        let positions = this.state.positions
        while(i < 9){
            if(JSON.stringify(tileAreas["t"+(i+1)]) !== JSON.stringify(positions[i])){
                return
            }
            i++
        }
        alert("Congratulations!")
    }

    shuffle = () =>{
            let positions = this.state.positions
            let tileAreas = this.state.tileAreas
            let emptyTile  = this.state.emptyTile
            let i = 0
            while(i < 9){
                tileAreas["t"+(i+1)] = positions[this.state.startingOrder[i]-1]
                i++
            }
            emptyTile = positions[positions.length-1]
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
