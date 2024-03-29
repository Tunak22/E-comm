import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar"
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useState } from 'react';
const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='navbar'>
        <div className="wrapper">
        <div className='left'>
            <div className="item">
                <img src="/images/usa flag.jpeg" alt="" />
                <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
                <span>USD</span>
                <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
                <Link  className="link"to="/products/1">Women</Link >
            </div>
            <div className="item">
                <Link className="link" to="/products/2">Men</Link>
            </div>
            <div className="item">
                <Link className="link" to="/products/1">Children</Link>
            </div>
        </div>
        <div className='center'>
            <Link className="link" to="/">22Store.</Link >
        </div>
        <div className='right'>
        <div className='item'>
            <Link className="link" to="/">Home</Link>
        </div>
        <div className='item'>
            <Link className="link" to="/">About</Link >
        </div>
        <div className='item'>
            <Link className="link" to="/">Contact</Link>
        </div>
        <div className='item'>
            <Link className="link" to="/">stores</Link>
        </div>
        <div className="icons">
            <SearchIcon/>
            <PersonOutlineIcon/>
            <FavoriteBorderIcon/>
            <div className="cartIcon" onClick={()=> setOpen(!open)}>
                <ShoppingCartOutlinedIcon/>
                <span>0</span>
            </div>
        </div>
        </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar