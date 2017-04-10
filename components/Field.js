import React from 'react';

export default class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;

    return (
      <button onClick={onClick} disabled={player !== undefined} className='field'>
        {player}
      </button>
    );
  }
}
