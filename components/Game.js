const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X',
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isComplete = this.isComplete.bind(this)
    this.getWinner = this.getWinner.bind(this)
  }

  handleReset(e) {
    e.preventDefault()
    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
    })
  }

  handleClick(i, e) {
    e.preventDefault()
    let newBoard = this.state.board.slice();
    newBoard.splice(i, 1, this.state.turn);
    let newTurn = this.state.turn === 'X' ? 'O' : 'X';
    this.setState({
      board: newBoard,
      turn: newTurn,
    });
  }

//why is my solution not passing two test cases?

  getWinner () {
    const results = solutions.map(
      (solution) => solution.map((i) => this.state.board[i]).join('')
    );
    const row = results.find(
      (result) => result === 'XXX' || result === 'OOO'
    );
    return row && row[0];
  }

  // getWinner() {
  //   let board = this.state.board
  //   solutions.forEach(function(s) {
  //     if (board[s[0]] == board[s[1]] && board[s[1]] == board[s[2]] && board[s[0]] != null)
  //       return board[s[0]]
  //   })
  //   return undefined
  // }

  isComplete() {
    return (this.state.board.includes(null)) ? false : true
  }

  render () {
    return (
      <div className="game">
        <button className='game__reset' onClick={this.handleReset}></button>
        <Board board={this.state.board} onClick={this.handleClick} />
        { this.isComplete() ? <Status winner={this.getWinner()}/> : null }
      </div>
    );
  }
}

module.exports = Game;
