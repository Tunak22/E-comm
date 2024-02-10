import React, { useState } from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss"
const Slider = () => {
    const [currentSlide, setcurrentSlide] = useState(0)
    const data = [
        "https://images.unsplash.com/photo-1651093355293-ceb49ec88a27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhc2hpb24lMjBtb2RlbCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1655848623955-11b54032fcb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhc2hpb24lMjBtb2RlbCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb24lMjBtb2RlbCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    ];

    const prevSlide = () =>{
        setcurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev - 1 );

    }
    const nextSlide = () =>{
        setcurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev + 1);
    }
  return (
    <div className='slider'>
        <div className="container" style={{ transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon/>
            
            </div>
            <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider