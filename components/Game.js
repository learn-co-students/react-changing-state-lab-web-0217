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
    ev.preventDefault();
    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    })
  }

  handleClick (i, ev) {
    ev.preventDefault();
    let tempBoard = this.state.board;
    tempBoard[i] = this.state.turn === 'X' ? 'X' : 'O'
    const turn = this.state.turn === 'X' ? 'O' : 'X';
    this.setState({ board: tempBoard, turn: turn });
  }

  getWinner () {
    let winner = solutions.map(
      (solution) => solution.map((i) => this.state.board[i]).join('')
    );
    winner = winner.find((w) => w === "OOO" || w === "XXX");
    return winner && winner[0];
  }

  isComplete () {
    return this.state.board.every((field) => field !== null);
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick} />
        {this.isComplete() ? <Status winner={this.getWinner()} /> : null}
        <button className='game__reset' onClick={this.handleReset}>Reset</button>
      </div>
      );
  }
}

module.exports = Game;
