import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./css/nav.module.css";
import { connect, useDispatch } from "react-redux";
import {
  getCountries, orderAlpha, orderCont, orderAlphaRev, orderPop, orderPopRev } from "../actions/index.js";
import SearchBar from "./SearchBar.jsx";
import SearchActivity from "./SearchActivity";
import img from "../img/Mundo_hecho_de_Banderas.gif"
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
    <div className={s.total}>
      <Link to="/" className={s.logo}>
        <p>World-Scanner</p>
        <img className={s.img} src={img} alt="" />
      </Link>
      <SearchBar />
      <SearchActivity />
      <div className={s.sort_filter}>
        <div className={s.select}>
          <p>Sort by</p>
          <select  onChange={(event) => setSort(event.target.value)}>
            <option value="all">-</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="incremenetpopulation">🡅 population</option>
            <option value="decrementpopulation">🡇 population</option>
          </select>
        </div>
        <div >
          <div className={s.select}>
          <p>Filter by Continent</p>
            <select  onChange={(event) => setRegion(event.target.value)}>
              <option value="all">All</option>
              <option value="Americas">Americas</option>
              <option value="Europe">Europe</option>
              <option value="Africa">Africa</option>
              <option value="Oceania">Oceania</option>
              <option value="Asia">Asia</option>
            </select>
          </div>
        </div>
        <div>

        </div>
        <div className={s.borderactiv}>
          <Link to="/activities" className={s.activities}>
        <p >Create and view all activities</p>
      </Link>
        </div>
      
      </div>
      {/* <h5>Filtered: {state.countries.length}</h5>  */}

     
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







//mover a componente nuevo
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