
import axios from 'axios'
import React ,{useEffect,useState} from 'react'

const Orders = () => {
    const[orders,setOrders] = useState([]);
    useEffect(()=>{
        const getData= async ()=>{
            const res= await axios.get("https://assessment.api.vweb.app/orders")
            console.log(res.data);
            setOrders(res.data)
        }
        getData()
    },[])
  return (
    <div>
        <table id="users">
                <tr>
                    <th>Order-id</th>
                    <th>Product-id</th>
                    <th>Quantity</th>
                    <th>User-id</th>
                    <th>Order-date</th>
                    
                </tr>
      {orders.map((item,id)=>{
            return(
                
                <>
                <tr>
                    <td>{item.order_id}</td>
                    <td>{item.product_id}</td>
                    <td>{item.quantity}</td>
                    <td>{item.user_id}</td>
                    <td>{item.order_date}</td>
                </tr>
                
                </>
            )
        })}
        </table>
    </div>
  )
}

export default Orders
