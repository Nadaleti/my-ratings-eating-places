import React from "react";
import { FaSadCry } from 'react-icons/fa';

import "./NoResults.css";

const NoResults = (props) => {
  return (
    <div className="NoResults_container">
      { props.showSadIcon ? <FaSadCry className="NoResults_icon" /> : null }
      <h3>{ props.message }</h3>
      <span>{ props.subMessage }</span>
    </div>
  )
}

export default NoResults;
