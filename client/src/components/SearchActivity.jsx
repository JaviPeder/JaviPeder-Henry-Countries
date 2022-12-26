import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./css/searchactivity.module.css";
import { getCountries, showActiv} from "../actions";

export default function SearchActivity() {

  const [activity, setActivity] = useState("");
  const dispatch = useDispatch();


// refrescar la pagina
const activityHandler = (e) => {
    e.preventDefault();
    setActivity(e.target.value);
  };

  const searchActHandler = (e) => {
    e.preventDefault();
    getCountries();
    setTimeout(() => {
      dispatch(showActiv(activity));
    }, 200);
    // console.log(activity);
    setActivity("");
  };
  return (
    <div className={s.contenedor}>
    <br />
    <label>Search by activity</label>
    
    <form>
      <input
        className={s.input}
        placeholder="Search your activity"
        type="text"
        autocomplete="off"
        value={activity}
        onChange={activityHandler}
      />
      <button className={s.btn} onClick={searchActHandler}>
        search
      </button>
    </form>
  </div>
  );
};







