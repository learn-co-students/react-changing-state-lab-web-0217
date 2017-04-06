const React = require('react');
const Field = require('./Field');

class Board extends React.Component {


  render () {
    const { board, onClick } = this.props;

    return (
      <div className="board">
        {this.props.board.map((spot, i) => {
          return <Field value={this.props.board[i]} key={i} onClick={onClick.bind(null, i)}/>
        })}
      </div>
    );
  }
}

module.exports = Board;
