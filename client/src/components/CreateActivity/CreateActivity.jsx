// name, difficulty, duration, season, countryID, description
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postActivity, getCountries } from "../../actions";
import NameFlag from "../Name_Flag/NameFlag ";
import s from "./createactivity.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark, faSquareCheck, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import img from "../../img/globe-24.webp"
// import image from "../img/fondoactividades.png"



function validate(input) {
    let errors = {};
    let regexDescription = /^.{1,250}$/;
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (!regexName.test(input.name)) {
        errors.name = "Name does not accept numbers"
    }
    if (!input.name.trim()) {
        errors.name = "Name is required"
    } else if (!input.difficulty) {
        errors.difficulty = "Difficulty is required"
    } else if (!input.difficulty || input.difficulty === "" || input.difficulty > 5 || input.difficulty < 1) {
        errors.difficulty = "Value between 1 and 5 is required"
    } else if (!input.duration || input.duration === "") {
        errors.duration = "Duration is required"
    }
    else if (!input.season || input.season === 'null') {
        errors.season = "Season is required"
    }
    else if (!input.countryID.length) {
        errors.countryID = "Country is required"
    }
    else if (!input.description) {
        errors.description = "Description is required"
    }
    else if (!regexDescription.test(input.description)) {
        errors.description = "Description exceeds 250 characters"
    }

    // console.log(errors)
    return errors
}
const iconFail = <FontAwesomeIcon className={s.fail_icon} icon={faRectangleXmark} />
const iconOk = <FontAwesomeIcon className={s.ok_icon} icon={faSquareCheck} />
const iconEarth = <FontAwesomeIcon className={s.earth_icon} icon={faEarthAmericas} />

export default function CreateActivity() {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const history = useHistory();
    const [errors, setErrors] = useState({})
    const [activeButton, setActiveButton] = useState(false)

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);


    const [input, setInput] = useState(
        {
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countryID: [],
            description: ""
        }
    )
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        handleDisable()
    }

    function handleSelect(e) {

        if (e.target.value !== 'null' && !input.countryID.includes(e.target.value)) {
            setInput({
                ...input,
                [e.target.name]: [...input.countryID, e.target.value]
            })
            setErrors(validate({
                ...input,
                [e.target.name]: e.target.value
            }))
            handleDisable()
        }
    }

    function handleDisable() {
        if (Object.keys(errors).length !== 0) {
            setActiveButton(false)
        } else { setActiveButton(true) }
    }


    function handleSubmit(e) {
        e.preventDefault();
        // console.log(input)
        dispatch(postActivity(input))
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countryID: [],
            description: "",
        })
        alert("Activity created")
        history.push('/activities')
    }
    //  console.log(input.countryID.length)
    function handleDelete(el) {
        // console.log(el)
        setInput({
            ...input,
            countryID: input.countryID.filter(c => c !== el)
        })
        setErrors(validate({
            ...input,
            countryID: input.countryID.filter(c => c !== el)
        }))
        handleDisable()
    }
    // console.log(input)
    return (
        <div className={s.todo}>

            {/* <img className={s.image} src={image} alt="No se encontro la imagen" /> */}
            <div className={s.barra}>
                <p className={s.app}>World-Scanner</p>
                <img className={s.img} src={img} alt="" />
                <h1 className={s.titulo}>Create your activity in one or more countries</h1>

                <Link to='/activities'><button className={s.btnactivities}>Activities</button></Link>
                <Link to='/home'><button className={s.btnhome}>{iconEarth}  Back to home</button></Link>
            </div>
            <div className={s.cajaform}>
                <form onSubmit={(e) => handleSubmit(e)} className={s.form}>
                    <div className={s.allinput}>
                        <div className={s.inputcont}>
                            <input className={s.input} autocomplete="off" placeholder="Activity" type="text" value={input.name} name="name" onChange={(e) => handleChange(e)} />
                            {input.name && !errors.name && (<div>{iconOk}</div>)}
                            {errors.name && (<div>{iconFail}</div>)}
                            {errors.name && (<div className={s.errorname}>{errors.name}</div>)}
                        </div>
                        <div className={s.inputcont}>
                            {/* <label >Difficulty:</label> */}
                            <input className={s.input} autocomplete="off" placeholder="Difficulty level (1-5)" type="number" min={1} max={5} value={input.difficulty} name="difficulty" onChange={(e) => handleChange(e)} />
                            {input.difficulty && !errors.difficulty && (<div>{iconOk}</div>)}
                            {errors.difficulty && (<div>{iconFail}</div>)}
                            {errors.difficulty && (<div className={s.errorduration}>{errors.difficulty}</div>)}
                        </div>
                        <div className={s.inputcont}  >
                            <input className={s.input} autocomplete="off" placeholder="Duration minutes" type="number" value={input.duration} name="duration" onChange={(e) => handleChange(e)} />
                            {input.duration && !errors.duration && (<div>{iconOk}</div>)}
                            {errors.duration && (<div>{iconFail}</div>)}
                            {errors.duration && (<div className={s.errorduration}>{errors.duration}</div>)}
                        </div>
                    </div>

                    <div className={s.seasonycountry}>
                        Select season:
                        <select className={s.select} name="season" onChange={(e) => handleChange(e)}>
                            <option value="null">-</option>
                            <option value="summer">summer</option>
                            <option value="autumn">autumn</option>
                            <option value="winter">winter</option>
                            <option value="spring">spring</option>

                        </select>
                        {errors.season && (<div className={s.season}>{errors.season}</div>)}
                    </div>

                    <div className={s.seasonycountry}>
                        Select countries:
                        <select className={s.select} name="countryID" onChange={(e) => handleSelect(e)}>
                            <option value="null">-</option>
                            {
                                countries?.map(c => (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                ))
                            }</select>
                        {errors.countryID && (<div className={s.countryID}>{errors.countryID}</div>)}
                    </div>
                    <div>
                        <textarea className={s.description} name="description" rows="4" cols="40" placeholder="Description..." onChange={(e) => handleChange(e)}></textarea>
                        {errors.description && (<div className={s.countryID}>{errors.description}</div>)}
                        {/* <label htmlFor="">Description:</label>
                <input type="text" value={input.description} name= "description"/> */}
                    </div>
                    <button id="btn" disabled={!activeButton} className={s.btnsubmit} type="submit">Create!</button>
                </form>
                <div className={s.nameflag}>
                    <p className={s.add}>Added countries</p>
                    <div className={s.boxnameflag}>
                        {input.countryID?.map(el =>
                            <div >
                                <NameFlag key={el} id={el} onClose={() => handleDelete(el)} />
                            </div>
                        )}
                    </div>


                </div>
            </div>

        </div>
    )

}