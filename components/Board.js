const React = require('react');
const Field = require('./Field');

class Board extends React.Component {

  render () {
    const { board, onClick } = this.props;
    const fieldList = []
    for(var i = 0; i < 9; i++){
      fieldList.push(<Field key={i} onClick={onClick.bind(null, i)}/>)
    }

    return (
      <div className="board" >
        {fieldList}
      </div>
    );
  }
}

module.exports = Board;
