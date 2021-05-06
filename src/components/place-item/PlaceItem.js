import React from "react";
import { FaDollarSign } from "react-icons/fa";

import "./PlaceItem.css";

const PlaceItem = (props) => {
  const getCapitalized = (value) => {
    return value[0].toUpperCase() + value.slice(1).toLowerCase();
  };

  const getCostIcons = () => {
    let costIcons = Array(props.cost).fill(<FaDollarSign color="009bd6" />);
    const fadedCostIcons = Array(5 - props.cost).fill(
      <FaDollarSign color="D0D0D0" />
    );
    costIcons = costIcons.concat(fadedCostIcons);

    return costIcons;
  };

  return (
    <>
      <h4 className="PlaceItem_title">{props.name}</h4>
      <div className="PlaceItem_info">
        <span className="PlaceItem_category">{getCapitalized(props.category)}</span>
        <span className="PlaceItem_divider"></span>
        <div className="PlaceItem_cost-info">{getCostIcons()}</div>
      </div>
    </>
  );
};

export default PlaceItem;
