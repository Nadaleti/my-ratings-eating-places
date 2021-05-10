import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
import { FaHamburger, FaHotdog } from "react-icons/fa";
import { IoBeer, IoPizza, IoCloseCircleSharp } from "react-icons/io5";
import { GiCoffeeBeans } from "react-icons/gi";
import { RiCake3Line, RiRestaurantFill } from "react-icons/ri";
import { categoryNameMapper } from "../../../helpers/categoryNameMapper";

import CategoriesFilter from "../../categories-filter/CategoriesFilter";
import Header from "../../layout/header/Header";
import PlaceList from "../../places-list/PlaceList";

import "./Places.css";

const Places = () => {
  // Carregar places
  // Pesquisar de acordo com os filtros
  const [opened, setOpened] = useState(false);
  const [category, setCategory] = useState(undefined);

  const categories = [
    { category: 'PIZZA', icon: <IoPizza /> },
    { category: 'CANDY', icon: <RiCake3Line /> },
    { category: 'CAFE', icon: <GiCoffeeBeans /> },
    { category: 'BURGER', icon: <FaHamburger /> },
    { category: 'HOTDOG', icon: <FaHotdog /> },
    { category: 'RESTAURANT', icon: <RiRestaurantFill /> }, 
    { category: 'PUB', icon: <IoBeer /> }
  ];

  return (<>
    <header className="Places_header">
      <Header title="Restaurantes" />
      <div className="Places_filter">
        {
          category ?
            <div className="Places_selectedCategory" onClick={() => setCategory('')}>
              {categoryNameMapper(category)}
              <span className="Places_closeIcon"><IoCloseCircleSharp /></span>
            </div> :
            <button className="Places_categoriesButton" onClick={() => setOpened(true)}>
              Categorias
              <BiFilter className="Places_filterIcon" />
            </button>
        }
      </div>
      <CategoriesFilter
        categories={categories}
        opened={opened} close={() => setOpened(!opened)}
        select={(category) => setCategory(category)} />
    </header>
    <main className="Places_content">
      <PlaceList
        places={[
          {
            id: "4d8bMiQ7ugmsgEo",
            name: "Pastelaria do Matheus",
            cost: 2,
            category: "PASTELARIA",
            adresses: [{
              city: "Itu",
              neighborhood: "Jardim Aeroporto I",
              number: 86,
              street: "Rubens Palomio",
              uf: "SP",
              zipCode: "13304651"
            }]
          },
          {
            id: "4d8bMiQ7ugmsgEo",
            name: "Pastelaria do Matheus",
            cost: 2,
            category: "PASTELARIA",
            adresses: [{
              city: "Itu",
              neighborhood: "Jardim Aeroporto I",
              number: 86,
              street: "Rubens Palomio",
              uf: "SP",
              zipCode: "13304651"
            }]
          },
          {
            id: "4d8bMiQ7ugmsgEo",
            name: "Pastelaria do Matheus",
            cost: 2,
            category: "PASTELARIA",
            adresses: [{
              city: "Itu",
              neighborhood: "Jardim Aeroporto I",
              number: 86,
              street: "Rubens Palomio",
              uf: "SP",
              zipCode: "13304651"
            }]
          },
          {
            id: "4d8bMiQ7ugmsgEo",
            name: "Pastelaria do Matheus",
            cost: 2,
            category: "PASTELARIA",
            adresses: [{
              city: "Itu",
              neighborhood: "Jardim Aeroporto I",
              number: 86,
              street: "Rubens Palomio",
              uf: "SP",
              zipCode: "13304651"
            }]
          },
        ]}
      />
    </main>
  </>);
}

export default Places;
