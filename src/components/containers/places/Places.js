import React, { useEffect, useState } from "react";
import { BiFilter } from "react-icons/bi";
import { FaHamburger, FaHotdog } from "react-icons/fa";
import { IoBeer, IoPizza, IoCloseCircleSharp } from "react-icons/io5";
import { GiCoffeeBeans } from "react-icons/gi";
import { RiCake3Line, RiRestaurantFill } from "react-icons/ri";
import { categoryNameMapper } from "../../../helpers/categoryNameMapper";

import axios from "../../../axios";
import CategoriesFilter from "../../categories-filter/CategoriesFilter";
import Header from "../../layout/header/Header";
import PlaceList from "../../places-list/PlaceList";

import "./Places.css";
import Spinner from "../../layout/spinner/Spinner";
import NoResults from "../../layout/no-result/NoResults";

const Places = () => {
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [opened, setOpened] = useState(false);
  const [category, setCategory] = useState(undefined);

  useEffect(() => {
    const params = { page };
    setLoading(true);
    if (category) params['category'] = category;

    axios.get("/eating-places", { params })
      .then((response) => {
        console.log("Loaded eating places!");
        setLoading(false);
        setHasNextPage(response.data.hasNextPage);
        setPlaces((places) => {
          return page == 1 ?
            response.data.eatingPlaces :
            [...places, ...response.data.eatingPlaces]
        });
      })
      .catch((err) => console.error(err));
  }, [category, page]);

  useEffect(() => { setPage(1) }, [category]);

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
    <Spinner show={loading && page === 1} />
    <header className="Places_header">
      <Header title="Restaurantes" />
      <div className="Places_filter">
        <button className="Places_categoriesButton" onClick={() => setOpened(true)}>
          Categorias
          <BiFilter className="Places_filterIcon" />
        </button>
        { category ?
            <div className="Places_selectedCategory" onClick={() => setCategory('')}>
              {categoryNameMapper(category)}
              <span className="Places_closeIcon"><IoCloseCircleSharp /></span>
            </div> : null
        }
      </div>
      <CategoriesFilter
        categories={categories}
        opened={opened} close={() => setOpened(!opened)}
        selected={category}
        select={(category) => setCategory(category)} />
    </header>
    <main className="Places_content">
      { places.length === 0 ?
          <NoResults
            showSadIcon={true}
            message="Nenhum resultado encontrado"
            subMessage="Tente novamente com outros filtros" /> :
          <PlaceList
            places={places}
            addPage={() => setPage((page) => page + 1)}
            hasNextPage={hasNextPage} />
      }
    </main>
  </>);
}

export default Places;
