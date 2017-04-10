import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className='board'>
        {board.map((player, index)=> {
          return <Field key={index} player={player} onClick={onClick.bind(null, index)}/>
          })
        }
      </div>
    );
  }
}
