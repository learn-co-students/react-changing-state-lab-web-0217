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
      winner: undefined
    };
    this.handleReset=this.handleReset.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.isComplete=this.isComplete.bind(this);
    this.getWinner=this.getWinner.bind(this)
  }

  handleReset (ev) {
    ev.preventDefault()
    this.setState({
      board: [null, null, null, null, null, null, null, null, null]
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
    let newBoard=this.state.board
    newBoard[i]=this.state.turn
    let nextTurn
    if (this.state.turn==="X"){
      nextTurn="O"
    } else {
      nextTurn="X"
    }
    this.setState({
      board: newBoard,
      turn: nextTurn
    })
    this.getWinner()
    this.isComplete()
  }

  getWinner() {
    let xBoard = this.state.board.map((e, i) => e === "X" ? i : '').filter(String)
    let oBoard = this.state.board.map((e, i) => e === "O" ? i : '').filter(String)
    let xWin = solutions.filter((solution) => {
      return xBoard.includes(solution[0]) && xBoard.includes(solution[1]) && xBoard.includes(solution[2])
    })
    let oWin = solutions.filter((solution) => {
      return oBoard.includes(solution[0]) && oBoard.includes(solution[1]) && oBoard.includes(solution[2])
    })
    if (xWin.length != 0) {
       return "X"
    } else if (oWin.length != 0) {
       return "O"
    } else {
       return undefined
    }
  }

  isComplete () {
    let winner = this.getWinner()
    if (winner != undefined) {
      return true
    } else if (this.state.board.indexOf(null) === -1) {
      return true
    } else {
      return false
    }
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick}/>
        <button className="game__reset" onClick={this.handleReset}>Reset</button>
        {this.isComplete() ? <Status winner={this.getWinner()}/> : null}
      </div>
    );
  }
}

module.exports = Game;
