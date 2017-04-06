module.exports = Field;

const React = require('react');

class Field extends React.Component {

  render () {
    const { player, onClick } = this.props;
    let turn
    if (player==='X' || player==='O') {
      turn = true
    } else {
      turn = false
    }
    return (
      <button className="field" onClick={onClick} disabled={turn}>
        {player}
      </button>
    );
  }
}
module.exports = Field;
