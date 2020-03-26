import React, { Component } from 'react';
import {default as Todos} from './Todos'
import {default as TodoForm} from './TodoForm'
import {LeftFilters} from './LeftFilters'
import {default as Folders} from './Folders'
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
