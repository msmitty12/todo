import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, acceptAddTaskInput } from '../actions.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const borderColor = "#6c7c96"
// const formColor = "pink"

class TodoForm2 extends Component {
  render() {
    const containerStyle = {
      borderStyle: "solid",
      borderColor: borderColor,
      borderRadius: "10px",
      //width: "90%",
      class: "form-group",
      padding: "10px",
      margin: "10px"
    }
    let nameInput, descInput, dueDateInput;

    let formDisplay = (
      <form style={containerStyle}>
        <div className="form-group" width="90%">
          <input type="text" className="form-control" ref={node => (nameInput = node)} placeholder="Task Name" />
        </div>
        <div className="form-group">
          <textarea className="form-control" ref={node => (descInput = node)} placeholder="Description" rows="2"></textarea>
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input type="date" className="form-control" ref={node => (dueDateInput = node)} />
        </div>
        <button type="button" href="#" className="btn btn-secondary">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" onClick={e => {
            e.preventDefault()
            if (!nameInput.value.trim()) {
              return
            }
            this.props.dispatch(addTodo(nameInput.value, descInput.value, dueDateInput.value, this.props.page.active_folder))
            nameInput.value = ''
            descInput.value = ''
            dueDateInput.value = ''
          }}>Add Task</button>
      </form>
    )

    if (!this.props.page.add_task_accept_input) {
      let buttonStyle = {
        borderStyle: "solid",
        borderColor: borderColor,
        borderRadius: "10px",
        padding: "10px",
        margin: "10px"
      }

      formDisplay = (
        <button style={buttonStyle} href="#" className="btn btn-primary" onClick={() => this.props.dispatch(acceptAddTaskInput())}>
          <span className="glyphicon glyphicon-plus">&#x2b;</span> New Task
        </button>
      )
    }

    return formDisplay
  }
}

const mapStateToPropsTodos = (state) => {
  return {
    page: state.page
  }
}

export default connect(mapStateToPropsTodos, null)(TodoForm2);
