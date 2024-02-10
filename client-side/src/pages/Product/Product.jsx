import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
const Product = () => {
  const [selectedImg,setSelectedImg] = useState(0)
  const [quantity,setQuantity] = useState(1)
  
  const images = [
    "https://plus.unsplash.com/premium_photo-1677624876650-68871f2a6ad8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://media.istockphoto.com/id/1449133784/photo/happy-gen-z-young-woman-with-smartphone-social-media-fashion-influencer-in-trendy-cafe-and.jpg?s=612x612&w=0&k=20&c=rf7muD-s8X1hxH8HU5N2v5vBydsAM0pcKWc0zP99c1g="
  ];

  return (
    <div className='product'>
      <div className="left">
      <div className="images">
      <img src={images[0]} alt="" onClick={(e)=>setSelectedImg(0)} />
      <img src={images[1]} alt="" onClick={(e)=>setSelectedImg(1)} />
      </div>
      <div className="mainImg">
        <img src={images[selectedImg]} alt=""/>
      </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$123</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minima iste ea reprehenderit ab saepe quibusdam quod exercitationem, inventore quos vero quia nostrum hic deleniti tenetur laboriosam doloremque illum laborum?</p>
      <div className="quantity">
        <button onClick={() => setQuantity (prev=>prev ===1 ? 1:prev-1)}>-</button>
        {quantity}
        <button onClick={() => setQuantity (prev=>prev+1)}>+</button>
      </div>
      <button className='add'>
        <AddShoppingCartIcon/> ADD TO CART
      </button>
    <div className="link">
      <div className="item">
      <FavoriteBorderIcon/> ADD TO WISH LIST
      </div>
      <div className="item">
        <BalanceIcon/> ADD TO COMPARE
      </div>
    </div>

    <div className="info">
      <span>Vendor: Polo</span>
      <span>Product type: T-Shirt</span>
      
      <span>Tag: T-Shirt, Women, Top</span>
    </div>
    <hr />
    <div className="info">
      <span>DESCRIPTION</span>
      <hr />
      <span>ADDITIONAL INFORMATION</span>
      <hr />
      <span>FAQ</span>
    </div>
      </div>
    </div>
  )
}

export default Product