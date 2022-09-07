import React, {useState,useEffect} from 'react'
import axios from 'axios'
const Product = () => {
    const[products,setproducts] = useState([]);
    useEffect(()=>{
        const getData2= async()=>{
            const res=await axios.get("https://assessment.api.vweb.app/products")
            console.log(res)
            setproducts(res.data);
        }
        getData2();

    },[])
  return (
    <div>
        <table id="users">
                <tr>
                    <th>Product-id</th>
                    <th>Products</th>
                    <th>Stocks</th>
                    <th>Selling-price</th>
                    
                </tr>
      {products.map((item,id)=>{
            return(
                
                <>
                <tr>
                    <td>{item.product_id}</td>
                    <td>{item.name}</td>
                    <td>{item.stock}</td>
                    <td>{item.selling_price}</td>
                </tr>
                
                </>
            )
        })}
        </table>
        
    </div>
  )
}

export default Product
