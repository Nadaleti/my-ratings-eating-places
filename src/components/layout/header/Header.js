import React from "react";

import "./Header.css";

const Header = ({ title }) => {
  return (<div className="EP_Header_container">
    <h3 className="EP_Header_title">{title.toUpperCase()}</h3>
  </div>);
}

export default Header;
