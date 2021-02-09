import React from "react"
import classes from "./Input.module.css"
const input = (props) =>{
    let inputElement = null;
    switch(props.inputtype){
        case ("input"):
            inputElement = <input className={classes.InputElement} {...props} onChange={props.changed}/>
            break;
        case ("select"): 
        inputElement = <select className = {classes.InputElement} value = {props.value}onChange={props.changed}>
            {props.options.map(option=> <option key = {option} value = {option}>{option}</option>)}
        </select>
        break;
        default:
            inputElement = <input {...props}/>

    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.lable}</label>
            {inputElement}
            </div>

    )
}


export default input;