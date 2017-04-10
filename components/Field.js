import React from 'react';

export default class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    return (
    <button className="field" disabled={this.props.player !== undefined}
      onClick={onClick}>
      {player}
    </button>
    );
  }
}
