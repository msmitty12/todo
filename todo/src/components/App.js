import React, { Component } from 'react';
import {default as Body} from './Body';
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
    return (
      <TodoHotKeys>
        <div style={style}>
          <Header />
          <Body />
        </div>
      </TodoHotKeys>
    )
  }
}

export default App;
