import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions.js'

const formColor = "pink"

class TodoForm extends Component {
  render() {
    const containerStyle = {
      backgroundColor: formColor,
      borderRadius: "10px",
      width: "250px",
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
            if (!nameInput.value.trim()) {
              return
            }
            this.props.dispatch(addTodo(nameInput.value, descInput.value, dueDateInput.value))
            nameInput.value = ''
            descInput.value = ''
            dueDateInput.value = ''
          }}
        >
          <div>Name</div>
          <input style={itemStyle} ref={node => (nameInput = node)} />
          <div>Description</div>
          <input style={itemStyle} ref={node => (descInput = node)} />
          <div>Due Date</div>
          <input style={itemStyle} type="date" ref={node => (dueDateInput = node)} />
          <button style={itemStyle} type="submit">Add Task</button>
        </form>
      </div>
    )
  }
}

export default connect()(TodoForm);
