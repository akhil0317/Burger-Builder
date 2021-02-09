import * as actionTypes from "../actions/actionTypes"

const initialState = {
    orders:[],
    loading:false,
    error:false,
    redirect: false
}

const reducer = (state=initialState,action)=>{

    switch(action.type){

        case actionTypes.PURCHASE_BURGER_SUCCESS :
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loading:false,
                orders :state.orders.concat(newOrder),
                redirect : true
            }
        case actionTypes.PURCHASE_BURGER_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.error
            }
        case actionTypes.PURCHASE_BURGER_START:{
            return{
                ...state,
                loading: true
            }
        }

        case actionTypes.PURCHASE_SUCCESS_REDIRECT: 
        return {
            ...state,
            redirect: false
        }

        default: 
        return state
    }
}

export default reducer;