import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaDollarSign, FaRegStar } from "react-icons/fa";

import axios from "../../../axios";
import NoResults from "../../layout/no-result/NoResults";
import Spinner from "../../layout/spinner/Spinner";
import { categoryNameMapper } from "../../../helpers/categoryNameMapper";

import "./Place.css";

const Place = (props) => {
  const [loading, setLoading] = useState(false);
  const [ratings, setRatings] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [page, setPage] = useState(1);
  
  const place = props.location.state;

  useEffect(() => {
    const params = { page, filterBy: 'PLACE', filterValue: place.id };
    setLoading(true);

    axios.get("/ratings", { params })
      .then((response) => {
        console.log(`Loaded ratings for place ${place.id}!`);
        setLoading(false);
        setHasNextPage(response.data.hasNextPage);
        setRatings((ratings) => {
          return page == 1 ?
            response.data.ratings :
            [...ratings, ...response.data.ratings]
        });
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  const getCostIcons = () => {
    let costIcons = Array(place.cost).fill(<FaDollarSign color="009bd6" />);
    const fadedCostIcons = Array(5 - place.cost).fill(<FaDollarSign color="D0D0D0" />);
    costIcons = costIcons.concat(fadedCostIcons);
    return costIcons;
  };

  return (<div className="Place_page">
    <Spinner show={loading && page === 1} />
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
      {
        ratings.length === 0 ?
          <NoResults
            icon={(className) => <FaRegStar className={className} /> }
            subMessage="Nenhuma avaliação encontrada" /> :
          // TODO: Crirar ratings list
          ratings.map((rating) => rating.name)
      }
    </div>
  </div>);
}

export default Place;
