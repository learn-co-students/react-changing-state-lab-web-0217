const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getWinner = this.getWinner.bind(this)
    this.isComplete = this.isComplete.bind(this)
  }

  handleReset(ev) {
    ev.preventDefault()
    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    })
  }

  handleClick(i, ev) {
    ev.preventDefault()
    let newBoard = this.state.board
    newBoard[i] = this.state.turn
    this.setState({
      board: newBoard,
      turn: (this.state.turn === 'X' ? 'O' : 'X')
    })
  }

  getWinner() {
    let winner
    let self = this
    solutions.forEach(function(solution) {
      if (self.state.board[solution[0]] == "X" && self.state.board[solution[1]] == "X" && self.state.board[solution[2]] == "X") {
        winner = "X"
      } else if (self.state.board[solution[0]] == "O" && self.state.board[solution[1]] == "O" && self.state.board[solution[2]] == "O") {
        winner =  "O"
      }
    })
    return winner
  }

  isComplete() {
    let winner = this.getWinner()
    return !this.state.board.includes(null) || !!winner
  }

  render () {

    let self = this
    function dispStat() {
      if (self.isComplete()) {
        return <Status winner={self.getWinner()}/>
      } else {
        return ''
      }
    }

    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick}/>
        {dispStat()}
        <button className="game__reset" onClick={this.handleReset}>Reset Game</button>
      </div>
    );
  }
}

module.exports = Game;
