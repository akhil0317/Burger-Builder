import React ,{Component} from "react"
import Order from "../../components/Order/Order"
import axios from "../../axios-orders"
class Orders extends Component{

    state = {
        loading: false,
        data: []
    }

    componentDidMount() {
            axios.get("/orders.json")
            .then(res=>{
                let fetchedData = [];
                for(let key in res.data)
                fetchedData.push({...res.data[key],key})
                    console.log(res)
                    this.setState({
                        loading: false,
                        data: fetchedData
                    })
            })
            .catch(err=>console.log(err))
    }

    render()
    {

        return (
            <div>
           {this.state.data.map(order=>(
               <Order price = {order.price} ingridients = {order.ingridients} key = {order.key} />)
           )}

            </div>
        )
    }
}

export default Orders