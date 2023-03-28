import React from 'react'
import Product from './HomeProducts'
import './../stylesheet/home.css';
import Carousel from './CarouselLarge';
import Support from './Support';
import CarouselSmall from './CarouselSmall';
import ContactUs from './ContactUs';
import { Link } from 'react-router-dom';

const Home = () => {


return (
    <>
        <Carousel/>
        <Product TotalItems={8}/>
        <div className="row justify-content-center position-relative mx-0" style={{backgroundColor:"#2E90E5", height:"60vh"}}>
            <div className="IphoneText col-5 text-light align-self-center justify-content-center">
                <p className='TextTitle'>iPhone 6</p>
                <p className='TextBody'>Performance and design. Taken<br/> right to the edge.</p>
                <Link to='/products/4' className='ShopNow' style={{ textDecoration: 'none', color: 'white' }} >SHOP NOW</Link>
            </div>    
            <div className='col-3 d-flex IphoneImg-container'>
                <img src="/assets/images/home/iphone.png" className="IphoneImg" alt="IPhone"/>
            </div>
        </div>
        <Support/>
        <CarouselSmall/>
        <ContactUs/>
    </>
    )
}

export default Home
