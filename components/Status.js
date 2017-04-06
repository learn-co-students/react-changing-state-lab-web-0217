const React = require('react')

class Status extends React.Component {
  render () {
    const { winner } = this.props
    return (
      <div className="status">
      	{winner === undefined ? "Tie": `${winner} wins`} 
      </div>
    )
  }
}

module.exports = Status
