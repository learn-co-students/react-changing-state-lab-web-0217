import React from 'react';

export default class Status extends React.Component {
  render () {
    const { winner } = this.props;
    return (
      <div className="status">
        {this.props.winner ? this.props.winner+' wins' : 'Tie'}
      </div>
    );
  }
}
