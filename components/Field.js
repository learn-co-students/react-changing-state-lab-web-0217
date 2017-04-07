const React = require('react');

class Field extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  whoAmI() {
    if (this.props.player === null) {
      return " "
    } else {
      return this.props.player
    }
  }

  handleClick(ev) {
    this.props.onClick(ev)
  }

  render () {
    const { player, onClick, id, className } = this.props;
    return (
      <button className="field" id={id} onClick={this.handleClick} disabled={this.props.player ? true : false}>
      {this.whoAmI()}
      </button>
    );
  }
}

module.exports = Field;
