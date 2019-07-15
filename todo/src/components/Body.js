import React, { Component } from 'react';
import {default as Todos} from './Todos'
import {default as TodoForm} from './TodoForm'
import {LeftFilters} from './LeftFilters'
import {default as Folders} from './Folders'
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const panelColor = "#6c7c96"
const panelColor2 = "#9ab9ea"

/*
const panelColor = "#1d006d"
const panelColor2 = "#00d0ff"
*/

function LeftColumn(props) {
  const style = {
    backgroundColor: panelColor,
    minHeight: "100%"
  }

  return (
    <div className={props.calcClass} style={style}>
      <LeftFilters />
      <Folders />
    </div>
  )
}

class Page extends Component {
  render() {

    return (
      <div className={this.props.calcClass}>
        <TodoForm />
        <Todos />
      </div>
    )
  }
}

class Body extends Component {
  getDerivedStateFromProps(nextProps, prevState) {
    const nextVisible = nextProps.page && nextProps.page.leftColumn && nextProps.page.leftColumn.visible
    const visible =  this.props.page && this.props.page.leftColumn && this.props.page.leftColumn.visible
    if(visible !== nextVisible ) {
      return {stateFoo: 'valueBar'};
    }
  }

  render() {
    /*
    let spin = keyframes`
      0% { transform: scale(.2); }
      100% { transform: scale(1); }
    `
    const StyledTodosContainer = styled.div`
      animation: ${spin} 1s linear;
    `
    */

    const style = {
      paddingTop: "50px"
    }

    let leftColumnClass = "d-none d-sm-block col-sm-4"
    let pageClass = "col-12 col-sm-8"
    if (this.props.page && this.props.page.leftColumn && this.props.page.leftColumn.visible) {
      leftColumnClass = "col-12 col-sm-4"
      pageClass = "d-none d-sm-block col-sm-8"
    }

    return (
      <div className="container" style={style}>
        <div className="row">
          <LeftColumn calcClass={leftColumnClass} style={{backgroundColor: panelColor2}} />
          <Page calcClass={pageClass} />
        </div>
      </div>
    )
  }
}

const mapStateToPropsTodos = (state) => {
  return {
    page: state.page
  }
}

export default connect(mapStateToPropsTodos, null)(Body);
