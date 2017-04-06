const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  constructor(){
    super()
    this.state = {


    }

  }

  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board">
        {board.map((spot, index)=>{
          return <Field
              key={index}
              player={spot}
              onClick={onClick.bind(null,index)}
              />
        })}
      </div>
    );
  }
}

module.exports = Board;
