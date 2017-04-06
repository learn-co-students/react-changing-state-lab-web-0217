const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [
        null, null, null,
        null, null, null,
        null, null, null
      ],
      turn: "X"
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: Array(9).fill(null)
    });
  }

  handleClick (i, ev) {
    ev.preventDefault();
    const board = this.state.board.slice();
    board.splice(i, 1, this.state.turn);
    const turn = this.state.turn === 'X' ? 'O' : 'X';
    this.setState({
      board: board,
      turn: turn
    });
  }

  getWinner () {
    let board = this.state.board
    let result = solutions.reduce((tie, solution) => {
      if (board[solution[0]] === board[solution[1]] && board[solution[1]] === board[solution[2]]) {
        return board[solution[0]]
      } else {
        return tie
      }
    }, undefined)

    return result
  }

  isComplete () {
    return this.state.board.every((field => field))
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick} />
        { this.isComplete() ? <Status winner={this.getWinner()} /> : null }
        <button className='game__reset' onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

module.exports = Game;
