import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DATA from '../Data';
import "./../stylesheet/CarouselSmall.css";

const CarouselSmaller = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [numSlides, setNumSlides] = useState(3);

    const slide = DATA.slice(7, 12);

    const renderSlide = (slide, id) => {
    return (
        <Link to={`/products/${id}`} style={{textDecoration:"none"}} key={slide.id} className="carousel-slide">
            <img className="SlideImg" src={slide.img} alt={slide.title} />
            <h5 className="card-title">{slide.title}</h5>
            <span className="lead SlidePrice" style={{ textDecoration: "line-through", color: "grey", opacity:"0.8" }}>Original Price: ${slide.price}</span>
            <span className="lead SlideDiscountedPrice" style={{color: "red"}}>Sale Price: ${slide.discountedPrice}</span>
        </Link>
    );
    };

    const renderSlides = () => {
    const leftIndex = (currentSlide + slide.length - 1) % slide.length;
    const centerIndex = currentSlide % slide.length;
    const rightIndex = (currentSlide + 1) % slide.length;

    return (
        <div className="carousel-slides d-flex flex-wrap justify-content-center">
            {numSlides === 1 && renderSlide(slide[centerIndex], slide[centerIndex].id)}
            {numSlides === 3 && (
                <>
                {renderSlide(slide[leftIndex], slide[leftIndex].id)}
                {renderSlide(slide[centerIndex], slide[centerIndex].id)}
                {renderSlide(slide[rightIndex], slide[rightIndex].id)}
                </>
            )}
        </div>
    );
    };

    const handlePrevClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide + slide.length - 1) % slide.length);
    };

    const handleNextClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slide.length);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1300) {
            setNumSlides(1);
            } else {
            setNumSlides(3);
            }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center pt-4">
                <h2>FEATURED PRODUCTS</h2>
                <hr />
                </div>
            </div>
        </div>
        <div className="container d-flex justify-content-center my-5 py-5">
            <div style={{textDecoration:"none", width:"80vw"}}>
                {renderSlides()}
            </div>
            <div className="carousel-nav container">
                <button className="carousel-prev carousel-control-prev-icon" onClick={handlePrevClick}></button>
                <button className="carousel-next carousel-control-next-icon" onClick={handleNextClick}></button>
            </div>
        </div>
    </>
    );
};

export default CarouselSmaller;
