const React = require('react')
const Board = require('./Board')
const Status = require('./Status')
const solutions = require('./solutions')

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      board: Array(9).fill(null),
      turn: 'X'
    }

    this.handleReset = this.handleReset.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleReset (event) {
    event.preventDefault()
    this.setState({
      board: Array(9).fill(null)
    })
  }

  isX(){
    if (this.state.turn === 'X') {
      return true
    } else {
      return false
    }
  }

  handleClick (i, event) {
    event.preventDefault()
    let board = this.state.board

    board[i] = this.state.turn
      this.setState({
        board: board,
        turn: this.isX() ? 'O' : 'X'
      })
  }

  getWinner () {

   //  const results = solutions.map(
   //    (solution) => solution.map((i) => this.state.board[i]).join('')
   //  )
   //  const row = results.find(
   //    (result) => result === 'XXX' || result === 'OOO'
   //  )
   //  console.log(row && row[0])
   // return row && row[0]

    let board = this.state.board
    solutions.map((row) => {
      if ((board[row[0]] !== null) && (board[row[0]] === board[row[1]]) && (board[row[0]] === board[row[2]])) { 
        return board[row[0]]
      }
    })
  }

  isComplete () {
    this.state.board.map((spot) => {
      if (spot === null) {
        return false
      }
    })
    return true
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick} />
        {this.isComplete() ? <Status winner={winner} /> : null}
        <button className="game__reset" onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

module.exports = Game
