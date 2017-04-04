const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    const boardLayout = board.map((tile, i) => {
      return <Field isComplete={this.props.isComplete} player={tile} onClick={onClick} key={i} index={i}/>
    })
    return (
      <div>
          {boardLayout}
      </div>
    );
  }
}

module.exports = Board;
