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
    ev.preventDefault()
      this.setState({
      board: [null, null, null, null, null, null, null, null, null]
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
    let newBoard = this.state.board
    newBoard[i] = this.state.turn
    let nextTurn = (this.state.turn === "X" ? "O" : "X")
    this.setState({
      board: newBoard,
      turn: nextTurn
    })
  }

  getWinner () {
    if (this.wonGame()) {
      return this.state.board[this.wonGame()[0]]
    }
    return undefined
  }

  wonGame () {
    return solutions.find((solution) => {
      return this.state.board[solution[0]] === this.state.board[solution[1]] && this.state.board[solution[0]] === this.state.board[solution[2]] && this.state.board[solution[2]] !== null
    })
  }

  isComplete () {
    if (this.wonGame()) {
      return true
    } else if ((this.state.board.filter((field) => {return field === "X" || field === "O" })).length === 9){
      return true
    }
    return false
  }

  render () {
    return (
      <div className="game">
        <Board className="board" board={this.state.board} turn={this.state.turn} onClick={this.handleClick}/>
        {this.isComplete() ? <Status winner={this.getWinner()} /> : null}
        <button className="game__reset" name="Reset" onClick={this.handleReset}>New Game</button>
      </div>
    );
  }
}

module.exports = Game;
