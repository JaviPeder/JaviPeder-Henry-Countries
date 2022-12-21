import React, {  useState } from "react";
import Country from "./Country.jsx";
import { useSelector } from "react-redux";
// import style from "./countries.module.css";
// import "./countries.module.css"
import Paginado from './Paginado.jsx'

export default function AllCountries () {
    // const countries = useSelector((state) => state.countries);


    const countries = useSelector((state) => state.countries);
const [currentPage, setCurrentPage] = useState(1);
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
const paginado = (page)=>{
  setCurrentPage(page);
}
if(firstPosition >1){
var currentCountries = countries.slice(firstPosition+currentPage-2, lastPosition+currentPage-1)
}else{
  currentCountries = countries.slice(firstPosition, lastPosition)
}

// console.log(countries.length)
// console.log(firstPosition)
// console.log(lastPosition)
// console.log(currentCountries.length)
      return (
        <div>
        <Paginado 
          countriesPerPage = {countriesPerPage}
          countries= {countries.length}
          paginado= {paginado}/>
          <div>
            {
            currentCountries.map((e) => ( 
              <Country
                id={e.id}
                flag_img={e.flag_img}
                name={e.name}
                region={e.region}
                key={e.id}
                activities={e.activities}
              />))}
          </div>
        </div>
      );
    }
  
   
//otra maner de hacer el paginado

// const countries = useSelector((state) => state.countries);
// const [currentPage, setCurrentPage] = useState(1);
// const [countriesPerPage, setcountriesPerPage] = useState(10);
// const lastPosition = currentPage * countriesPerPage;
// const firstPosition = lastPosition - countriesPerPage;
// const currentCountries = countries.slice(firstPosition, lastPosition);

// const Paginado = function(page){
//   setCurrentPage(page)
// }

// <Paginado 
// countriesPerPage = {countriesPerPage}
// countries= {countries.length}
// Paginado= {Paginado}/>