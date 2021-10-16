import { GET_ALL_COUNTRIES, GET_ACTIVITY, POST_ACTIVITY } from "./actions"


const initialState = {
    countries = [],
    countriesByID = {},
    activities = []
}

function reducer(state = initialState, { type, payload }) {
    switch (type) {
      
      default: {
        return state
      }
    }
  }
  
  export default reducer  