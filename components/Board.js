const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    const boardLayout = board.map((tile,i) =>{
      return <Field player={tile} onClick={onClick.bind(null, i)} key={i} index={i}/>
    })

    return (
      <div className="board">
        <div>{boardLayout[0]}{boardLayout[1]}{boardLayout[2]}</div>
        <div>{boardLayout[3]}{boardLayout[4]}{boardLayout[5]}</div>
        <div>{boardLayout[6]}{boardLayout[7]}{boardLayout[8]}</div>
      </div>
    );
  }
}

module.exports = Board;
