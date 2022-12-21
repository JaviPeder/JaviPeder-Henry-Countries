import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// // import style from "../Nav/navBar.module.css";
import { connect, useDispatch } from "react-redux";
import {
  getCountries, orderAlpha, orderCont, orderAlphaRev, orderPop, orderPopRev } from "../actions/index.js";
import SearchBar from "./SearchBar.jsx";
import SearchActivity from "./SearchActivity";

const NavBar = ({
  orderAlpha, getCountries, orderAlphaRev, orderCont, showActiv, orderPop, orderPopRev
}) => {
  const [sort, setSort] = useState("");
  const [region, setRegion] = useState("");
  // const [activity, setActivity] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (region) {
      getCountries();
      if (region !== "all") {
        setTimeout(() => {
          dispatch(orderCont(region));
        }, 200);
      }
    }
    // eslint-disable-next-line
  }, [region]);

  useEffect(() => {
    if (sort === "all") getCountries();
    else if (sort === "a-z") orderAlpha();
    else if (sort === "z-a") orderAlphaRev();
    else if (sort === "incremenetpopulation") orderPop();
    else if (sort === "decrementpopulation") orderPopRev();
  // eslint-disable-next-line
  }, [sort]);

  // const activityHandler = (e) => {
  //   e.preventDefault();
  //   setActivity(e.target.value);
  // };

  // const searchActHandler = (e) => {
  //   e.preventDefault();
  //   getCountries();
  //   setTimeout(() => {
  //     dispatch(showActiv(activity));
  //   }, 200);

  //   setActivity("");
  // };

  return (
    <div className=''>
      <Link to="/" className=''>
        <p>Welcome LOGO</p>
      </Link>
      <div className=''>
        <p>Sort by</p>
        <select onChange={(event) => setSort(event.target.value)}>
          <option value="all">-</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="incremenetpopulation">🡅 population</option>
          <option value="decrementpopulation">🡇 population</option>
        </select>
        <SearchBar />
      </div>
      <div className=''>
        <p>Filter by Continent</p>

        <div className='SelectRegion'>
          <select onChange={(event) => setRegion(event.target.value)}>
            <option value="all">All</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Asia">Asia</option>
          </select>
        </div>
      </div>
      <SearchActivity />

      <h2>Resultado del Filtro </h2>
      {/* <div className=''>
        <label>Activity</label>
        <form>
          <input
            className=''
            placeholder="Search your activity."
            type="text"
            autocomplete="off"
            value={activity}
            onChange={activityHandler}
          />
          <button className='' onClick={searchActHandler}>
            Search
          </button>
        </form>
      </div> */}

      <Link to="/activities" className=''>
        <p className=''>Create and view all activities</p>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderAlpha: () => dispatch(orderAlpha()),
    getCountries: () => dispatch(getCountries()),
    orderCont: (region) => dispatch(orderCont(region)),
    orderAlphaRev: () => dispatch(orderAlphaRev()),
    // showActiv: (payload) => dispatch(showActiv(payload)),
    orderPop: () => dispatch(orderPop()),
    orderPopRev: () => dispatch(orderPopRev()),
  };
};
const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);