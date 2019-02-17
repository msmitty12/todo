import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class TodosInner extends Component {
  render() {

    return (
        // TODO: Why is index bad? https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
        <ul>
          {this.props.todos.map((todo, index) => (
              <li key={index}>{todo.description}</li>
            ))}
        </ul>
      )
  }
}

const mapStateToPropsTodos = (state) => {
  return {
    todos: state
  }
}

const Todos = connect(mapStateToPropsTodos, null)(TodosInner)

const addTodo = description => ({
  type: 'ADD_TODO',
  description
})

class PageInner extends Component {
  render() {
    const style = {
      flex: 1
    }

    let input
    return (
      <div style={style}>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.dispatch(addTodo(input.value))
            input.value = ''
          }}
        >
          <input ref={node => (input = node)} />
          <button type="submit">Add Todo</button>
        </form>
        <Todos />
      </div>
    )
  }
}

const Page = connect()(PageInner)

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