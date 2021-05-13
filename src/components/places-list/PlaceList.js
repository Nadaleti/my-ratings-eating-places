import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import InfiniteScroll from "../infinite-scroll/InfiniteScroll";

import PlaceItem from "../place-item/PlaceItem";

import "./PlaceList.css";

const PlaceList = (props) => {
  const history = useHistory();

  const getListItem = (place, isLast) => {
    const placeItemClasses = ["PlaceList_item"];
    if (isLast) placeItemClasses.push("PlaceList_last");

    return (
      <div className={placeItemClasses.join(" ")} key={place.id} onClick={() => selectPlace(place)}>
        <PlaceItem place={place} />
      </div>
    );
  };

  const selectPlace = (place) => {
    const placePathName = place.name.split(' ').join('-').toLowerCase() + '-' + place.id;
    history.push(`/${placePathName}`, place);
  }

  return <InfiniteScroll
    hasMore={props.hasNextPage}
    loadMore={props.addPage}>
    {props.places.map((place, idx) => getListItem(place, idx === (props.places.length - 1)))}
  </InfiniteScroll>;
};

export default PlaceList;
