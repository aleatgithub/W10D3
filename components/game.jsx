
import Board from './board';
import React from 'react';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component {

    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(9, 10);
        this.state = { board: board } //state refers to the dynamic elements 
        //we will call update game
        this.updateGame = this.updateGame.bind(this); //binding function to constructor
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(tile, flagged) {
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({ board: this.state.board });
    }

    restartGame() {
        const board = new Minesweeper.Board(9, 10);
        this.setState({ board: board });
      }

    render() {
        let modal;
        if (this.state.board.lost() || this.state.board.won()) {
          const text = this.state.board.won() ? "You won!" : "You lost!";
          modal =
            <div className='modal-screen'>
              <div className='modal-content'>
                <p>{text}</p>
                <button onClick={this.restartGame}>Play Again</button>
              </div>
            </div>;
        }

        return (
          <div>
            {modal}
            <Board board={this.state.board} updateGame={this.updateGame} />
          </div>
        );
      }
}

export default Game; 
//state and props are both js objects
// state is not valid component in the constructor yet 
// render is a representation of what a component looks like at any given moment
// we never actually call render ourselves. we get it to be called by making changes
//to props or state. 