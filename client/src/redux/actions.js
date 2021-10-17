import axios from 'axios'
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const POST_ACTIVITY = 'POST_ACTIVITY'
//export const GET_COUNTRY = 'GET_COUNTRY'

export function getCountries(name, order, page){
    return (dispatch)=>{
        axios.get(`http://localhost:3001/countries?name=${name||""}&order=${order||""}&page=${page||1}`)
        .then((countries) => {
            return dispatch({
              type: GET_ALL_COUNTRIES,
              payload: countries.data,
            })
          })
        .catch((err) => {
            console.log(err)
          })
    }
}

export function postActivity(payload){
    return async function (dispatch) {
        const newACtivity = await axios.post(
          'http://localhost:3001/activities',
          payload
        )
        console.log(newACtivity)
        return newACtivity
      }
}