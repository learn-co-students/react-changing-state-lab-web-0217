const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    //double bang being used to coerce falsey value to boolean
    return (
      <button className='field' disabled={ !!player } onClick={ onClick }>
        { player }
      </button>
    )
  }
}

module.exports = Field;
