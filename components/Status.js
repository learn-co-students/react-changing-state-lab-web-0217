const React = require('react');

class Status extends React.Component {

  render () {
    const { winner } = this.props;

    let result

      if(winner === 'X') {
        result = 'X wins'
      } else if(winner === 'O') {
        result = 'O wins'
      } else {
        result = 'Tie'
      }

    return (
      <div className="status">
        {result}
      </div>
    );
  }
}

module.exports = Status;
