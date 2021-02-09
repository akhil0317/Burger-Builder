import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl"
const controls = [
    {lable:"Salad",type:"salad"},
    {lable:"Meat",type:"meat"},
    {lable:"Bacon",type:"bacon"},
    {lable:"Cheese",type:"cheese"},
    ]
const buildControls = (props)=>{
    return (
        <div className = {classes.BuildControls}>
            <p>Your price is : <strong>{props.price.toFixed(2)*20}</strong></p>
                {controls.map((ctrl)=>{
                    return <BuildControl 
                    key = {ctrl.lable} 
                    lable = {ctrl.lable} 
                    addedIngridient = {()=>props.addedIngridient(ctrl.type)}
                    removedIngridient = {()=>props.removedIngridient(ctrl.type)}
                    disabled = {props.disabled[ctrl.type]}
                    ></BuildControl>
                })}
                <button className={classes.OrderButton} disabled={!props.orderEnable} onClick={props.purchasing}>ORDER NOW</button>
        </div>
    )
}


export default buildControls;