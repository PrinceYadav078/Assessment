import React from 'react'
import {  Link } from 'react-router-dom';
import UserProducts from './UserProducts';
import '../static/css/style_user.css';
const Navbar = () => {
  return (
    <>
        <header>
            
            <div className='container'>
                <div className='inner-content'>
                    <div className='brand'>
                        <Link to="/">Home</Link>
                    </div>

                    <ul className='nav-links'>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>

                        <li>
                            <Link to="/products">Products</Link>
                        </li>

                        <li>
                            <Link to="/orders">
                                Orders
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        </>
  )
}

export default Navbar
