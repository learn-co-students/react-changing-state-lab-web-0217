import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null,null,null,
              null,null,null,
              null,null,null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (event) {
    this.setState({
      board: [null,null,null,
              null,null,null,
              null,null,null]
    })
    event.preventDefault()
  }

  handleClick (i, ev) {
    ev.preventDefault()
    const board = this.state.board
    board[i] = this.state.turn
    this.setState({
      board: board,
      turn: this.switchTurn(this.state.turn)
    })
  }

  switchTurn(turn){
    return turn === 'X'? 'O' : 'X'
  }

  getWinner(){
    const sets = solutions.map((set)=>{
      return (set.map((i)=>{
        return this.state.board[i]}).join(''))
      })

    if (sets.includes('XXX')){
      return 'X'
    }else if(sets.includes('OOO')){
      return 'O'
    }
  }

  isComplete() {
    if ((this.getWinner() || !this.state.board.includes(null))){
      return <Status winner={this.getWinner()}/>
    }
    return <p>Keep Playing!</p>
  }

  render () {
    return (
      <div className="game">
          <Board board={this.state.board} onClick={this.handleClick}/>
          {this.isComplete()}
          <button className="game__reset" onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}
