import { useEffect, useState } from 'react';
import '../static/css/style_user.css';
import axios from 'axios';

const BaseURL = 'https://assessment.api.vweb.app'
const UserProducts = ()=> {

    const [userinfo,setUserInfo]= useState([]);
    const [userbuydetails,setUserBuyDetails]= useState([]);
    
    const getUsers = async()=> {
        return await axios.get(`${BaseURL}/users`);
    }

    const getProducts = async()=>{
        return await axios.get(`${BaseURL}/products`);
    }

    const getOrders = async ()=> {
        return await axios.get(`${BaseURL}/orders`);
    }

    const getUserInfo = async ()=>{

        try{
            const responses = await Promise.all([getUsers(), getProducts(), getOrders()]);
            
            const users = responses[0].data;
            const products = responses[1].data;
            const orders = responses[2].data;

            users.map((user) => {
            userinfo.push({
                ...user, 
               
                ...orders.find((order) => order.user_id === user.user_id)})
            });  
            const ans = [];
            userinfo.map((user)=>{
                ans.push({
                
                ...products.find((prod) => prod.product_id === user.product_id),
                ...user})
                
            })
            console.log('userinfo',userinfo);
            
            setUserBuyDetails(ans)

            // console.log('userbuydetails',ans);
            
        }catch(error) {
            setUserInfo(null);
        }
    }
    
    useEffect(()=>{
        getUserInfo();
    },[])
    return(
        <>
            <h1 className='heading'>User Buying Details</h1>
            <div className='header'>
                {userbuydetails.map((item)=>{
                    return(
                        <div className="flip-card">
                        <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-NfjcF_sUqB0Yqy-NJ_YXhu62SQffp85Kg&usqp=CAU"
                            alt="Avatar"
                            style={{ width: "300px", height: "220px" }}
                            />
                            <h2>Name: {item.name} </h2>
                        </div>
                        <div className="flip-card-back">
                            <h3>Name: {item.name} &nbsp;</h3>
                            <h3>User-id : {item.user_id} </h3>
                            <h3>Product-id : {item.product_id}</h3>
                            <h3>Quantity : {item.quantity} &nbsp;</h3>
                            <h3>Selling-price : {item.selling_price} &nbsp;</h3>
                            <h3>Stock : {item.stock}</h3>
                            <h3>Order-date: {item.order_date} &nbsp;</h3>
                        </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default UserProducts;