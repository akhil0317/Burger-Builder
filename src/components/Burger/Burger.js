import React from "react";
import classes from "./Burger.module.css";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient"

const burger = (props) =>{
    let transformedIngridents  = Object.keys(props.ingridients).map((igKey)=>{
       
            return [...Array(props.ingridients[igKey])].map((_,index)=>{
                return  <BurgerIngridient key = {igKey+index} type = {igKey}/>
            })
    }).reduce((arr,ele)=>{
        return arr.concat(ele);
    },[])
    
    return (
        <div className = {classes.Burger}>
            <BurgerIngridient type = "bread-top"/>
            {transformedIngridents.length>0 ? transformedIngridents:<h3>Please add some ingridients</h3>} 
            <BurgerIngridient type = "bread-bottom"/>

        </div>
    )
}


export default burger;