import React from "react";

import "./App.css";
import PlaceList from "./components/places-list/PlaceList";

export default function App(props) {
  return (
    <PlaceList
      places={[
        {
          name: "Pastelaria do Matheus",
          cost: 3,
          category: "PASTELARIA",
        },
        {
          name: "Pastelaria do Matheus",
          cost: 1,
          category: "PASTELARIA",
        },
        {
          name: "Pastelaria do Matheus",
          cost: 2,
          category: "PASTELARIA",
        },
      ]}
    />
  );
}
