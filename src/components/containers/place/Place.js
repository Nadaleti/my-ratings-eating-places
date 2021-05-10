import React from "react";

const Place = (props) => {
  return (<span>tops {props.match.params.name}</span>);
}

export default Place;
