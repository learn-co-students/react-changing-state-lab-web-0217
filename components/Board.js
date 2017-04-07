const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  constructor() {
    super()
  }

  render () {
    const { board, onClick } = this.props;
    let i = -1
    let fieldList = this.props.board.map((player, index) => {
      i++
      return <Field id={i} className="field" player={player} onClick={onClick.bind(null, index)}/>
    })
    return (
      <div className="board">
        {fieldList}
      </div>
    );
  }
}

module.exports = Board;
