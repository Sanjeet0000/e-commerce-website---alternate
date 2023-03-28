import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'
import StarRating from './StarRating';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const {id} = useParams();
    const product = DATA.find((product) => product.id === parseInt(id));
    console.log(product);
    console.log(id);

    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
        <div className="container my-5 p-5" style={{boxShadow:"0 0 5px rgba(0, 0, 0, 0.4)", borderRadius:"10px"}}>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center product">
                    <img src={product.img} alt={product.title} height="210px" style={{maxWidth:"100%"}} />
                </div>
                <div className="col-md-6 d-flex flex-column flex-wrap justify-content-center">
                    <h2 className="fw-bold text-center pt-4">{product.title}</h2>
                    <hr/>
                    <div className='pl-2'>
                        <StarRating rating={product.rating}/>
                    </div>
                    <h4 className="pl-2" style={{color: "red"}}>Sale Price:  &nbsp;${product.discountedPrice}</h4> 
                    <h6 className="pl-2" style={{ textDecoration: "line-through", color: "grey", opacity:"0.8" }}>Original Price: &nbsp; ${product.price}</h6>
                   
                    <p className="lead pt-3">{product.desc}</p>
                    <button onClick={()=>handleCart(product)} className="btn btn-light my-5" style={{boxShadow:"0 0 5px rgba(0, 0, 0, 0.4)"}}>{cartBtn}</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail
