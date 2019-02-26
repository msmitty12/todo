import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLeftColumn } from '../actions.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const headerColor = "#47476b"

/*
const headerColor = "#ff00ff"
const panelColor = "#1d006d"
const panelColor2 = "#00d0ff"
const pageColor = "#3c0042"
*/


function HeadFootWrapper(props) {
  const style = {
    backgroundColor: headerColor,
    height: "50px",
    width: "100%",
    position: "fixed",
    zIndex: 999
  }

  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

function Header(props) {
  return (
    <HeadFootWrapper>
      <nav className="navbar navbar-light navbar-2">
        <div className="d-block d-sm-none">
          <button type="button" onClick={() => props.dispatch(toggleLeftColumn())}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </HeadFootWrapper>
  )
}

export default connect()(Header);