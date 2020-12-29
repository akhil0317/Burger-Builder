import React,{Component} from "react";
import classes from "./BuildControl.module.css";

class BuildControl extends Component{
   
    shouldComponentUpdate(){
        console.log("component did update inside buidcontrol.js file")
    }
    render(){
        return(
            <div className = {classes.BuildControl}>
            <div className= {classes.Label}>{this.props.lable}</div>
            <button className = {classes.Less} onClick = {this.props.removedIngridient} disabled = {this.props.disabled}>less</button>
            <button className = {classes.More} onClick = {this.props.addedIngridient}>more</button>

        </div>
        )
    }
}

export default BuildControl;