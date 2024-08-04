import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'



const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2>Order your favourite food here</h2>
                <p>Welcome to BiteHub: your culinary gateway! explore and savor delicious meals delivered straight to your doorstep, where every bite is a delightful experience</p>
                <button >View Menu</button>

            </div>
        </div>
    )
}

export default Header
