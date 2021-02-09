import React , {Component} from "react";
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import axios from "../../axios-orders"
import Spinner from "../../components/UI/Spinner/Spinner"
import {connect} from "react-redux"
import * as burgerBuilderActionTypes from "../../store/actions/index"



class BurgerBuilder extends Component{

    state = {

      
       
        purchasing : false,
        loading:false
    }

    componentDidUpdate(){
        console.log("component did update inside burgerbuilder.js file")
    }

    componentDidMount(){
        // axios.get("https://react-burger-builder-app-e2429-default-rtdb.firebaseio.com/ingridients.json")
        // .then((response)=>{
        //     this.setState({
        //         ingridients: {...response.data}
        //     })
        // })
        this.props.onInitIngridients()
    }

    updatePurchasable = (newIngridient)=>{
        if(newIngridient!==null){
      var result =   Object.values(newIngridient).reduce((total,ele)=>{
                return total+ele;
        },0)

        return     result>0
        }
        else return false;
    }   

    // addIngridient = (type)=>{

    //     const newIngridients = {...this.state.ingridients};
    //     const addedIngridient = this.state.ingridients[type]+1;
    //     newIngridients[type] = addedIngridient;

    //     const increasedPrice = INGRIDIENT_PRICES[type] +this.state.price;
    //     this.setState({
    //    ingridients: newIngridients,
    //     price: increasedPrice
    //     })
    //    this.updatePurchasable(newIngridients)
    // }

       
    // removeIngridient = (type)=>{
    //     let newPrice = this.state.price
    //    let newIngridients = {...this.state.ingridients};
    //    if(newIngridients[type]>0){
    //     let newremovedIngridient = newIngridients[type]-1;
    //     newIngridients[type] = newremovedIngridient;
    //     newPrice = this.state.price-INGRIDIENT_PRICES[type];
    // }
        
    //     this.setState({
    //        ingridients: newIngridients,
    //         price: newPrice
    //     }) 
    //     this.updatePurchasable(newIngridients)
    // }

    purchasingHandler = ()=>{
        
        this.setState({
            purchasing: !this.state.purchasing
        })
    }

        purchaseContinue = () =>{
          
                // const queryString = [];
                // for(let i in this.props.ings)
                //     queryString.push(i+ "="+this.props.ings[i])
                // queryString.push("price="+this.state.price)
                // const queryParams = queryString.join("&");
                this.props.onPurchaseSuccessRedirect()
            this.props.history.push("/checkout")
           
        }
   

   render(){

  const  disbaledInfo = {
        ...this.props.ings
    }

    for(let key in disbaledInfo){
            disbaledInfo[key] = disbaledInfo[key]<=0;
    }
       return(
       <React.Fragment>
             {this.state.purchasing  ?<Modal purchasing = {this.state.purchasing}> 
            {this.state.loading?<Spinner/>:<OrderSummary ingridients = {this.props.ings} purchasing={this.purchasingHandler} continued = {this.purchaseContinue} price = {this.props.price} /*ingridientsPrice = {INGRIDIENT_PRICES}*/></OrderSummary> }
           </Modal>: null}
      <Burger ingridients = {this.props.ings}></Burger>
       <BuildControls addedIngridient={this.props.onIngridientAdded} removedIngridient = {this.props.onIngridientRemoved} disabled = {disbaledInfo} price = {this.props.price} orderEnable = {this.updatePurchasable(this.props.ings)} purchasing = {()=>this.purchasingHandler(this.state.purchasing)}></BuildControls>
       </React.Fragment>
       )
   }
}

const mapStateToProps = (state) =>{
    return{
        ings: state.burgerBuilder.ingridients,
        price: state.burgerBuilder.price
    }
}

const mapDispatchToProps = (dispatch) =>{

    return{
        onIngridientAdded: (ingName) => dispatch(burgerBuilderActionTypes.addIngridients(ingName)),
        onIngridientRemoved: (ingName)=> dispatch(burgerBuilderActionTypes.removeIngridients(ingName)),
        onInitIngridients : () => dispatch(burgerBuilderActionTypes.initIngridients()),
        onPurchaseSuccessRedirect:() =>dispatch(burgerBuilderActionTypes.purchaseSuccessRedirect())
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);