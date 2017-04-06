const React = require('react');

class Status extends React.Component {
  render () {
    let winner = this.props.winner
    return (
      <div className='status'>{!winner ? 'Tie' : `${winner} wins`}</div>
    );
  }
}

module.exports = Status;
