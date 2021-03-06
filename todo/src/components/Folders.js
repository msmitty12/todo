import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveFolder, deleteFolder } from '../actions.js'
import { addFolder, toggleAddFolder } from '../actions.js';


function AddFolder(props) {
  const border_style = {
    backgroundColor: "lightgreen",
    width: "100%"
  }

  const common_style = {
    margin: "5px",
    borderRadius: "5px",
    padding: "5px"
  }

  let ret = (
    <button style={common_style} href="#" className="btn btn-primary" onClick={() => props.dispatch(toggleAddFolder())}>
      <span className="glyphicon glyphicon-plus">&#x2b;</span> New Folder
    </button>
  )

  if (props.accept_input) {
    let folder_name

    ret = (
      <div style={{...common_style, ...border_style}}>
        <form onSubmit={(e) => 
          {
            e.preventDefault();
            props.dispatch(addFolder(folder_name.value)); 
          }}>
          <input autoFocus style={{marginBottom: "5px"}} type="text" className="form-control" placeholder="Folder Name" ref={node => (folder_name = node)} />
          <button style={{marginRight: "5px"}} type="button" href="#" className="btn btn-secondary" onClick={() => {
            props.dispatch(toggleAddFolder())
          }}>
            Cancel
          </button>
          <button type="submit" href="#" className="btn btn-success">
            <span className="glyphicon glyphicon-plus">&#x2b;</span>
          </button>
        </form>
      </div>
    )
  }

  return ret
}

class Folder extends Component {
  render() {
    let is_active = this.props.active_folder === this.props.name
    const itemStyle = {
      margin: "5px",
      backgroundColor: is_active ? "yellow" : "lightyellow",
      borderRadius: "5px",
      padding: "5px",
      width: "100%",
      display: "flex"
    }

    const nameStyle = {
      flexGrow: 1
    }

    return (
      <div style={{...itemStyle}}>
        <div style={nameStyle} onClick={e => {
              e.preventDefault()
              this.props.dispatch(setActiveFolder(this.props.name))
            }}>
          <h5>{this.props.name}</h5>
        </div>
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Rename</a>
            <a className="dropdown-item" href="#" onClick={() => {this.props.dispatch(deleteFolder(this.props.name))}}>Delete</a>
          </div>
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
       <div>
        <AddFolder accept_input={this.props.page.add_folder_accept_input}
                   dispatch={this.props.dispatch}/>
        <div style={style}>
          {this.props.folders.sort(function(a, b){return a.name - b.name}).map((folder, index) => (
              <Folder {...folder} 
                      dispatch={this.props.dispatch} 
                      active_folder={this.props.page.active_folder}/>
            ))}
        </div>
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


