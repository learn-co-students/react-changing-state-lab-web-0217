const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    let button
    if (player) {
      button = <button className="field" onClick={onClick} disabled> {player} </button>
    } else {
      button = <button className="field" onClick={onClick} disabled={false}> {player} </button>
    }
    return button
  }
}

module.exports = Field;
