import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class StonksBody extends Component {
  render() {
    const style = {
      paddingTop: "50px"
    }

    return (
      <div className="container" style={style}>
      </div>
    )
  }
}

const mapStateToPropsTodos = (state) => {
  return {
    page: state.page
  }
}

export default connect(mapStateToPropsTodos, null)(StonksBody);
