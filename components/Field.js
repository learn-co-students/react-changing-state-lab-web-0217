const React = require('react');

class Field extends React.Component {
  constructor(){
    super()
  }

  render () {
    const { player, onClick } = this.props;

    return (
      <button className="field" disabled={!!this.props.player} onClick={onClick}>
        {this.props.player}
      </button>
    )
  }
}

module.exports = Field;
