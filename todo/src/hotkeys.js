import React, { Component } from 'react';
import { toggleAddFolder, toggleAddTask } from './actions.js';
import { HotKeys } from "react-hotkeys";
import { connect } from 'react-redux';


class TodoHotKeys extends Component {
    render() {
        const keyMap = {
          TOGGLE_FOLDER: ['command+k', 'ctrl+k'],
          TOGGLE_TASK: ['command+b', 'ctrl+b']
        };
         
        const handlers = {
          TOGGLE_TASK: (event) => this.props.dispatch(toggleAddTask()),
          TOGGLE_FOLDER: (event) => this.props.dispatch(toggleAddFolder())
        };

        return (
          <HotKeys keyMap={keyMap} handlers={handlers}>
            {this.props.children}
          </HotKeys>
        )
    }
}

export default connect()(TodoHotKeys);