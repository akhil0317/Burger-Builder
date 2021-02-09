import * as actionTypes from "../actions/actionTypes";

const initialState = {
    ingridients: null,
    price: 4,
} 

const INGRIDIENT_PRICES = {
    salad: 0.5,
    meat: 1.3,
    bacon: 0.7,
    cheese: 1.0
}

const reducer = (state=initialState,action) =>{
        switch(action.type){
            case actionTypes.ADD_INGRIDIENT:
                return{
                    ...state,
                    ingridients: {
                        ...state.ingridients,
                        [action.ingridientName]: state.ingridients[action.ingridientName]+1,
                       
                    } , price: state.price+ INGRIDIENT_PRICES[action.ingridientName]
                }
            case  actionTypes.REMOVE_INGRIDIENT : 
                return{
                    ...state,
                    ingridients: {
                        ...state.ingridients,
                        [action.ingridientName]: state.ingridients[action.ingridientName]-1,
                      
                    } ,
                      price: state.price- INGRIDIENT_PRICES[action.ingridientName]
                }
            case actionTypes.INIT_INGRIDIENT : 
                    return {
                        ...state,
                        ingridients:{
                        salad: action.ingridients.salad,
                        bacon: action.ingridients.bacon,
                        cheese: action.ingridients.cheese,
                        meat: action.ingridients.meat
                        },
                        price: 4
                    }
            default:
                return state;
        }
}

export default reducer