import React from 'react'
import "./Cards.scss"
import {Link} from "react-router-dom"

const Cards = ({item}) => {
  return (
    
    <Link className='link' to = {`/product/${item.id}`}>
    <div className='cards'>
        <div className="image">
            {item.isNew && <span> New Season</span>}
            <img src={item.img} alt="" className="mainImage" />
            <img src={item.img2} alt="" className="secondImage" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
            <h3>${item.oldPrice}</h3>
            <h3>${item.Price}</h3>
        </div>
    </div>
    </Link>
    
  );
}

export default Cards