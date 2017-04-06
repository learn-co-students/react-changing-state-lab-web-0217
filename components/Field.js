const React = require('react')

class Field extends React.Component {
  render () {
    const { player, onClick } = this.props
    return (
      <button className="field" onClick={onClick} disabled={player === undefined ? false : true}>
      	{player}
      </button>
    )
  }
}

module.exports = Field
