import React,{useEffect, useState} from 'react'
import axios from "axios"
import '../static/css/style_user.css';

const User = () => {
    const [userInfo, setUserInfo]= useState([])
    useEffect(()=>{
        const getData1= async()=>{
            const res1=await axios.get("https://assessment.api.vweb.app/users")
            setUserInfo(res1.data)
            console.log(res1.data);
        }
        getData1();
    },[])
  return (
    <div>
        <table id="users">
                <tr>
                    <th>User-id</th>
                    <th>Name</th>
                    
                </tr>
        {userInfo.map((item,id)=>{
            return(
                <>
                <tr>
                    <td>{item.user_id}</td>
                    <td>{item.name}</td>
                </tr>
                
                </>
            )
        })}
        </table>
     
    </div>
  )
}

export default User
