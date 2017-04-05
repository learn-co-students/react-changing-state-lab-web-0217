const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    // this for relez i do loop
    return (
      <div className='board'>
        <Field key={ board[0] } player={ board[0] } onClick={ onClick.bind(null, 0) }/>
        <Field key={ board[1] } player={ board[1] } onClick={ onClick.bind(null, 1) }/>
        <Field key={ board[2] } player={ board[2] } onClick={ onClick.bind(null, 2) }/>
        <Field key={ board[3] } player={ board[3] } onClick={ onClick.bind(null, 3) }/>
        <Field key={ board[4] } player={ board[4] } onClick={ onClick.bind(null, 4) }/>
        <Field key={ board[5] } player={ board[5] } onClick={ onClick.bind(null, 5) }/>
        <Field key={ board[6] } player={ board[6] } onClick={ onClick.bind(null, 6) }/>
        <Field key={ board[7] } player={ board[7] } onClick={ onClick.bind(null, 7) }/>
        <Field key={ board[8] } player={ board[8] } onClick={ onClick.bind(null, 8) }/>
      </div>
    );
  }
}

module.exports = Board;
