const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault()
    this.setState({
      board: [null, null, null, null, null, null, null, null, null]
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
    let newBoard = this.state.board
    newBoard[i] = this.state.turn
    this.setState({
      turn: this.state.turn === "X" ? "O" : "X"
    })
  }

  // getWinner () {
  //   let board = this.state.board
  //   solutions.map((win_array)=>{
  //       if (board[win_array[0]]===board[win_array[1]] && board[win_array[1]]===board[win_array[2]]){
  //         debugger
  //         return board[win_array[0]]
  //       }
  //     })
  //     debugger
  //   }
// Don't know why it's not returning the winner above.


  getWinner () {
     const results = solutions.map(
       (solution) => solution.map((i) => this.state.board[i]).join('')
     );
     const row = results.find(
       (result) => result === 'XXX' || result === 'OOO'
     );
     debugger
     return row && row[0];
   }

  //each array within solutions is a set of win conditions.
      //so you need to iterate twice

  isComplete () {
     return this.state.board.every((field) => field);
   }
  //should not show status while isComplete is false

  render () {
    return (
      <div className = "game">
      <Board className = "board" board={this.state.board} onClick={this.handleClick}/>

      { this.isComplete()? <Status winner={this.getWinner()}/> : null}

      <button className = "game__reset" onClick={this.handleReset}> Reset Game </button>
      </div>
    );
  }
}

module.exports = Game;
