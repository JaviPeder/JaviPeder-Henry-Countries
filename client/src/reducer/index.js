const initialState = {
    countries: [],
    countryDetail: [],
    activities:[]
  };
  //Ordeno alfabeticamente
  const ordAlpha = (a , b) =>{
    if(a.name < b.name) return -1
    if(b.name < a.name) return 1 
    return 0
}
// Ordeno la poblacion de menor a mayor
 const ordPop = (a, b) =>{
    return a.population - b.population
}


  const rootReducer = (state = initialState, action) => {
    switch (action.type) {

      case "GET_COUNTRIES": {
        return {
          ...state,
          countries: action.payload,
        };
      }
      case "GET_COUNTRY": {
        return {
          ...state,
          countryDetail: action.payload,
        };
      }
      case "GET_BY_NAME": {
        return {
          ...state,
          countries: action.payload,
        };
      }
      case "ORD_ALPHA": {
        return {
          ...state,
          countries: state.countries.slice().sort(ordAlpha),
        };
      }
  
      case "ORD_ALPHA_REV": {
        return {
          ...state,
          countries: state.countries.slice().sort(ordAlpha).reverse(),
        };
      }
  
      case "ORD_POPULATION": {
        return {
          ...state,
          countries: state.countries.slice().sort(ordPop),
        };
      }
  
      case "ORD_POPULATION_REV": {
        return {
          ...state,
          countries: state.countries.slice().sort(ordPop).reverse(),
        };
      }
      case "FILTER_CONTINENT": {
        return {
          ...state,
          countries: state.countries.filter((c) => c.region === action.payload),
        };
      }
      case "SHOW_ACTIV": {
        return{
          ...state,
          countries: state.countries.filter((c)=>{ return c.activities.some((a)=> a.name === action.payload)   
          })
      }
      }
      case "GET_ACTIVITIES": {
        return {
            ...state,
            activities: action.payload,
        }
      }

    case "POST_ATIVITY":{
        return{
            ...state
        }
    }

    case "DELETE_ACTIV_BY_NAME":{
        return{
            ...state
        }
    }
      default:
        return state;
    }  
    
};

export default rootReducer;