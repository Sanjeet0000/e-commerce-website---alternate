import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const CartBtn = () => {
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <Link to="/cart" style={{textDecoration:"none"}} className="btn btn-light btn-sm font-weight-bold cart-btn">
                <img src="assets/images/Web/bag_icon.svg" alt="account" className='px-2'/>
                {state.length} item
            </Link>
        </>
    )
}

export default CartBtn