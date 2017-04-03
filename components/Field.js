const React = require('react');

class Field extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onClick(this.props.index, event)
  }

  render () {
    const { player, onClick } = this.props;

    return (
        <button className="field" onClick={this.handleClick} disabled={!!this.props.player}>
          {this.props.player}
        </button>
      )}
  }


module.exports = Field;
