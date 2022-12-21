import React from "react";
import { Link } from "react-router-dom";

export default function landingPage (){
    return(
        <div>
            <h1>Bienvenidos</h1>
            <Link to= '/home'>
                <button>Let's travel</button>
            </Link>
        </div>
    )
}

