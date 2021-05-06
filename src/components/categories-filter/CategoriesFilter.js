import React from "react";

import Header from "../layout/header/Header";
import Backdrop from "../layout/backdrop/Backdrop"

import "./CategoriesFilter.css";

const CategoriesFilter = (props) => {
  let filterClasses = ["CategoriesFilter_container", "CategoriesFilter_close"];
  if (props.opened) filterClasses = ["CategoriesFilter_container", "CategoriesFilter_open"];   

  return (<>
    <Backdrop show={props.opened} onClick={props.close} />
    <div className={filterClasses.join(" ")}>
      <Header title="Categorias" />
    </div>
  </>);
}

export default CategoriesFilter;
