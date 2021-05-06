import React, { useState } from "react";
import CategoriesFilter from "../../categories-filter/CategoriesFilter";
import Header from "../../layout/header/Header";

import PlaceList from "../../places-list/PlaceList";

import "./Places.css";

const Places = () => {
  // Carregar places
  // Pesquisar de acordo com os filtros
  const [opened, setOpened] = useState(true);

  return (<>
    <header className="Places_header">
      <Header title="Restaurantes" />
      <CategoriesFilter opened={opened} close={() => setOpened(!opened)} />
    </header>
    <main className="Places_content">
      <PlaceList
        places={[
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
          {
            name: "Pastelaria do Matheus",
            cost: 3,
            category: "PASTELARIA",
          },
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
    </main>
  </>);
}

export default Places;
