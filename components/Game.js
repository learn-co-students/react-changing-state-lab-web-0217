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
      turn: "X"
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault()
    this.setState({
      board: [null, null, null,
              null, null, null,
              null, null, null],
      turn: "X"
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
    const newboard = this.state.board
    newboard[i] = this.state.turn

    this.setState({
      board: newboard
    })
    if (this.state.turn==="X"){
      this.setState({
        turn: 'O'
      })
    }else{
      this.setState({
        turn: 'X'
      })
    }
  }

  getWinner () {
    var winnerX = 0
    var winnerO = 0
    solutions.forEach((solution)=>{
      let x = this.state.board[solution[0]]
      let y = this.state.board[solution[1]]
      let z = this.state.board[solution[2]]
      if((x==="X") && (y==="X") && (z==="X")){
        winnerX += 1
      } else if((x==="O") && (y==="O") && (z==="O")){
        winnerO += 1
      }
    })

    if (winnerX > winnerO){
      return 'X'
    } else if (winnerO > winnerX){
      return 'O'
    } else {
      return undefined
    }
  }

  isComplete (){
    if(this.state.board.filter(Boolean).length===9){
      return <Status winner={this.getWinner()} />
    }
  }

  render () {
    return (
      <div className="game">
        {this.isComplete()}
        <Board board={this.state.board} onClick={this.handleClick} />
        <button className="game__reset" onClick={this.handleReset}></button>
      </div>
    );
  }
}

module.exports = Game;
