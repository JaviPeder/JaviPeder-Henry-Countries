import React, { useState } from "react";
import Country from "../Country/Country.jsx";
import { useSelector } from "react-redux";
import s from "./allcountries.module.css"
import Paginado from '../Paginado/Paginado.jsx'
// import img from '../../img/error.png'

export default function AllCountries() {

  const countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(1);
  //  eslint-disable-next-line
  const [countriesPerPage, setcountriesPerPage] = useState(9);
  
  //0      9
  //9 ---- 18
  const lastPosition = currentPage * countriesPerPage;
  const firstPosition = lastPosition - countriesPerPage;
  // sin modif      lo que debo lograr
  // 0-9
  // 9-18           9-19             pag1
  // 18-27          19-29            pag2
  // 27-36          29-39            pag3
  // debo conseguir que la primera pagina tenga  9 paises y el resto 10
  //last p = 18
  const paginado = (page) => {
    setCurrentPage(page);
  }
  if (firstPosition > 1) {
    var currentCountries = countries.slice(firstPosition + currentPage - 2, lastPosition + currentPage - 1)
  } else {
    currentCountries = countries.slice(firstPosition, lastPosition)
  }
  // console.log(countries.length)
  // console.log(firstPosition)
  // console.log(lastPosition)
  // console.log(currentCountries.length)
  
  function nextPage() {
    if (currentPage === 26) {
      setCurrentPage(currentPage)
    } else {
      setCurrentPage(currentPage + 1)
    }
  }
  function prevPage() {
    if (currentPage === 1) {
      setCurrentPage(currentPage)
    } else {
      setCurrentPage(currentPage - 1)
    }
  }
  function firstPage() {
    setCurrentPage(1)
  }
  function lastPage() {
    setCurrentPage(26)
  }
  // console.log(currentCountries)
  return (
    <div>
      <Paginado
        countriesPerPage={countriesPerPage}
        countries={countries.length}
        paginado={paginado} />
      <div>
        <div className={s.nextprev}>
          <button className={s.btn} onClick={() => firstPage()}>{'<<'}</button>
          <button className={s.btn} onClick={() => prevPage()}>prev</button>
          <button className={s.btn} onClick={() => nextPage()}>next</button>
          <button className={s.btn} onClick={() => lastPage()}>{'>>'}</button>
        </div>
        {
          currentCountries.length ? currentCountries.map((e) => (
            <Country
              id={e.id}
              flag_img={e.flag_img}
              name={e.name}
              region={e.region}
              key={e.id}
              activities={e.activities}
            />)) : <div className={s.fail}>
            <h2 >Loading...</h2>
            {/* <img className={s.failimg} src={img} alt="not found" /> */}
          </div>}
      </div>
    </div>
  );
}


