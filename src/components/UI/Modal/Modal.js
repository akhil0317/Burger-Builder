import React, {Component}from "react";
import classes from "./Modal.module.css"
class Modal extends Component{

componentDidUpdate(){
    alert("component did update inside modal.js file")
}
    
    render(){
        
        return (
            <div className = {classes.Modal}>
                {this.props.children}
            </div>
        )    
    }
       
}

export default Modal;