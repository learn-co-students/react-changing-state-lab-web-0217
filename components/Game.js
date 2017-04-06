const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null,
        null, null, null,
        null, null, null],
        turn: 'X'
      };

      this.handleReset = this.handleReset.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    handleReset (ev) {
      ev.preventDefault()
      this.setState({board: [null, null, null,
      null, null, null,
      null, null, null]})
    }

    handleClick (i, ev) {
      ev.preventDefault()
      let board = this.state.board.slice(), turn = this.state.turn
      board.splice(i, 1, turn)
      this.setState({board: board})
      turn = turn === 'X' ? 'O' : 'X'
      this.setState({turn: turn})
    }

    getWinner () {
      const board = this.state.board
      for (var i = 0; i < solutions.length; i++) {
        if (board[solutions[i][0]] === 'X' &&
        board[solutions[i][1]] === 'X' &&
        board[solutions[i][2]] === 'X') {
          return 'X'
        } else if (board[solutions[i][0]] === 'O' &&
        board[solutions[i][1]] === 'O' &&
        board[solutions[i][2]] === 'O') {
          return 'O'
        }
      }
      return undefined
    }

    isComplete () {
      return this.state.board.every((field) => field)
    }

    render () {
      return (
        <div className="game">
          <Board board={this.state.board} onClick={this.handleClick}/>
          { this.isComplete() ? <Status winner={this.getWinner()}/> : null }
          <button className="game__reset" onClick={this.handleReset}>Reset</button>
        </div>
      );
    }
  }

  module.exports = Game;
