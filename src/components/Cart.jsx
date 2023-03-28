import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delItem} from '../redux/actions/index'
import { NavLink } from 'react-router-dom'


const Cart = () => {
    const state = useSelector((state)=> state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button type="button" onClick={()=>handleClose(cartItem)} className="btn float-right" aria-label="Close">&times;</button>
                    <div className="row justify-content-center">
                        <div className="col-md-4 text-center">
                            <img src={cartItem.img} alt={cartItem.title} />
                        </div>
                        <div className="col-md-4 pt-5">
                            <h3 className='text-center'>{cartItem.title}</h3>
                            <p className="lead fw-bold text-center">${cartItem.discountedPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                 <div className="row justify-content-end">
                     <p className="lead pr-3">Total:&emsp; ${calculateTotal()}</p>
                 </div>
                <div className=' row justify-content-end'>
                    <NavLink to="/checkout" className="btn btn-light border-dark mb-5 w-50 mr-2" style={{boxShadow:"0 0 5px rgba(0, 0, 0, 0.4)"}}>Proceed To checkout</NavLink>
                </div>
               
            </div>
        );
    }

    const calculateTotal = () => {
        let total = 0;
        state.forEach((item) => {
          total = (parseFloat(total) + parseFloat(item.discountedPrice)).toFixed(2);
        });
        return total;
      };

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart
