import { FETCH_API_SUCCESS, FETCH_API_FAILURE } from "./actionType"

export const apiSuccess = item =>{
    console.log('DATA HERE',item);
    return {
        type: FETCH_API_SUCCESS
        , payload: item
    }
}

export const apiFailure = item => {
    return {
        type: FETCH_API_FAILURE
        , payload: item
    }
}

