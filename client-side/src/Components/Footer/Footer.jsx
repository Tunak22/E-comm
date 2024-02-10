import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
        <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Kids</span>
            <span>Accessorries</span>
            <span>Shoes</span>
            <span>New Arrivals</span>

        </div>
        <div className="item">
            <h1>Links</h1>
            <span>Stores</span>
            <span>Cookies</span>
            <span>Compare</span>
            <span>Page</span>
            
        </div>
        <div className="item">
            <h1>About</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, veritatis. Sapiente, aperiam enim. Blanditiis perferendis iusto voluptatem qui eaque tempore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ab.</span>
            
            
        </div>
        <div className="item">
            <h1>Contact</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem quisquam corporis quae praesentium deleniti laudantium saepe illum quas ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut. </span>
            
            
        </div>
        
        </div>
        <div className="bottom">
        <div className="left">
            
                <span className='logo'>22Store.</span>
                <span className='copyright'>&copy; original tunak2023 || All Rights Reserved</span>
            
        </div>
        <div className="right">
            <img src="/images/payment.jpeg" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Footer