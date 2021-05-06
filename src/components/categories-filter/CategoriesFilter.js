import React from "react";

import { categoryNameMapper } from "../../helpers/categoryNameMapper";
import Header from "../layout/header/Header";
import Backdrop from "../layout/backdrop/Backdrop";

import "./CategoriesFilter.css";

const CategoriesFilter = (props) => {
  let filterClasses = ["CategoriesFilter_container", "CategoriesFilter_close"];
  if (props.opened) filterClasses = ["CategoriesFilter_container", "CategoriesFilter_open"];

  const selectCategory = (category) => {
    props.close();
    props.select(category);
  }

  return (<>
    <Backdrop show={props.opened} onClick={props.close} />
    <div className={filterClasses.join(" ")}>
      <Header title="Categorias" />
      {props.categories.map((category) => {
        return <div className="CategoriesFilter_item" onClick={() => selectCategory(category.category)}>
          <span>{category.icon}</span>
          <span>{categoryNameMapper(category.category)}</span>
        </div>
      })}
    </div>
  </>);
}

export default CategoriesFilter;
