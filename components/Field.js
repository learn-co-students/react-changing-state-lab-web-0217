const React = require('react');

class Field extends React.Component {

  addClass() {
    if(this.props.player === undefined){
      return false
    } else {
      return true
    }
  }

  render () {
    const { player, onClick } = this.props;
    return (
      <button disabled={this.addClass()} onClick={onClick} className="field">
        <h1>{player}</h1>
      </button>
    );
  }
}

module.exports = Field;
