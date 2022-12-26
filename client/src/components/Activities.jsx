import React from "react";
import style from "./css/activities.module.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getActivities, deleteActivity } from "../actions/index.js";
import { useDispatch, useSelector} from "react-redux";

export default function Activity () {

    const activities = useSelector((state) => state.activities);

    const dispatch = useDispatch();
      const allCountries = useSelector((state)=> state.countries)
   function handleDelete (e){
    if(window.confirm(`Seguro que desea eliminar la actividad ${e.target.name}?`)){
    // console.log(e.target.name)
    dispatch(deleteActivity(e.target.name))
    alert((`La actividad ${e.target.name} fué eliminada exitosamente`))}else{
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
                    <Link  to="/home"><button className={style.btn_home}>Back to home</button></Link>
                </div>
                
                <div>
                {
                    activities?.map((activ) => ( 
                        <div key= {activ.id} className={style.contenedor}>
                            <h1 className={style.name}>{activ.name}</h1> 
                            <div className={style.miniconteiner}>
                                <h2>Difficulty: <div className={style.valores}>{activ.difficulty}</div></h2>
                                {/* <div className={style.circular_progress}></div> */}
                                <h2>Duration: <div className={style.valores}>{activ.duration} minutes</div></h2>
                                <h2>Season: <div className={style.valores}>{activ.season}</div></h2>
                            </div>
                            <h3>Description: <br />
                            <br />
                                {activ.description}</h3>
                            <h2 className={style.países}>Countries: {activ.countries?.map(c=>
                                <div className={style.flag_name}>
                                    {c.name}
                                    <img className={style.flag} src={c.flag_img} alt="" />
                                    {/* <img className={s.flag} src={c.flag_img} alt="no img" /> */}
                                </div>  )}</h2>   
                            <button name= {activ.name} onClick={(e)=>handleDelete(e)} className={style.btn_delete}> Remove</button>    
                        </div>
                            
                        ))
                }
                
                </div>
            </div>
        );
};