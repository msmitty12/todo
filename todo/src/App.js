import React, { Component } from 'react';
import './App.css';

const headerColor = "#47476b"
const panelColor = "#6c7c96"
const panelColor2 = "#9ab9ea"
const pageColor = "#e0e0eb"


function HeadFootWrapper(props) {
  const style = {
    backgroundColor: headerColor,
    height: "50px"
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

function Filter(props) {
  const style = {
    display: "flex",
    alignItems: "center",
    height: "30px",
    fontSize: "20px"
  }

  return (
    <div style={style}>
      <input type="checkbox" id={props.filterId} name={props.filterId} style={{marginRight: "10px"}}></input>
      <p style={{marginRight: "20px"}}>{props.filterName}</p>
    </div>
  )
}

function StringFilter(props) {
  const inputStyle = {
    margin: "0 0 0 15px",
    width: "120px"
  }
  const parentStyle = {
    display: "flex", 
    alignItems: "center",
    height: "30px"
  }
  const imgStyle = {
    width: "20px"
  }

  return (
    <div style={parentStyle}>
      <img style={imgStyle} src="https://img.icons8.com/metro/26/000000/search.png" alt="Search"></img>
      <input style={inputStyle} type="text" size="10"/>
    </div>
  )
}

function LeftFilters() {
  const style = {
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    padding: "15px"
  }

  return (
    <div style={style}>
      <Filter filterId="today" filterName="Today" />
      <Filter filterId="nextTwoWeeks" filterName="Next Two Weeks" />
      <StringFilter />
    </div>
  )
}

function Folders() {
  const style = {
    backgroundColor: panelColor2,
    flexGrow: 1,
    width: "100%"
  }
  return <div style={style} />
}

function LeftColumn() {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "150px",
    height: "100%",
    backgroundColor: panelColor
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
      flex: 1
    }
    return <div style={style}></div>
  }
}

class Body extends Component {
  render() {
    const style = {
      flex: 1,
      display: "flex",
      backgroundColor: pageColor
    }

    return (
      <div style={style}>
        <LeftColumn />
        <Page />
      </div>
    )
  }
}

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
