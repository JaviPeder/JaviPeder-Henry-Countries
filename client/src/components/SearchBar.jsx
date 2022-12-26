import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./css/searchbar.module.css";
import { getCountries, getByName } from "../actions";

export default function SearchBar() {

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const homeHandler = () => {
    dispatch(getCountries());
  };
// refrescar la pagina

  return (
    <div className={s.container}>
        {/* formulario para buscar por nombre */}
        <form className={s.form} onSubmit={(e) => {
                e.preventDefault();
                dispatch(getByName(input));
                setInput('');
    }}
    >
     <input
        className={s.input}
        type="text"
        placeholder="Search country by name"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <input className={s.btn} type="submit" value= 'Search' />
    </form> 
        <button className={s.btnreset} onClick={() => homeHandler()}>
          Reset
        </button>

    </div>
  );
};

