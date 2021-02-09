import React, {Component}from "react";
import classes from "./Modal.module.css"
class Modal extends Component{

componentDidUpdate(){
   
    
}
 
shouldComponentUpdate(){
  
    return true;
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