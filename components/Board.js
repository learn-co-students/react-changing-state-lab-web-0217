const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board">
        {board.map(function(field, index) {
          return <Field onClick={onClick.bind(null, index)} key={index} player={field}/>
        })}
      </div>
    );
  }
}

module.exports = Board;
