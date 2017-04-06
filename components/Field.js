const React = require('react');

class Field extends React.Component {

  render () {
    let player = this.props.player
    let onClick = this.props.onClick
    return (
      <button disabled={!!player} className="field" onClick={onClick}>{player}
      </button>
    );
  }
}

module.exports = Field;
