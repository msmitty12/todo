import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markComplete, deleteTodo } from '../actions.js'

class Todos extends Component {
  render() {
    const todosContainerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%"
    }
    const itemStyle = {
      margin: "5px",
      backgroundColor: "lightyellow",
      borderRadius: "5px",
      padding: "5px",
      width: "90%"
    }
    const nameStyle = {
      fontWeight: 800,
      borderRadius: "5px"
    }
    const descStyle = {
      margin: "5px",
      backgroundColor: "white",
      minHeight: "50px",
      borderRadius: "5px"
    }

    return (
      // TODO: Why is index bad? https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
      <div style={todosContainerStyle}>
        {this.props.todos.sort(function(a, b){return new Date(a.dueDate) - new Date(b.dueDate)}).map((todo, index) => (
            <div style={todo.completed ? {...itemStyle, backgroundColor: "lightgreen"} : itemStyle}>
              <div style={nameStyle}>{todo.name}</div>
              <div style={descStyle}>{todo.description}</div>
              <div>Due Date: {todo.dueDate}</div>
              <div>{todo.completed ? "Complete!" : "Incomplete"}</div>
              <div>
                <button onClick={() => this.props.dispatch(markComplete(todo.name))} type="button">Mark Complete</button>
                <button onClick={() => this.props.dispatch(deleteTodo(todo.name))} type="button">Delete</button>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

const mapStateToPropsTodos = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToPropsTodos, null)(Todos);


