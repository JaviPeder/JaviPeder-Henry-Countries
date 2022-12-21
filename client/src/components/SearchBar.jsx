import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import style from "./searchBar.module.css";
import { getCountries, getByName } from "../actions";

export default function SearchBar() {

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const homeHandler = () => {
    dispatch(getCountries());
  };
// refrescar la pagina

  return (
    <div className=''>
        {/* formulario para buscar por nombre */}
        <form className='' onSubmit={(e) => {
                e.preventDefault();
                dispatch(getByName(input));
                setInput('');
    }}
    >
     <input
        className=''
        type="text"
        placeholder="Search country by name"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <input className='' type="submit" value= 'Search' />
    </form> 
        <button className='' onClick={() => homeHandler()}>
          Reset
        </button>

    </div>
  );
};

