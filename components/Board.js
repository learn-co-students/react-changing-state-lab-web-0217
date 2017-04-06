const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  constructor(props) {
    super(props)
    // this.onClick = this.props.onClick.bind(this)
  }

  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board">
        {
          board.map((boardSpace, index) => <Field key={index}
                                                 player={boardSpace}
                                                 onClick={ onClick.bind(null, index) }/>
         )
       }
      </div>
    );
  }
}

module.exports = Board;
