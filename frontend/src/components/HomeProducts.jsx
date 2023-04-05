import React from 'react'
import { Link } from 'react-router-dom';
import DATA from '../Data'
import './../stylesheet/Product.css';
import Item from './Item';
const Product = (props) => {
    const { TotalItems } = props;
    return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center pt-5">
                    <h2>BEST SELLERS</h2>
                    <hr/>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-around">
                {DATA.slice(0,TotalItems).map((element, item) => (
                <Item {...element} key={element.id} />
                ))}
            </div>
        </div>
        <Link to='/store' className='d-flex justify-content-around mb-5 pb-5'>LOAD MORE</Link>
    </div>
    )
}

export default Product
