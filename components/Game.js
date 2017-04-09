import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor () {
    super();
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
    ev.preventDefault()
    this.setState({
      board: [
        null, null, null,
        null, null, null,
        null, null, null
      ],
      turn: "X"
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
    this.state.board.splice(i,1,this.state.turn)
    this.setState({
      turn: this.state.turn==="X" ? "O" : "X",
      //board: this.state.board.splice(i,1,this.state.turn)
    })

  }

  getWinner () {
    const tripletArray = solutions.map((solution)=>
      solution.map((el)=>this.state.board[el]).join(""))

    const winningRow = tripletArray.find((triplet)=> triplet === "XXX" || triplet === "OOO")
    return winningRow && winningRow[0]
  }


  isComplete () {
    return this.state.board.every(ele=>ele)
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick}/>
        {(this.getWinner() && !this.isComplete()) ? <Status winner={this.getWinner()}/> : null}
        {this.isComplete() ? <Status winner={this.getWinner()}/> : null}
        <button className="game__reset" onClick={this.handleReset}>Reset Game</button>
      </div>
    );
  }
}
