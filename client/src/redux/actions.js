import axios from 'axios'
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS'
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const POST_ACTIVITY = 'POST_ACTIVITY'
export const SET_NAME = 'SET_NAME'
export const SET_ORDER_BY_NAME = 'SET_ORDER_BY_NAME'
export const SET_FILTER_BY_CONT = 'SET_FILTER_BY_CONT'
export const SET_PAGE = 'SET_PAGE'
export const SET_ORDER_BY_POP = 'SET_ORDER_BY_POP'
export const ORDER_COUNTRIES = 'ORDER_COUNTRIES'
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY';


export function getCountries({ page, orderByName, orderByPop, filterByCont, name }){
    return async (dispatch)=>{
      try {
        const response = await axios.get(`http://localhost:3001/countries?page=${page ? page : 1}&orderByName=${orderByName ? orderByName : ""}&orderByPop=${orderByPop ? orderByPop : ""}&filterByCont=${filterByCont ? filterByCont : ""}&name=${name ? name : ""}`)
        return dispatch({
            type: GET_ALL_COUNTRIES,
            payload: response.data
        })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getCountryDetails = (id) => {
  return async (dispatch) => {
      try {
          const response = await axios.get(`http://localhost:3001/countries/${id}`)
          return dispatch({
              type: GET_COUNTRY_DETAILS,
              payload: response.data
          })
      } catch (error) {
          console.log(error)
      }

  }
}

export const getActivities = ({ name }) => {
  return async (dispatch) => {
      try {
          const response = await axios.get(`http://localhost:3001/activities?name=${name}`)
          return dispatch({
              type: GET_ACTIVITIES,
              payload: response.data
          })
      } catch (error) {
          console.log(error)
      }

  }
}

export function postActivity(activity){
    return (dispatch) => {
      try {
        axios.post(`http://localhost:3001/activities/`, activity)
            .then(() => {
                return dispatch({
                    type: POST_ACTIVITY
                })
            })
      } catch (error) {
        console.log(error)
    }
  }
}

export const setName = (name) => {
  return {
      type: SET_NAME,
      payload: name
  }
}

export const setOrderByName = (order) => { 
  return {
      type: SET_ORDER_BY_NAME,
      payload: order
  }
}

export const setFilterByCont = (activity) => {
  return {
      type: SET_FILTER_BY_CONT,
      payload: activity
  }
}


export const setPage = (page) => {
  return {
      type: SET_PAGE,
      payload: page
  }
}

export const setOrderByPop = (order) => {
  return {
      type: SET_ORDER_BY_POP,
      payload: order
  }
}

export const orderCountries = (name) => {
  return {
      type: ORDER_COUNTRIES,
      payload: name,
  }
}

export const filterCountries = (continent) => {
  return {
      type: FILTER_COUNTRIES,
      payload: continent,
  }
}

export const removeCountry = () => {
  return {
      type: REMOVE_COUNTRY,
      payload: {}
  }
}