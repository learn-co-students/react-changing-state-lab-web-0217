import React from 'react';
import Board from './Board';
import Status from './Status';
import Field from './Field'
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [
      null, null, null,
      null, null, null,
      null, null, null],
      turn: 'X'
    };


    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getWinner = this.getWinner.bind(this)
  }

  handleReset (ev) {
    ev.preventDefault()
    this.setState({
      board: [
      null, null, null,
      null, null, null,
      null, null, null],
      turn: 'X'
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
    let newBoard = this.state.board
    newBoard[i] = this.state.turn
      this.setState({
        board: newBoard,
        turn: this.state.turn === "X" ? "O" : "X"
      })
  }

  getWinner () {
    var winner
    solutions.forEach((solution) => {
      if (this.state.board[solution[0]] == "X" && this.state.board[solution[1]] == "X" && this.state.board[solution[2]] == "X") {
        winner = "X"
      } else if (this.state.board[solution[0]] == "O" && this.state.board[solution[1]] == "O" && this.state.board[solution[2]] == "O") {
        winner = "O"
     }
  })
    return winner
}

  isComplete () {
    return (!!this.getWinner() || this.state.board.every((field) => field))
  }

  render () {
    return (
      <div className="game">
       TIC TAC TOE
        <Board board={this.state.board} onClick={this.handleClick} />
        <button className="game__reset" onClick={this.handleReset}>Reset</button>
          {this.isComplete() ? <Status winner={this.getWinner()}/> : null}
      </div>
    );
  }
}
