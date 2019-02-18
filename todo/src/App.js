import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './App.css';

//const headerColor = "#47476b"
const headerColor = "#ff00ff"
// const panelColor = "#6c7c96"
const panelColor = "#1d006d"
// const panelColor2 = "#9ab9ea"
const panelColor2 = "#00d0ff"
// const pageColor = "#e0e0eb"
const pageColor = "#3c0042"
const formColor = "pink"


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
    fontSize: "20px",
    color: "white"
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

const markComplete = (name) => ({
  type: 'MARK_COMPLETE',
  name: name
})

class TodosInner extends Component {
  render() {
    const todosContainerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
    const itemStyle = {
      margin: "5px",
      backgroundColor: "#faff00",
      borderRadius: "5px",
      padding: "5px"
    }

    return (
      // TODO: Why is index bad? https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
      <div style={todosContainerStyle}>
        {this.props.todos.sort(function(a, b){return new Date(a.dueDate) - new Date(b.dueDate)}).map((todo, index) => (
            <div style={itemStyle}>
              <div>Task: {todo.name}</div>
              <div>Description: {todo.description}</div>
              <div>Due Date: {todo.dueDate}</div>
              <div>{todo.completed ? "Complete!" : "Incomplete"}</div>
              <button onClick={() => this.props.dispatch(markComplete(todo.name))} type="button">Mark Complete</button>
            </div>
          ))}
      </div>
    )
  }
}

const mapStateToPropsTodos = (state) => {
  return {
    todos: state
  }
}

const Todos = connect(mapStateToPropsTodos, null)(TodosInner)

const addTodo = (name, description, dueDate) => ({
  type: 'ADD_TODO',
  name: name,
  description: description,
  dueDate: dueDate
})

class TodoFormInner extends Component {
  render() {
    const containerStyle = {
      backgroundColor: formColor,
      borderRadius: "10px",
      width: "200px",
      padding: "10px",
      margin: "10px"
    }
    const formStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
    const itemStyle = {
      marginTop: "2px",
    }
    let nameInput, descInput, dueDateInput;

    return (
      <div style={containerStyle}>
        <form
          style={formStyle}
          onSubmit={e => {
            e.preventDefault()
            if (!nameInput.value.trim() || !descInput.value.trim()) {
              return
            }
            this.props.dispatch(addTodo(nameInput.value, descInput.value, dueDateInput.value))
            nameInput.value = ''
            descInput.value = ''
            dueDateInput.value = ''
          }}
        >
          <input style={itemStyle} ref={node => (nameInput = node)} />
          <input style={itemStyle} ref={node => (descInput = node)} />
          <input style={itemStyle} type="date" ref={node => (dueDateInput = node)} />
          <button style={itemStyle} type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

const TodoForm = connect()(TodoFormInner)

class Page extends Component {
  render() {
    const style = {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }

    return (
      <div style={style}>
        <TodoForm />
        <Todos />
      </div>
    )
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

function reducer(state = [], action) {
  switch (action.type) { 
    case 'ADD_TODO':
      return [
        ...state,
        {
          name: action.name,
          description: action.description,
          dueDate: action.dueDate,
          completed: false
        }
      ]
    case 'MARK_COMPLETE':
      return state.map(todo =>
        todo.name === action.name ? { ...todo, completed: true } : todo
      )
    default:
      return state
  }
}

class AppBody extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

let store = createStore(reducer)
store.subscribe(() => (console.log(store.getState())))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppBody />
      </Provider>
    )
  }
}

export default App;
