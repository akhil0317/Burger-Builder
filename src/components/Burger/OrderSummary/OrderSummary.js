import React, {Component} from "react";
import Button from "../../UI/Button/Button"
class OrderSummary extends Component {

        shouldComponentUpdate(){
            console.log("should componet update have been called inside ordersummary ")
            return true;
        }
        componentDidUpdate(){
            console.log("component did update inside modal.js file")
        }
    render(){
        const ingridients = Object.keys(this.props.ingridients).map((igKey)=>{
            return <li key = {igKey}><span style = {{textTransform:"capitalize"}}>{igKey}</span>:{this.props.ingridients[igKey]}</li>
        })
        return (
            <React.Fragment>
            <h3>Your Order</h3>
            <p>delicious burger with the following ingridients:</p>
            <ul>
                {ingridients}
            </ul>
            <strong>Totalprice is : {this.props.price.toFixed(2)}$</strong><br></br>
            <Button  clicked= {this.props.purchasing} btnType ={"Danger"}>CANCEL ORDER</Button>
            <Button  clicked= {this.props.continued} btnType ={"Success"}>CONTINUE</Button>

        </React.Fragment>
        )
    }
}

export default OrderSummary;