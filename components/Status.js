const React = require('react');

class Status extends React.Component {

  displayWinner(winner){
    if(winner === 'X'){
      return <p>X wins</p>
    } else if(winner === 'O'){
      return <p>O wins</p>
    } else {
      return <p>Tie</p>
    }
  }

  render () {
    const { winner } = this.props;
    return (
      <div className='status'>
        {this.displayWinner(winner)}
      </div>
    );
  }
}

module.exports = Status;
