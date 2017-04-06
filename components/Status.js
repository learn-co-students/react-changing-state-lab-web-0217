const React = require('react');

class Status extends React.Component {
  constructor(){
    super()
  }

  getWinner(){
    if(!!this.props.winner){
      return this.props.winner + " wins"
    }else{
      return "Tie"
    }
  }

  render () {
    const { winner } = this.props;
    return (
      <div className="status">
        {this.getWinner()}
      </div>
    );
  }
}

module.exports = Status;
