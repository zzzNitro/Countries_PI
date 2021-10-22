import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAILS,
  GET_ACTIVITIES,
  SET_NAME,
  SET_ORDER_BY_NAME,
  SET_FILTER_BY_CONT,
  SET_PAGE,
  SET_ORDER_BY_POP,
  FILTER_COUNTRIES,
} from "./actions"


const initialState = {
    countries: [],
    countriesByID: {},
    activities: [],
    name: "",
    orderByName:"",
    orderByPop:"",
    filterByCont:"",
    page: 1
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
      case GET_ALL_COUNTRIES:
          return {
              ...state,
              countries: payload
          }
      case GET_ACTIVITIES:
          return {
              ...state,
              activities: payload
          }
      case GET_COUNTRY_DETAILS:
          return {
              ...state,
              country: payload
          }
      case SET_NAME:
          return {
              ...state,
              name: payload
          }
      case SET_PAGE:
          return {
              ...state,
              page: payload
          }
      case SET_ORDER_BY_NAME:
          return {
              ...state,
              orderA: payload
          }
      case SET_ORDER_BY_POP:
          return {
              ...state,
              orderByPop: payload
          }
      case SET_FILTER_BY_CONT:
          return {
              ...state,
              filterC: payload
          }
      case FILTER_COUNTRIES:
          let newCountries = state.countries.all.filter(c => {
              return c.continent === payload
          })
          return {
              ...state,
              countries: {
                  ...state.countries,
                  result: newCountries
              }
          }
      default:
          return state
  }
}
  
export default reducer  