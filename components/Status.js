const React = require('react');


class Status extends React.Component {
  render () {

    const { winner } = this.props;

  let status
    if (winner ==='X') {
      status = "X wins"
    } else if (winner === "O") {
      status = "O wins"
    } else {
      status = "Tie"
    }


    return (
      <div className="status" >
      {status}
      </div>
    );
  }
}
module.exports = Status;
