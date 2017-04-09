import React from 'react';

export default class Status extends React.Component {
  render () {
    return (
      <div className="status">
         {this.props.winner ? `${this.props.winner} wins` : "Tie"}
      </div>
    );
  }
}
