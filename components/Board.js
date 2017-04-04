const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    let fieldList = board.map((player, i) =>
    	<Field key={i} player={player} onClick={onClick.bind(null, i)} />
    );
    return (
      <div className="board">
      	{fieldList}
      </div>
    );
  }
}

module.exports = Board;
