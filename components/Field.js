import React from 'react';

export default class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    return (
        <button className='field' disabled={this.props.player? true : false} onClick={this.props.onClick}>
          {this.props.player}
        </button>
    );
  }
}
