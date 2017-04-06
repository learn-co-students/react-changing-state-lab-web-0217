const React = require('react')
const Field = require('./Field')

class Board extends React.Component {
  render () {

    const { board, onClick } = this.props

    return (
      <div className="board" >
      	{board.map((spot, index) => <Field onClick={onClick.bind(null, index)} player={spot} />)}
      </div>
    )
  }
}

module.exports = Board
