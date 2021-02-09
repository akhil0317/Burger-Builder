import React ,{Component} from "react"
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"
import ContactData from "./ContactData/ContactData"
import {Route,Redirect} from "react-router-dom"
import {connect} from "react-redux"

class Checkout extends Component {
    // state = {
    //     ingridients:{
    //         cheese:0,
    //         salad:0,
    //         meat:0,
    //         bacon:0
    //     },
    //     totalPrice : 0
    // }
    // componentDidMount(){
        
       
    //     const query = new URLSearchParams(this.props.location.search)
    //     const newIngridients = {}
    //     let newPrice
    //     for(let param of query.entries()){
    //         if(param[0]==="price"){
    //             newPrice = +param[1]
    //         }
    //         else
    //         newIngridients[param[0]] = +param[1]
    //     }
    //         console.log(newPrice);
    //     this.setState({
    //         ingridients: newIngridients,
    //         totalPrice:newPrice
    //     })
    // }
    checkoutCancelledHandler = () =>{

        this.props.history.goBack()

    }

    checkoutContinuedHandler = ()=>{

    this.props.history.replace("/checkout/contact-data")
    }

    render(){
        let summary = <Redirect to = "/"/>
        if(this.props.ings){
            summary = (
            <div>
                  <CheckoutSummary 
       ingridients = {this.props.ings}
        continued ={this.checkoutContinuedHandler} 
        cancelled  = {this.checkoutCancelledHandler}
       />
       <Route path ={this.props.match.url+"/contact-data"} component={ContactData}/>
            </div>)
        }
       return summary
    }
}

const mapStateToProps = state=>{
    return{
        ings: state.burgerBuilder.ingridients
    }
}


export default connect(mapStateToProps)(Checkout)