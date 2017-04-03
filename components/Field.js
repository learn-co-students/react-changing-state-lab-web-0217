const React = require('react');

class Field extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onClick(this.props.index, event)
  }
  render () {
    const { player, onClick } = this.props;
    // debugger
    return (

      <button className='field' disabled={!!this.props.player} onClick={this.handleClick} >
        {this.props.player}
      </button>
    );
  }
}

module.exports = Field;
