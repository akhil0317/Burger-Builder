import React from "react";
import classes from "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar"
const layout = (props)=>{

   return(
  
    <React.Fragment>
    <Toolbar></Toolbar>
    <main className={classes.Content}>{props.children}</main></React.Fragment>
)};

export default layout;