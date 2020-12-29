import React from "react"
import burgerLogo from "../../assests/burger-logo.png"
import classes from "./Logo.module.css"

const logo = (props)=>{
    return (
        <div className={classes.Logo}>
            <img src = {burgerLogo} alt = "burger-logo"/>
        </div>

    )}

export default logo;