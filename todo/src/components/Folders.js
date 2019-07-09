import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveFolder } from '../actions.js'
import styled from 'styled-components';

const panelColor = "#6c7c96"
const panelColor2 = "#9ab9ea"

/*
const panelColor = "#1d006d"
const panelColor2 = "#00d0ff"
*/

class Folder extends Component {
  render() {
    let is_active = this.props.active_folder == this.props.name
    const itemStyle = {
      margin: "5px",
      backgroundColor: is_active ? "yellow" : "lightyellow",
      borderRadius: "5px",
      padding: "5px",
      width: "100%"
    }

    return (
      <div style={{...itemStyle}} onClick={e => {
            e.preventDefault()
            this.props.dispatch(setActiveFolder(this.props.name))
          }}>
        <div>
          <h5>{this.props.name}</h5>
        </div>
      </div>
    )
  }
}

class Folders extends Component {
  render() {
      const style = {
        width: "100%"
      }
      return (
       <div style={style}>
        {this.props.folders.sort(function(a, b){return a.name - b.name}).map((folder, index) => (
            <Folder {...folder} 
                    dispatch={this.props.dispatch} 
                    active_folder={this.props.page.active_folder}/>
          ))}
       </div>
     )
  }
}

const mapStateToPropsTodos = (state) => {
  return {
    folders: state.folders,
    page: state.page
  }
}

export default connect(mapStateToPropsTodos, null)(Folders);


