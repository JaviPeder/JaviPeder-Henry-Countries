import React, { useEffect } from "react";
import { getCountries } from "../actions/index.js";
import { useDispatch} from "react-redux";
// import { Link } from "react-router-dom";
import AllCountries from "./AllCountries.jsx";
import Nav from "./Nav.jsx";
import s from "./css/home.module.css"

export default function Home() {
  const dispatch = useDispatch();
//   const allCountries = useSelector((state)=> state.countries)

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

    return (
        <div className={s.homeall}>
            <Nav />
            <div className={s.countriesall}>
                <AllCountries />
            </div>
        </div>
    );
}

