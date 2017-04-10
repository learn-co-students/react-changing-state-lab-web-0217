import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

const INITIAL_STATE = {
  board: [
    null, null, null,
    null, null, null,
    null, null, null
  ],
  turn: 'X'
}

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = INITIAL_STATE

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState(INITIAL_STATE);
  }

  handleClick (i, ev) {
    ev.preventDefault();
    const board = this.state.board.slice();
    board.splice(i, 1, this.state.turn);
    const turn = this.state.turn === 'X' ? 'O' : 'X';
    this.setState({ board, turn });
  }

  getWinner (board) {
    const results = solutions.map(
      (solution) => solution.map((i) => this.state.board[i]).join('')
    )
    const row = results.find(
      (result) => result === 'XXX' || result === 'OOO'
    )
    return row && row[0]
  }

  isComplete () {
    if ((this.getWinner() || !this.state.board.includes(null))) {
      return <Status winner={this.getWinner()}/>
    }
    return <p>Keep playing</p>
  }

  render () {
    return (
      <div className='game'>
        <Board board={this.state.board} onClick={this.handleClick} />
        {this.isComplete()}
        <button className='game__reset' onClick={this.handleReset}>handleReset</button>
      </div>
    );
  }
}
