import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"
const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            <button>
                <Link className='link' to="/Products/1">white hood</Link>
            </button>
            </div>
            <div className="row">
                <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhlc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <button>
                <Link className='link' to="/Products/1">sweat shirt</Link>
            </button>
            </div>
        </div>
        <div className="col">
            <div className="row"><img src="https://media.istockphoto.com/id/1394069884/photo/young-afro-couple-walking-hand-in-hand-on-the-beach.jpg?s=612x612&w=0&k=20&c=kyJEFSvUM9aAKlCADBh7bftymXl1MhByzGtX5dnisiA=" alt="" />
            <button>
                <Link className='link' to="/Products/1">beach wears</Link>
            </button>
            </div>
        </div>
        <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoZXN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                <button>
                <Link className='link' to="/Products/1">brown jacket</Link>
            </button>
                </div>
            </div>
            <div className="col">
                <div className="row"><img src="https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhlc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <button>
                <Link className='link' to="/Products/1">our collections</Link>
            </button>
                </div>
            </div>
        </div>
        <div className="row"><img src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
        <button>
                <Link className='link' to="/Products/1">round neck shirt</Link>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Categories