import React from "react";
import { FaChevronLeft, FaDollarSign } from "react-icons/fa";

import { categoryNameMapper } from "../../../helpers/categoryNameMapper";

import "./Place.css";

const Place = (props) => {
  const place = props.location.state;

  const getCostIcons = () => {
    let costIcons = Array(place.cost).fill(<FaDollarSign color="009bd6" />);
    const fadedCostIcons = Array(5 - place.cost).fill(<FaDollarSign color="D0D0D0" />);
    costIcons = costIcons.concat(fadedCostIcons);
    return costIcons;
  };

  return (<div className="Place_page">
    <div className="Place_container Place_info" style={{borderColor: 'white'}}>
      <FaChevronLeft
        color="009bd6"
        style={{cursor: "pointer"}}
        onClick={() => props.history.goBack()} />
    </div>
    <div className="Place_container Place_info">
      <h3 className="Place_sectionTitle">{place.name}</h3>
      <div className="Place_infoLine">
        <span>{categoryNameMapper(place.category)}</span>
        <span className="Place_divider"></span>
        <div className="Place_costInfo">{getCostIcons()}</div>
      </div>
    </div>
    <div className="Place_container Place_info">
      <h3 className="Place_sectionTitle">Endereços</h3>
      { place.addresses.map(address => <section className="Place_address">
        <div className="Place_infoLine">
          <span>{address.street}</span>
          <span className="Place_divider"></span>
          <span>{address.number}</span>
          <span className="Place_divider"></span>
          <span>{address.neighborhood}</span>
        </div>
        <div className="Place_infoLine" style={{marginTop: '8px'}}>
          <span>{address.city}</span>
          <span className="Place_divider"></span>
          <span>{address.uf}</span>
          <span className="Place_divider"></span>
          <span>{address.zipCode}</span>
        </div>
      </section>) }
    </div>
    <div className="Place_container">
      <h3 className="Place_sectionTitle">Avaliações</h3>
    </div>
  </div>);
}

export default Place;
