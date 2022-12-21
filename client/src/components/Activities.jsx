import React from "react";
// import style from "./country.module.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getActivities } from "../actions/index.js";
import { useDispatch, useSelector} from "react-redux";

export default function Activity () {

    const activities = useSelector((state) => state.activities);

    const dispatch = useDispatch();
    //   const allCountries = useSelector((state)=> state.countries)
    
      useEffect(() => {
        dispatch(getActivities());
      }, [dispatch]);
    
    

        return (
            <div>
                <button className=''>
                    <Link className='' to="/home" >Back to home</Link></button>
                    <button className=''>
                    <Link className='' to="/activities/createActivity" >Create Activity</Link></button>
                <div>
                {
                    activities?.map((activ) => ( 
                        <div key={activ.id}>
                            <h1>{activ.name}</h1> 
                            <h2>{activ.difficulty}</h2>
                            <h2>{activ.duration}</h2>
                            <h2>{activ.season}</h2>
                            <h2>{activ.countries?.map(c=>
                                <h3>{c.name}</h3>)}</h2>   

                        </div>
                            
                        ))
                }
                
                </div>
            </div>
        );
};