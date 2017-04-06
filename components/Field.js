const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;

    return (
      <button className="field"
              disabled={!!player}
              key={this.props.key}
              onClick={onClick}>
              {player ? player : "_______"}
      </button>
    );
  }
}

module.exports = Field;
