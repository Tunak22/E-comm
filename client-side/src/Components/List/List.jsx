import React from 'react'
import "./List.scss"
import  Cards from "../Cards/Cards"
const List = () => {
    const data = [
        {
            id: 1,
            img: "https://media.istockphoto.com/id/918568976/photo/cool-relaxed-modern-millennial-guy-with-notebook-standing-and-looking-away.jpg?s=612x612&w=0&k=20&c=i54jtrrmZW0kerwwQsA-xkkdN0nvqlLBtyL1DcZOlmY=",
            img2:"https://media.istockphoto.com/id/667507032/photo/smiling-young-woman-in-gray-polo-shirt-on-a-white-background.jpg?s=612x612&w=0&k=20&c=pjxHI1JRP5Q3B24mIz8EE5ONSgiITbX7j5LF-VI4m5o=",
            title:"Neat shirts",
            isNew:true,
            oldPrice: 19,
            Price: 12,
        },
        {
            id: 2,
            img: "https://plus.unsplash.com/premium_photo-1661576995732-bd66c05409e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhc2hpb24lMjBtb2RlbCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            title:"white round neck",
            isNew:true,
            oldPrice: 19,
            Price: 12,
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1642714424318-1f739ad3798f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhc2hpb24lMjBtb2RlbCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            title:"Dotted black Shirt",
            oldPrice: 19,
            Price: 12,
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1653055645127-df05115dcccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZhc2hpb24lMjBtb2RlbCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            title:"rollup sleeves",
            oldPrice: 19,
            Price: 12,
        },
    ]
  return (
    <div className='list'>{data.map(item => (
        <Cards item = {item} key={item.id}/>
    ))}
        </div>
  )
}

export default List