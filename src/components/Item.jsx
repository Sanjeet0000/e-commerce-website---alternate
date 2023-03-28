import React from "react";
import { NavLink } from "react-router-dom";
import StarRating from "./StarRating";

const Item = (item) => {
    return (
        <div className="card-container m-4" key={item.id} >
            <div className='card-body text-center card-inner mb-5' style={{width: "14rem", height:"380px"}}>
                <h3 className="badge hot-badge badge-danger">HOT</h3>
                <img src={item.img} className="card-img-top image-visiblity pt-2" alt={item.title}/>   
                <NavLink to={`/products/${item.id}`} className="btn btn-light buy-btn d-flex align-items-center">
                    <img src="assets/images/Web/add_cart_icon.svg" alt="cart" className="pr-2"/>
                    Add to Cart
                </NavLink>   
                <div className='card-content'>
                    <h5 className="card-title">{item.title}</h5>
                    <StarRating rating={item.rating}/>
                    <h5 className="" style={{color: "red", letterSpacing:"-1px"}}>Sale Price: ${item.discountedPrice}</h5> 
                    <h6 className="" style={{ textDecoration: "line-through", color: "grey", opacity:"0.8", letterSpacing:"-1px" }}>Original Price: ${item.price}</h6>
                </div>
            </div> 
        </div>
    );
}

export default Item;