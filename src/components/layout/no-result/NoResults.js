import React from "react";

import "./NoResults.css";

const NoResults = (props) => {
  return (
    <div className="NoResults_container">
      { props.icon("NoResults_icon") }
      <h3>{ props.message }</h3>
      <span>{ props.subMessage }</span>
    </div>
  )
}

export default NoResults;
