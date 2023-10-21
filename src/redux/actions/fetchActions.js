import axios from "axios"
import { apiSuccess, apiFailure } from "./action"

export const fetchAPI = () => {
    return dispatch => {
        axios.get('https://fakestoreapi.com/products').then(resp => {
            dispatch(apiSuccess(resp.data))
        }).catch(err => {
            dispatch(apiFailure(err))
        })
    }
}