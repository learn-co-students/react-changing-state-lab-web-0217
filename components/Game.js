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
      board: this.state.board.map((cell) => cell = null )
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
    this.state.board[i] = this.state.turn
    this.setState({
      board: this.state.board,
      turn: this.state.turn === 'X' ? 'O' : 'X',
    })
  }

  getWinner () {
    let board = this.state.board
    let winnerWinnerChickenDinner = solutions.reduce((tie, row) => {
      if((board[row[0]] === board[row[1]]) && (board[row[0]] === board[row[2]])){
        return board[row[0]]
      }else{
        return tie
      }
    }, undefined)
    return winnerWinnerChickenDinner
  }

  isComplete () {
    return this.state.board.includes(null)
  }

  render () {
    return (
      <div className="game">
        <button className="game__reset" onClick={this.handleReset}></button>
        { this.isComplete() ? null : <Status winner={this.getWinner()} /> }
        <Board board={this.state.board} onClick={this.handleClick} />
      </div>
    );
  }
}

module.exports = Game;
