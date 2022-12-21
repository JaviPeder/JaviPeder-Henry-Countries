import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountry } from "../actions";
// import  Activities  from "./Activities";
// import style from "./countryId.module.css";

export default function CountryId(){
    // countryDetail detalles de cada pais
    
    const country = useSelector((state) => state.countryDetail);
    const dispatch = useDispatch();
    let { id } = useParams();
    // me guardo el id
    
    useEffect(() => {
        dispatch(getCountry(id));
 // eslint-disable-next-line
      }, [id]);
// mientras tenga id

// console.log(country.activities)
    return (
        // <h1>hola</h1>
        <div>
            <div className=''>
                <button className=''>
                    <Link className='' to="/home" >Back to home</Link></button>
                <div className=''>
                    <h1>{country.name}</h1>
                    <div className=''>
                        <img src={country.flag_img} alt="No img" />
                    </div>
                    <h3>Continent: {country.region}</h3>
                    <h4>Subregion: {country.subregion}</h4>
                    <h4>Capital: {country.capital}</h4>
                    <h4>Area: {country.area} Km2</h4>
                    <h4>Population: {country.population} Hab. </h4>
                    <h5>Código internacional alpha3: {country.id}</h5>
                    <div>
                    <h4>Actividades:</h4>
                    {country.activities?.map(a=> <h5>{a.name}</h5>)}
                    </div>
                    {/* <div className=''>
                        <Activities countryName={country.name} activities={country.activities}/>
                    </div> */}
                </div>

            </div>
        </div>
    )
}
