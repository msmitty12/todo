import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions.js'
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
      width: "90%",
      class: "form-group",
      padding: "10px",
      margin: "10px"
    }
    let nameInput, descInput, dueDateInput;

    return (
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
        <button type="submit" className="btn btn-primary" onClick={e => {
            e.preventDefault()
            if (!nameInput.value.trim()) {
              return
            }
            this.props.dispatch(addTodo(nameInput.value, descInput.value, dueDateInput.value))
            nameInput.value = ''
            descInput.value = ''
            dueDateInput.value = ''
          }}>Add Task</button>
      </form>
    )
  }
}

export default connect()(TodoForm2);
