import * as actionTypes from "./actionTypes"
import axios from "../../axios-orders"



const purchaseBurgerSuccess = (id,orderData)=>{
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData :orderData
    }
}

const purchaseBurgerFailure= (error)=>{
    return {
        type: actionTypes.PURCHASE_BURGER_FAILURE, 
        error: error
    }
}

const startPurchaseBurger = () =>{
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData)=>{
    return dispatch=>{
        dispatch(startPurchaseBurger())
        axios.post("/orders.json",orderData)
        .then(response=>{
            dispatch(purchaseBurgerSuccess(response.data.name,orderData))
             })
        .catch(err=>{
            purchaseBurgerFailure(err)
    })
}
}

export const purchaseSuccessRedirect = () =>{
    return {
       type: actionTypes.PURCHASE_SUCCESS_REDIRECT
    }
}
