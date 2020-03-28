import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class GameBody extends Component {
  render() {
    const style = {
      paddingTop: "50px"
    }

    return (
      <div className="container" style={style}>
          <div>LOOK AT THIS GREAT GAME</div> 
          <iframe src="./phaser_game.html" height="600" width="600"></iframe>
      </div>
    )
  }
}

const mapStateToPropsTodos = (state) => {
  return {
    page: state.page
  }
}

export default connect(mapStateToPropsTodos, null)(GameBody);
