import React from 'react';

function Filter(props) {
  const style = {
    display: "flex",
    alignItems: "center",
    height: "30px",
    fontSize: "20px",
    color: "white"
  }

  return (
    <div style={style}>
      <input type="checkbox" id={props.filterId} name={props.filterId} style={{marginRight: "10px"}}></input>
      <p style={{marginRight: "20px"}}>{props.filterName}</p>
    </div>
  )
}

function StringFilter(props) {
  const inputStyle = {
    margin: "0 0 0 15px",
    width: "120px"
  }
  const parentStyle = {
    display: "flex", 
    alignItems: "center",
    height: "30px"
  }
  const imgStyle = {
    width: "20px"
  }

  return (
    <div style={parentStyle}>
      <img style={imgStyle} src="https://img.icons8.com/metro/26/000000/search.png" alt="Search"></img>
      <input style={inputStyle} type="text" size="10"/>
    </div>
  )
}

export function LeftFilters() {
  const style = {
    padding: "15px"
  }

  return (
    <div style={style}>
      <Filter filterId="today" filterName="Today" />
      <Filter filterId="nextTwoWeeks" filterName="Next Two Weeks" />
      <StringFilter />
    </div>
  )
}
