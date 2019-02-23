import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markComplete, deleteTodo } from '../actions.js';
import {v4 as uuid} from 'uuid';

// Idk what this is actually doing, but it seems to be working
function getColor(remainingDays){
    let lightness = "80"
    const truncedDays = remainingDays > 4 ? 4 : remainingDays
    const percent = (truncedDays / 4.0)
    let hue=(percent*50).toString(10);
    if (remainingDays < 0) {
      lightness = "65"
      hue = "0"
    } else if (remainingDays > 4) {
      hue = "50"
    }
    return ["hsl(",hue,",100%,",lightness,"%)"].join("");
}

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.trunc((second-first)/(1000*60*60*24));
}

class Task extends Component {
  render() {
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

    let remainingDays = datediff(new Date(), new Date(this.props.dueDate))
    const taskColor = getColor(remainingDays)

    return (
      <div style={{...itemStyle, backgroundColor: this.props.completed ? "lightgreen" : taskColor}}>
        <div style={nameStyle}>{this.props.name}</div>
        <div style={descStyle}>{this.props.description}</div>
        <div>Due Date: {this.props.dueDate}</div>
        <div>{this.props.completed ? "Complete!" : "Incomplete"}</div>
        <div>
          <button onClick={() => this.props.dispatch(markComplete(this.props.id))} type="button">Mark Complete</button>
          <button onClick={() => this.props.dispatch(deleteTodo(this.props.id))} type="button">Delete</button>
        </div>
      </div> 
    )
  }
}

class Todos extends Component {
  render() {
    const todosContainerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%"
    }

    return (
      <div style={todosContainerStyle}>
        {this.props.todos.sort(function(a, b){return new Date(a.dueDate) - new Date(b.dueDate)}).map((todo, index) => (
            <Task {...todo} dispatch={this.props.dispatch} />
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


