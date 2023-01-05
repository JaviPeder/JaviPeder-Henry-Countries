import React from "react";
import style from "./activities.module.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getActivities, deleteActivity } from "../../actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

const iconEarth = <FontAwesomeIcon className={style.earth_icon} icon={faEarthAmericas} />

export default function Activity() {

    const activities = useSelector((state) => state.activities);

    const dispatch = useDispatch();
    // const allCountries = useSelector((state) => state.countries)
    function handleDelete(e) {
        if (window.confirm(`Seguro que desea eliminar la actividad ${e.target.name}?`)) {
            // console.log(e.target.name)
            dispatch(deleteActivity(e.target.name))
            alert((`La actividad ${e.target.name} fué eliminada exitosamente`))
        } else {
            alert(`La actividad ${e.target.name} no fué eliminada`)
        }
        dispatch(getActivities());
    }
    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch]);

    return (

        <div className={style.total}>

            <div className={style.barra}>
                <h2 className={style.title}>Active life!!!</h2>
                <Link to="/activities/createActivity" ><button className={style.btn_activity}>Create your activity !!!</button></Link>
                <Link to="/home"><button className={style.btn_home}>{iconEarth}  Back to home</button></Link>
            </div>

            <div className={style.allConteiners}>

                {
                    activities?.map((activ) => (
                        <details className={style.details}>
                            <summary>
                                <div className={style.name}>{activ.name}</div>
                            </summary>
                            <div key={activ.id} className={style.contenedor}>
                                <div className={style.topconteiner}>
                                    <div className={style.miniconteiner}>
                                        <h2>Difficulty: <div className={style.valores}>{activ.difficulty}</div></h2>
                                        {/* <div className={style.circular_progress}></div> */}
                                        <h2>Duration: <div className={style.valores}>{activ.duration} minutes</div></h2>

                                        <h2 className={style.valores}> <div className={style.imgseason} id={activ.season}></div></h2>




                                    </div>
                                    <h3 >Description: <br />
                                        <br />
                                        <div className={style.description}>{activ.description}</div>
                                    </h3>
                                </div><h3>Countries:</h3>
                                <div className={style.países}>
                                    

                                    {activ.countries?.map(c =>
                                        <div key={c.id} className={style.flag_name}>
                                            {c.name}
                                            <img className={style.flag} src={c.flag_img} alt="" />
                                            {/* <img className={s.flag} src={c.flag_img} alt="no img" /> */}
                                        </div>)}
                                </div>
                                <div className={style.btn}>
                                    <button name={activ.name} onClick={(e) => handleDelete(e)} className={style.btn_delete} > Remove activity</button>
                                </div>

                            </div>

                        </details>))
                }

            </div>
        </div>
    );
};