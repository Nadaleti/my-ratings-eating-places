import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import PlaceItem from "../place-item/PlaceItem";

import "./PlaceList.css";

const PlaceList = (props) => {
  const history = useHistory();

  const getListItem = (place) => {
    return (
      <div className="PlaceList_item" onClick={() => selectPlace(place)}>
        <PlaceItem place={place} />
      </div>
    );
  };

  const selectPlace = (place) => {
    const placePathName = place.name.split(' ').join('-').toLowerCase() + '-' + place.id;
    history.push(`/${placePathName}`, place);
  }

  return props.places.map((place) => getListItem(place));
};

export default PlaceList;
