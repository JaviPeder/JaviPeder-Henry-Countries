import React from "react";
import { Link } from "react-router-dom";
import s from "./landingPage.module.css"

export default function landingPage() {
   
   
    return (
        <div className={s.container}>
            <h1>Welcome!!!</h1>
            <Link to='/home'>
                <button className={s.button}>Let's travel</button>
            </Link>
        </div>
    )
}

