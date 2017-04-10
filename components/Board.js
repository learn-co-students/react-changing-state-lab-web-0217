import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board">
        {this.props.board.map((field, index)=>{
          return <Field key={index} player={field} onClick={this.props.onClick.bind(null, index)}   />
        })}
      </div>
    );
  }
}
