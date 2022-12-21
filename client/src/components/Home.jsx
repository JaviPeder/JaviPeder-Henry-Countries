import React, { useEffect } from "react";
import { getCountries } from "../actions/index.js";
import { useDispatch} from "react-redux";
// import { Link } from "react-router-dom";
import AllCountries from "./AllCountries.jsx";
import Nav from "./Nav.jsx";


export default function Home() {
    // Hooks
  const dispatch = useDispatch();
//   const allCountries = useSelector((state)=> state.countries)

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);


    return (
        <div>
            <Nav />
            <div>
                <AllCountries />
            </div>
        </div>
    );
}

