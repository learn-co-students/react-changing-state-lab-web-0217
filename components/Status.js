const React = require('react');

class Status extends React.Component {
  render () {
    const { winner } = this.props;
    let message;
    if (winner && winner == 'X')
    	message = 'X wins';
    else if (winner && winner == 'O')
    	message = 'O wins';
    else
    	message = 'Tie';

    return (
      <div className="status">
      	<p>{message}</p>
      </div>
    );
  }
}

module.exports = Status;
