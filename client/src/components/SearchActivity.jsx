import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import style from "./searchBar.module.css";
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
    <div className=''>
    <label>Activity</label>
    <form>
      <input
        className=''
        placeholder="Search your activity"
        type="text"
        autocomplete="off"
        value={activity}
        onChange={activityHandler}
      />
      <button className='' onClick={searchActHandler}>
        Search
      </button>
    </form>
  </div>
  );
};







