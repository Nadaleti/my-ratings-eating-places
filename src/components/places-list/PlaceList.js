import React from "react";

import PlaceItem from "../place-item/PlaceItem";

import "./PlaceList.css";

const PlaceList = (props) => {
  const getListItem = (place) => {
    return (
      <div className="PlaceList_item">
        <PlaceItem name={place.name} category={place.category} cost={place.cost} />
      </div>
    );
  };

  return props.places.map((place) => getListItem(place));
};

export default PlaceList;
