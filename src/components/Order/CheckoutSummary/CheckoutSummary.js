import React from "react"
import Burger from "../../Burger/Burger"
import Button from "../../UI/Button/Button"
import classes from "./CheckoutSummary.module.css"
const checkoutSummary = (props) =>{
  

    return (
        <div className={classes.CheckoutSummary}>
        <h1>We hope the burger tastes good!!!</h1>
        <div style = {{width:"300px", height:"300px",margin:"auto"}}>
        <Burger ingridients = {props.ingridients}/>
        <Button btnType = "Danger" clicked = {props.cancelled}>CANCEL</Button>
        <Button btnType = "Success" clicked = {props.continued}>CONTINUE</Button>

        </div>
        </div>
    )
}


export default checkoutSummary