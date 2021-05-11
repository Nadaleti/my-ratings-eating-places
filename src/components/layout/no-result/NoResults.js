import React from "react";
import { FaSadCry } from 'react-icons/fa';

import "./NoResults.css";

const NoResults = () => {
  return (
    <div className="NoResults_container">
      <FaSadCry className="NoResults_icon" />
      <h3>Nenhum resultado encontrado</h3>
      <span>Tente novamente com outros filtros</span>
    </div>
  )
}

export default NoResults;
