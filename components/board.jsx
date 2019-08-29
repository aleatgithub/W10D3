import React from 'react'; 
import Tile from './tile';


class Board extends React.Component {


    constructor(props) {
        super(props);
        this.renderRows = this.renderRows.bind(this);
        this.renderTiles = this.renderTiles.bind(this);
     };


       //we will have an inner call to map, which means we should set up two functions:
        //one mapping the rows and one mapping tiles. we wil call the map on tile within the
        //map on row. 
        //board has a property of grid ( look at source in minesweeper.js) so we can 
        //map over that to find the 

     render() {
        const board = this.props.board;
        // const that = this; //not sure why we need this here but the solution had it. so 
        return (
                <div id="board">
                  {this.showRows()}
                </div>

              );
     }

     showRows() {
     const board = this.props.board;
       return board.grid.map ((row, index) => {
            return (
                <div className="row"> { this.showTiles(row, index)}
                </div>
            );
        });
     };

      showTiles(row, i) {
        const board = this.props.board;
         return row.map((tile, i) =>{
             return (
                 <Tile 
                 tile={tile}
                 updateGame={this.props.updateGame}
                 />
             )
         })
    }
    
}

export default Board;