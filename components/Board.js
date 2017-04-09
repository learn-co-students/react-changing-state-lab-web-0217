import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(i){
    handleClick(i)
  }

  render () {
    return (
      <div className="board">
        {this.props.board.map((player, i)=><Field player={player} onClick={this.props.onClick.bind(null,i)}/>)}
      </div>
    );
  }
}
