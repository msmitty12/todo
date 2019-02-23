import React, { Component } from 'react';
import {default as Todos} from './Todos'
import {default as Todos2} from './Todos2'
import {default as TodoForm} from './TodoForm'
import {default as TodoForm2} from './TodoForm2'
import {LeftFilters} from './LeftFilters'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const headerColor = "#47476b"
const panelColor = "#6c7c96"
const panelColor2 = "#9ab9ea"
const pageColor = "#e0e0eb"

/*
const headerColor = "#ff00ff"
const panelColor = "#1d006d"
const panelColor2 = "#00d0ff"
const pageColor = "#3c0042"
*/


function HeadFootWrapper(props) {
  const style = {
    backgroundColor: headerColor,
    height: "50px",
    width: "100%",
    position: "fixed",
    zIndex: 999
  }

  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

function Header() {
  return (
    <HeadFootWrapper>
      <p>Checklist</p>
    </HeadFootWrapper>
  )
}

/*
function Footer() {
  return (
    <HeadFootWrapper>
      <p>Footer!</p>
    </HeadFootWrapper>
  )
}
*/

function Folders() {
  const style = {
    backgroundColor: panelColor2,
    width: "100%",
    height: "100%"
  }
  return <div style={style} />
}

function LeftColumn() {
  const style = {
    backgroundColor: panelColor,
    height: "100%"
  }

  return (
    <div style={style}>
      <LeftFilters />
      <Folders />
    </div>
  )
}

class Page extends Component {
  render() {
    const style = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }

    return (
      <div style={style}>
        <TodoForm2 />
        <Todos2 />
      </div>
    )
  }
}

class Body extends Component {
  render() {
    const style = {
      flex: 1,
      backgroundColor: pageColor,
      paddingTop: "50px"
    }

    return (
      <div className="container-fluid" style={style}>
        <div className="row">
          <div className=".col-8">
            <LeftColumn />
          </div>
          <div className=".col-8">
            <Page />
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    const style = {
      textAlign: "center",
      height: "100%"
    }
    return (
      <div style={style}>
        <Header />
        <Body />
      </div>
    )
  }
}

export default App;
