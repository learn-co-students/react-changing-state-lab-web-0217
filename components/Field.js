import React from 'react';

export default class Field extends React.Component {
  render () {
    return (
      <button className="field" disabled={!!this.props.player} onClick={this.props.onClick}>
        {this.props.player}
      </button>
    );
  }
}
