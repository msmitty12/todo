import React, { Component } from 'react';
import { connect } from 'react-redux';
import {default as Body} from './Body';
import {default as StonksBody} from './StonksBody';
import {default as Header} from './Header';
import {default as TodoHotKeys} from '../hotkeys.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const pageColor = "#e0e0eb"

/*
const headerColor = "#ff00ff"
const panelColor = "#1d006d"
const panelColor2 = "#00d0ff"
const pageColor = "#3c0042"
*/

class App extends Component {
  render() {

    const style = {
      textAlign: "center",
      minHeight: "100vh",
      backgroundColor: pageColor
    }

    let body;
    switch(this.props.page.active_page) {
      case "stonks":
        body = <StonksBody />
        break;
      case "todo":
      default:
        body = <Body />
        break
    }

    return (
      <TodoHotKeys>
        <div style={style}>
          <Header />
          {body}
        </div>
      </TodoHotKeys>
    )
  }
}

const mapStateToPropsApp = (state) => {
  return {
    todos: state.todos,
    folders: state.folders,
    page: state.page
  }
}

export default connect(mapStateToPropsApp, null)(App);
