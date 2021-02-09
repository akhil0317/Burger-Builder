import React from "react";
import classes from "./Order.module.css"

const Order = (props) => {
   return (
        <div className={classes.Order}>
        <p>Ingridients: salad ({props.ingridients.salad})(meat ({props.ingridients.meat}) bacon ({props.ingridients.bacon}) cheese ({props.ingridients.cheese})</p>
        <p>price: USD {props.price}</p>
        </div>

    )
}

export default Order;