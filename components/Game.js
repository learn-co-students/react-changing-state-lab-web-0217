const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: "X",
      winner: null
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getWinner = this.getWinner.bind(this);
    this.wonGame = this.wonGame.bind(this);
    this.isComplete = this.isComplete.bind(this);

  }

  handleReset (ev) {

  }

  handleClick (i, ev) {
    let newBoard = this.state.board
    newBoard[i] = this.state.turn
    let nextTurn = (this.state.turn === "X" ? "O" : "X")
    this.setState({
      board: newBoard,
      turn: nextTurn
    })
    if (this.isComplete()){
      this.getWinner()
    }
  }

  getWinner () {
  }

  wonGame () {
    return solutions.find((solution) => {
      return this.state.board[solution[0]] === this.state.board[solution[1]] && this.state.board[solution[0]] === this.state.board[solution[2]] && this.state.board[solution[2]] !== null
      // FIX WINS OF BLANK SPACES
    })
  }

  isComplete () {
    if (this.wonGame()) {
      debugger
      this.state[this.wonGame()[0]]
      return true
    } else if (false){
      return true
    }
    return false
  }

  render () {
    return (
      <div className="game">
        <Board className="board" board={this.state.board} turn={this.state.turn} onClick={this.handleClick}/>
      </div>
    );
  }
}

module.exports = Game;
