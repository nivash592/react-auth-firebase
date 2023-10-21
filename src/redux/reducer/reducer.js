import { FETCH_API_FAILURE, FETCH_API_SUCCESS } from "../actions/actionType"

const initialState = {
    items:[]
    , isLoading: false
    , error: null
}


export const reducer  = (state = initialState,action) => {
    const newState = {...state}

    switch(action.type){
        case "FETCH_API_SUCCESS": 
        return {
            ...state
            , items: action.payload
            , isLoading: false
            , error: null
        }

        case "FETCH_API_FAILURE": return {
            ...state
            , items: []
            , isLoading: false
            ,error: action.payload
        }

        default: return newState;
    }
}