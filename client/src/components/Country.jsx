import React from "react";
// import style from "./country.module.css"
import { Link } from "react-router-dom";
export default function Country ({ flag_img, name, region, id, activities }) {
    // console.log(Country)
    return (
        <div className=''>
            <Link className='' to={`/countries/${id}`}>
                <h2 className=''>{name}</h2>
            </Link>
            <div className=''>
                <img src={flag_img} alt="no img" />
            </div>
            <h3>{region}</h3>
            {/* <h3>{activities}</h3> */}


        </div>
    );
};
