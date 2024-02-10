import React from 'react'
import "./Cart.scss"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://media.istockphoto.com/id/918568976/photo/cool-relaxed-modern-millennial-guy-with-notebook-standing-and-looking-away.jpg?s=612x612&w=0&k=20&c=i54jtrrmZW0kerwwQsA-xkkdN0nvqlLBtyL1DcZOlmY=",
            img2:"https://media.istockphoto.com/id/667507032/photo/smiling-young-woman-in-gray-polo-shirt-on-a-white-background.jpg?s=612x612&w=0&k=20&c=pjxHI1JRP5Q3B24mIz8EE5ONSgiITbX7j5LF-VI4m5o=",
            title:"Neat shirts",
            desc:"Neat shirts",
            isNew:true,
            oldPrice: 19,
            Price: 12,
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1642714424318-1f739ad3798f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhc2hpb24lMjBtb2RlbCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            title:"Dotted black Shirt",
            desc:"Dotted black Shirt",
            oldPrice: 19,
            Price: 12,
        }
    ];
  return (
    <div className='cart'>
        <h1>Products in your Cart</h1>
    {data?.map(item =>(
        <div className='item' key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1 x ${item.price}</div> 
            </div>
            <DeleteOutlineOutlinedIcon className='delete' />
        </div>
    ))}
<div className="total">
    <span>SUBTOTAL</span>
    <span>$123</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart