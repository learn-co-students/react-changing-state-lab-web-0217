const React = require('react');

class Status extends React.Component {
  render () {
    const { winner } = this.props;
    return (
      <div className='status'>
        {winner ? winner + " Wins!" : "Tie Game!" }
      </div>
    );
  }
}

module.exports = Status;
