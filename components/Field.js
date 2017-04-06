const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    let disable
    if (player == "X" || player == "O") {
      disable = true
    } else {
      disable = false
    }
    return (
      <button className="field" onClick={onClick} disabled={disable}>
        {player}
      </button>
    );
  }
}

module.exports = Field;
