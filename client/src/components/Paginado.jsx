import React from "react";
import './css/paginado.css'

export default function Paginado({ countriesPerPage, countries, paginado }) {
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(((countries-countriesPerPage) / (countriesPerPage+1))+1); i++) {
        pageNumbers.push(i+1)
        // creo la numeracion del paginado
    }
    return (
        <nav>
            <ul className="paginado">
            {pageNumbers && pageNumbers.map(number => (
                <li className='numberPage' key={number}>
                    <a  onClick={() => paginado(number)}>{number}</a>
                </li>
                ))}
            </ul>
        </nav>
    )
} 