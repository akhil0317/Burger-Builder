import React , {Component} from "react";
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

const INGRIDIENT_PRICES = {
    salad: 0.5,
    meat: 1.3,
    bacon: 0.7,
    cheese: 1.0
}

class BurgerBuilder extends Component{

    state = {
        ingridients: {
            salad: 0,
            meat:0,
            bacon:0,
            cheese:0
           
        },

        price: 4,
        purchasable: false,
        purchasing : false
    }

    componentDidUpdate(){
        console.log("component did update inside burgerbuilder.js file")
    }

    updatePurchasable = (newIngridient)=>{
      var result =   Object.values(newIngridient).reduce((total,ele)=>{
                return total+ele;
        },0)

        this.setState({
            purchasable: result>0
        })
    }   

    addIngridient = (type)=>{

        const newIngridients = {...this.state.ingridients};
        const addedIngridient = this.state.ingridients[type]+1;
        newIngridients[type] = addedIngridient;

        const increasedPrice = INGRIDIENT_PRICES[type] +this.state.price;
        this.setState({
       ingridients: newIngridients,
        price: increasedPrice
        })
       this.updatePurchasable(newIngridients)
    }

       
    removeIngridient = (type)=>{
        let newPrice = this.state.price
       let newIngridients = {...this.state.ingridients};
       if(newIngridients[type]>0){
        let newremovedIngridient = newIngridients[type]-1;
        newIngridients[type] = newremovedIngridient;
        newPrice = this.state.price-INGRIDIENT_PRICES[type];
    }
        
        this.setState({
           ingridients: newIngridients,
            price: newPrice
        }) 
        this.updatePurchasable(newIngridients)
    }

    purchasingHandler = ()=>{
        
        this.setState({
            purchasing: !this.state.purchasing
        })
    }

        purchaseContinue = () =>{
            alert("You Continued");
        }
   

   render(){

  const  disbaledInfo = {
        ...this.state.ingridients
    }

    for(let key in disbaledInfo){
            disbaledInfo[key] = disbaledInfo[key]<=0;
    }
       return(
       <React.Fragment>
             {this.state.purchasing  ?<Modal purchasing = {this.state.purchasing}> 
            <OrderSummary ingridients = {this.state.ingridients} purchasing={this.purchasingHandler} continued = {this.purchaseContinue} price = {this.state.price} ingridientsPrice = {INGRIDIENT_PRICES}></OrderSummary> 
           </Modal>: null}
      <Burger ingridients = {this.state.ingridients}></Burger>
       <BuildControls addedIngridient={this.addIngridient} removedIngridient = {this.removeIngridient} disabled = {disbaledInfo} price = {this.state.price} orderEnable = {this.state.purchasable} purchasing = {()=>this.purchasingHandler(this.state.purchasing)}></BuildControls>
       </React.Fragment>
       )
   }
}


export default BurgerBuilder;