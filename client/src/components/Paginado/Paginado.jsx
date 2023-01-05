import React from "react";
import "./paginado.css"

export default function Paginado({ countriesPerPage, countries, paginado }) {
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(((countries-countriesPerPage) / (countriesPerPage+1))+1); i++) {
        pageNumbers.push(i+1)
        // creo la numeracion del paginado

        // ((250-9)/10)+1
    }
        
    return (
        <nav>
            <ul className="paginado">
            {pageNumbers? pageNumbers.map(number => (
                <li className="numberPage" key={number}>
                    <p  onClick={() => paginado(number)}>{number}</p>
                </li>
                )):<div>Loading pages...</div> }
            </ul>
        </nav>
    )
} 