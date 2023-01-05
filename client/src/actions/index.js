import axios from "axios";


export function getCountries() {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/countries/");
    dispatch({ type: "GET_COUNTRIES", payload: res.data });
  };
}

export function getCountry(id) {
    return async (dispatch) => {
      const res = await axios.get(`http://localhost:3001/countries/${id}`);
      dispatch({ type: "GET_COUNTRY", payload: res.data });
    };
  }

  export function getByName(name) {
    return async (dispatch) => {
       
      try {
       const res = await axios.get(
          `http://localhost:3001/countries?name=${name}`
        );
        console.log(res.data)
        dispatch({ type: "GET_BY_NAME", payload: res.data });
        
    } catch (error) {
      console.log(error.response.data);
      // console.log(error);
    }
  };
}

export function orderAlpha() {
    return {
      type: "ORD_ALPHA",
    };
  }
  
  export function orderAlphaRev() {
    return {
      type: "ORD_ALPHA_REV",
    };
  }
  
  export function orderPop() {
    return {
      type: "ORD_POPULATION",
    };
  }
  
  export function orderPopRev() {
    return {
      type: "ORD_POPULATION_REV",
    };
  }
  
  export const orderCont = (region) => {
    return {
      type: "FILTER_CONTINENT",
      payload:region,
    };
  };
  //BUSCO ACTIVIDADES EN LOS PAISES
  export const FilterByActiv = (payload) => {
    return {
      type: "FILTER_BY_ACTIV",
      payload,
    };
  };

//Me traigo las actividades de DB
  export function getActivities() {
    return async (dispatch) => {
      const res = await axios.get(`http://localhost:3001/activities`);
      dispatch({ type: "GET_ACTIVITIES", payload: res.data });
    };
  }
  

  export function deleteActivity(name){
    return async (dispatch) => {
        try {
          const res = await axios.delete(
            `http://localhost:3001/activities/`+name);
            // dispatch({ type: "DELETE_ACTIV_BY_NAME", payload: res.data });
            console.log(res)
          // dispatch(res.message);
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function postActivity(payload){
    return async(dispatch) =>{
      try {
        const response = await axios.post(`http://localhost:3001/activities`,payload);
        console.log(response)
        
      } catch (error) {
        console.log(error)
      }
    }
  }