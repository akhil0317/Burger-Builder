import * as actionTypes from "./actionTypes"
import axios from "../../axios-orders"

export const addIngridients = (name) =>{
    return {
        type: actionTypes.ADD_INGRIDIENT,
        ingridientName: name
    }
}



export const removeIngridients = (name) =>{
    return {
        type: actionTypes.REMOVE_INGRIDIENT,
        ingridientName: name
    }
}


export const setIngridients = (ingridients) =>{
    return {
        type: actionTypes.INIT_INGRIDIENT,
        ingridients : ingridients   
    }
}

export const initIngridients = () =>{
    return dispatch => {
          axios.get("https://react-burger-builder-app-e2429-default-rtdb.firebaseio.com/ingridients.json")
        .then((response)=>{
           dispatch(setIngridients(response.data))
        })
    }
} 



