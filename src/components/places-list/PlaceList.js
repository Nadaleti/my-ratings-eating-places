import React from "react";

import Place from "../place/Place";

import "./PlaceList.css";

const PlaceList = (props) => {
  const getListItem = (place) => {
    return (
      <div className="PlaceList_item">
        <Place name={place.name} category={place.category} cost={place.cost} />
      </div>
    );
  };

  return props.places.map((place) => getListItem(place));
};

export default PlaceList;
