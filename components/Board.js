const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    const allFields = board.map((player, i) => {
        return(
          <Field key={i} player={player} onClick={onClick.bind(null,i)}/>
        )
    })
    return (
      <div className="board">
        {allFields}
      </div>
    );
  }
}

module.exports = Board;
