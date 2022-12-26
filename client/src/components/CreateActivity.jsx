// name, difficulty, duration, season, countryID, description
import React, {useState, useEffect} from "react";
import { Link, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {postActivity, getCountries} from "../actions";
import Name_Flag from "./Name_Flag ";
import s from "./css/createactivity.module.css"
// import image from "../img/fondoactividades.png"


export default function CreateActivity(){
const dispatch = useDispatch();
const countries = useSelector((state)=>state.countries);
const history = useHistory();
useEffect(()=>{
    dispatch(getCountries());
},[]);


const [input, setInput] = useState(
    {
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countryID:[],
        description:""
    }
)
function handleChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })   
}
 function handleSelect(e){
    setInput({
        ...input,
        [e.target.name]:[...input.countryID, e.target.value]
    })
 }

 function handleSubmit(e){
    e.preventDefault();
    // console.log(input)
    dispatch(postActivity(input))
    setInput({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countryID:[],
        description:"",
    })
    alert("Activity created")
    history.push('/activities')
 }
//  console.log(input)
function handleDelete(el){
    console.log(el)
    setInput({
        ...input,
        countryID:input.countryID.filter(c=>c !== el)
    })
}

return(
    <div className={s.todo}>
        
        {/* <img className={s.image} src={image} alt="No se encontro la imagen" /> */}
        <div className={s.barra}>
                    <h1 className={s.titulo}>Create your activity in one or more countries</h1>
                    <Link to='/home'><button className={s.btnhome}>Home</button></Link>
            <Link to='/activities'><button className={s.btnactivities}>Activities</button></Link>
        </div>
        <div className={s.cajaform}>
        <form onSubmit={(e)=>handleSubmit(e)} className= {s.form}>
            <div className={s.allinput}>
                <div className={s.inputcont}>
                    {/* <label placeholder="Activity">Name:</label> */}
                    <input className={s.input} placeholder="Activity" type="text" value={input.name} name= "name" onChange={(e)=>handleChange(e)}/>
                </div>
                <div className={s.inputcont}>
                    {/* <label >Difficulty:</label> */}
                    <input className={s.input} placeholder="Difficulty level (1-5)" type="number" min={1} max={5} value={input.difficulty} name= "difficulty" onChange={(e)=>handleChange(e)}/>
                </div>
                <div className={s.inputcont}  >
                    <input className={s.input} placeholder="Duration minutes" type="number" value={input.duration} name= "duration" onChange={(e)=>handleChange(e)}/>
                </div>
            </div>
           
            <div className={s.seasonycountry}>
                Select season:
                <select className={s.select} name="season" onChange={(e)=>handleChange(e)}>
                    <option value="null">-</option>
                    <option value="summer">summer</option>
                    <option value="autumn">autumn</option>
                    <option value="winter">winter</option>
                    <option value="spring">spring</option>
                </select>
                {/* <input type="text" value={input.season} name= "season" onChange={handleChange}/> */}
            </div>

            <div className={s.seasonycountry}>Select countries: 
               <select className={s.select} name="countryID"  onChange={(e=>handleSelect(e))}>
               <option value="null">-</option>
                {
                    countries.map(c=>(
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))
                }</select>
            </div>
            <div>
            <textarea className={s.description} name="description" rows="4" cols="40" placeholder="Description..." onChange={(e)=>handleChange(e)}></textarea>
                {/* <label htmlFor="">Description:</label>
                <input type="text" value={input.description} name= "description"/> */}
            </div>
            <button className={s.btnsubmit} type="submit">Create!</button>
            </form>
                
            

            <div className={s.nameflag}>
            <p className={s.add}>Added countries</p>

            {input.countryID.map(el=> 
            <div className={s.boxnameflag}><Name_Flag key={el} id={el} onClose={()=>handleDelete(el)}/>
            {/* <button className={s.close} onClick={()=>handleDelete(el)}>remove</button> */}
            </div>
            )} 

            </div> 
        </div>
       
    </div>
)

}