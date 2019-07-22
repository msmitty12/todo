import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markComplete, deleteTodo } from '../actions.js';
import styled, { keyframes } from 'styled-components';


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
      width: "100%"
    }

    let remainingDays = datediff(new Date(), new Date(this.props.dueDate))
    const taskColor = getColor(remainingDays)
    const taskStatus = this.props.completed ? "Complete!" : remainingDays < 0 ? "Overdue" : "Incomplete"

    return (
      <div className="card" style={{...itemStyle, backgroundColor: this.props.completed ? "lightgreen" : taskColor}}>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.description}</p>
          <div>Due Date: {this.props.dueDate}</div>
          <h5>{taskStatus}</h5>
          <button href="#" className="btn btn-info" onClick={() => this.props.dispatch(markComplete(this.props.id))}>Mark Complete</button>
          <button href="#" className="btn btn-danger" onClick={() => this.props.dispatch(deleteTodo(this.props.id, this.props.active_folder))}>Delete</button>
        </div>
      </div>
    )
  }
}

class Todos extends Component {
  render() {
    let spin = keyframes`
      0% { transform: scale(.2); }
      100% { transform: scale(1); }
    `
    const StyledTodosContainer = styled.div`
      display: "flex";
      flex-direction: "column";
      align-items: "center";
      width: "100%";
      //animation: ${spin} 1s linear;
    `

    let folder = this.props.folders.find((it) => {return it.name === this.props.page.active_folder})
    let active_todos = folder && folder.todos.map(x => this.props.todos.find((it) => {return it.id === x}))

    return (
      <StyledTodosContainer>
        {active_todos && active_todos.sort(function(a, b){return new Date(a.dueDate) - new Date(b.dueDate)}).map((todo, index) => (
            <Task {...todo} 
                  dispatch={this.props.dispatch}
                  active_folder={this.props.page.active_folder} />
          ))}
      </StyledTodosContainer>
    )
  }
}

const mapStateToPropsTodos = (state) => {
  return {
    todos: state.todos,
    folders: state.folders,
    page: state.page
  }
}

export default connect(mapStateToPropsTodos, null)(Todos);


