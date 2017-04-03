const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

function isNull(element) {
  return element === null
}

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
        board: [null, null, null, null, null, null, null, null, null],
        turn: 'X'
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
    let newBoard = this.state.board
    newBoard[i] = this.state.turn
    let newTurn = this.state.turn === 'X' ? 'O' : 'X'
    this.setState({
      board: newBoard,
      turn: newTurn
    })
    this.getWinner()
  }

  getWinner () {
    let winner
    solutions.map(s => {
      if (this.state.board[s[0]] === this.state.board[s[1]] && this.state.board[s[0]] === this.state.board[s[2]] && this.state.board[s[0]] !== null) {
        winner = this.state.board[s[0]]
      }
    })
    return winner
  }

  isComplete () {
    return (this.state.board.filter(isNull).length === 0)
  }

  render () {
    return (
      <div className="game">
          <Board board={this.state.board} onClick={this.handleClick}/>
          {this.getWinner() || this.isComplete() ? <Status winner={this.getWinner()}/> : null}
          <button className="game__reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

module.exports = Game;
