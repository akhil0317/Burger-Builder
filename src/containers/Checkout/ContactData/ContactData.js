import React ,{Component} from "react"
import Button from "../../../components/UI/Button/Button"
import classes from "./ContactData.module.css"
import axios from "../../../axios-orders"
import Spinner from "../../../components/UI/Spinner/Spinner"
import Input from  "../../../components/UI/Input/Input"
import {connect} from "react-redux"
import * as actions from "../../../store/actions/index"
import {Redirect} from "react-router-dom"

class ContactData extends Component {

    state={
        
            name :"",
            email: "",
            phonenumber:"",
            hno: "",
            street :"",
            pincode:"",
            city:"",
            country:"",
            deliveryMethod:["fast","slow"],
            selectedDeliveryMethod:"fast",
            // loading:false,
            error: false
    }

     orderHandler = (e) =>{
         
         e.preventDefault();
        //   this.setState({loading:true})
          const formData = {
              ...this.state
          }
        //   delete formData["loading"]
          delete formData["deliveryMethod"]
          delete formData["error"]


            const orderDetails = {
                ingridients:this.props.ings,
                price: this.props.price,
                orderData: formData
                
            }

           this.props.onOrderBurger(orderDetails)
    //         axios.post("/orders.json",orderDetails)
    //         .then(response=>{
        

    //             this.setState({loading:false,error:false})
    //             console.log(response)
    //             this.props.history.push("/Orders")
    //              })
    //         .catch(err=>{
     

    //             this.setState({loading:false,error:true})
    //             console.log(err)});
     }

    onInputChangeHandler = (e,inputElement)=>{
        this.setState({
            [inputElement]: e.target.value
        })
    }

    render(){
        let form
        const redirect = (this.props.redirect?<Redirect to ="/"/>:null)
        if(this.state.error){
             form = (<div>Something went wrong</div>)
        }
        else{
            form = ( <div className={classes.ContactData}>
                {redirect}
                <h4>Enter your contact details below!!</h4>
                <form>
                <Input inputtype = "input" type = "text" name = "name" placeholder = "your Name" lable = "Name" value = {this.state.name}  changed ={(e)=>this.onInputChangeHandler(e,"name")} />
                <Input inputtype = "input" type = "text" name = "email" placeholder = "your Email" lable = "Email" value = {this.state.email} changed ={(e)=>this.onInputChangeHandler(e,"email")} />
                <Input inputtype = "input" type = "text" name = "phoneNumber" placeholder = "Contact Number" lable = "Phone Number" value = {this.state.phonenumber}changed ={(e)=>this.onInputChangeHandler(e,"phonenumber")} />
                <Input inputtype = "input" type = "text" name = "House Number" placeholder = "Enter House Number" lable = "House Number" value = {this.state.hno} changed = {(e)=>this.onInputChangeHandler(e,"hno")}/>
                <Input inputtype = "input" type = "text" name = "street" placeholder = "your Street Name" lable = "Street" value = {this.state.street}changed = {(e)=>this.onInputChangeHandler(e,"street")}/>
                <Input inputtype = "input"  type = "text" name = "postalcode" placeholder = "your postal code" lable = "Postalcode" value = {this.state.pincode}changed ={(e)=>this.onInputChangeHandler(e,"pincode")} />
                <Input inputtype = "input"  type = "text" name = "city" placeholder = "your city" lable = "City" value = {this.state.city}changed ={(e)=>this.onInputChangeHandler(e,"city")} />
    
                <Input inputtype = "input" type = "text" name = "country" placeholder = "Country" lable = "Country" value = {this.state.country}changed ={(e)=>this.onInputChangeHandler(e,"country")} />
                <Input inputtype = "select" type = "select" name = "options"  lable = "Delivery Method" value = {this.state.selectedDeliveryMethod}changed ={(e)=>this.onInputChangeHandler(e,"selectedDeliveryMethod")}  options = {this.state.deliveryMethod}/>
    
                <Button btnType = "Success" clicked = {(e)=>this.orderHandler(e)}>ORDER</Button>
    
    
    
                </form>
                </div>)
        }
       
        if(this.props.loading){
            form = (<Spinner/>)
        }
        return(
          
              <div> 
                {form}
              </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
        ings: state.burgerBuilder.ingridients,
        price: state.burgerBuilder.price,
        loading: state.orders.loading,
        redirect: state.orders.redirect
    }
}

const mapDispatchToProps = dispatch=>{
    return {
    onOrderBurger : (orderData)=> dispatch(actions.purchaseBurger(orderData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactData)