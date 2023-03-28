import React, { useEffect, useState } from "react";
import DATA from "../Data";
import Item from "./Item"; 
import "./../stylesheet/ColorRadioSelector.css";
import { Link } from "react-router-dom";

export default function StorePage() {

    const [productList, setProductList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();  
    const [selectedColour, setSelectedColour] = useState();
    const [priceRange, setPriceRange] = useState([0, 1200]);

    useEffect(() => {
        setProductList(DATA);
    }, []);

    const handlePriceChange = (event) => {
        setPriceRange([parseInt(event.target.value), priceRange[1]]);
    };

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    function handleColourChange(event) {
        setSelectedColour(event.target.value);
    }

    function getCategoryFilteredList() {
        if (!selectedCategory) {
            return productList;
        }
        return productList.filter((item) => item.category === selectedCategory);
    }

    const getPriceFilteredProducts = getCategoryFilteredList().filter(
    (product) => product.discountedPrice >= priceRange[0] && product.discountedPrice <= priceRange[1]
    );

    function getColourFilteredList() {
        if (!selectedColour) {
            return getPriceFilteredProducts;
        }
        return getPriceFilteredProducts.filter((item) => item.colour === selectedColour);
    }

    // function handleReset() {
    //   setSelectedCategory();
    //   setSelectedColour();
    //   setPriceRange([0, 1200]);
    // }

    function refreshPage() { window.location.reload(false); }

    return (
    <>
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-wrap justify-content-center" style={{width:"80%"}}>
                
                <div className="py-5 mx-3" style={{width:"260px"}}>  

                    {/****** Category Selector *********************************************************************/}
                    <h5 className="pt-1 pb-3">Filter by Category</h5>
                    <div className="btn-group-vertical w-100" role="group" aria-label="Vertical radio toggle button group"
                        name="category-list"
                        id="category-list"
                        onChange={handleCategoryChange} 
                    >
                        <input type="radio" className="btn-check" value={""} name="vbtn-radio" id="vbtn-radio1" style={{opacity:"0"}}/>
                            <label className="btn btn-light d-flex justify-content-between" htmlFor="vbtn-radio1">
                                <span>All</span><span>16</span>
                            </label>
                        <input type="radio" className="btn-check" value={"Phone"} name="vbtn-radio" id="vbtn-radio2" style={{opacity:"0"}}/>
                            <label className="btn btn-light d-flex justify-content-between" htmlFor="vbtn-radio2">
                                <span>Phones</span><span>3</span>
                            </label>
                        <input type="radio" className="btn-check" value={"Computer"} name="vbtn-radio" id="vbtn-radio3" style={{opacity:"0"}}/>
                            <label className="btn btn-light d-flex justify-content-between" htmlFor="vbtn-radio3">
                                <span>Computers</span><span>2</span>
                            </label>          
                        <input type="radio" className="btn-check" value={"Watch"} name="vbtn-radio" id="vbtn-radio4" style={{opacity:"0"}}/>
                            <label className="btn btn-light d-flex justify-content-between" htmlFor="vbtn-radio4">
                                <span>Watches</span><span>3</span>
                            </label>
                        <input type="radio" className="btn-check" value={"Accesory"} name="vbtn-radio" id="vbtn-radio5" style={{opacity:"0"}}/>
                            <label className="btn btn-light d-flex justify-content-between" htmlFor="vbtn-radio5">
                                <span>Accesories</span><span>7</span>
                            </label>
                    </div>
                    {/****** Price Silder *********************************************************************/}
                    <div className='pt-5 pb-3'>
                        <label  htmlFor="priceRange" className="py-3 display-5">Prices</label>
                        <div className="d-flex justify-content-between">
                            <span>min</span>
                            <span>max</span>
                        </div> 
                        <div className="d-flex justify-content-between text-secondary p-3 border rounded">
                            <input
                            className="w-50"
                                type="range"
                                id="priceRange"
                                name="priceRange"
                                min="0"
                                max="1200"
                                value={priceRange[0]}
                                onChange={handlePriceChange}
                            />
                            <input
                                className="w-50"
                                type="range"
                                id="priceRange"
                                name="priceRange"
                                min="0"
                                max="1200"
                                value={priceRange[1]}
                                onChange={(event) => setPriceRange([priceRange[0], parseInt(event.target.value)])}
                            />
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                        </div> 
                    </div>
                    {/****** Colour Selector *********************************************************************/}
                    <div className="color-selector"> 
                        <h5 className="pb-3 pt-5">Colour</h5>
                        <div className="row justify-content-around w-100" onChange={handleColourChange}>
                            <label className="radio-container">
                                <input type="radio" name="Radio-Inline" value={"RoseGold"}/>
                                <span className="checkmark1 checkmark"></span> 
                            </label>
                            <label className="radio-container">
                                <input type="radio" name="Radio-Inline" value={"Silver"}/>
                                <span className="checkmark2 checkmark"></span>
                            </label>
                            <label className="radio-container">
                                <input type="radio" name="Radio-Inline" value={"Black"}/>
                                <span className="checkmark3 checkmark"></span>
                            </label>
                            <label className="radio-container">
                                <input type="radio" name="Radio-Inline" value={"Blue"}/>
                                <span className="checkmark4 checkmark"></span>
                            </label>
                            <label className="radio-container">
                                <input type="radio" name="Radio-Inline" value={"White"}/>
                                <span className="checkmark5 checkmark"></span>
                            </label>        
                            <label className="radio-container">
                                <input type="radio" name="Radio-Inline" value={"Green"}/>
                                <span className="checkmark6 checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <button className="btn btn-light my-5 w-100 border" onClick={refreshPage}> Reset Filters</button>
                </div>


                {/**************iPHONE BANNER****************************** */}
                <div className="w-75 d-flex flex-column align-content-center">  
                    <div className="StorePage" style={{backgroundColor:"#2E90E5"}}>
                        <div className="container row align-items-center">
                            <div className="col"></div>
                                <div className="IphoneText2 col-7 text-light">
                                    <p className='TextTitle2'>iPhone 6</p>
                                    <p className='TextBody2'>Performance and design. Taken<br/> right to the edge.</p>
                                    <Link to='/products/4' className='ShopNow' style={{ textDecoration: 'none', color: 'white' }} ><u>SHOP NOW</u></Link>
                                </div>    
                            <img src="/assets/images/home/iphone.png" className="col-4" height="350px" alt="IPhone"/>
                        </div>
                    </div>
                    
                    {/******************Item Cards******************************* */}
                    <div className="d-flex flex-wrap justify-content-start mt-4" id="content-list" style={{minHeight:"900px"}}>
                        {getColourFilteredList().map((element, item) => (
                            <Item {...element} key={element.id} />
                        ))}
                    </div>
                </div>      
            </div>
        </div>

        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled"><Link class="page-link" tabindex="-1">Previous</Link></li>
                <li class="page-item disabled"><Link class="page-link">1</Link></li>
                <li class="page-item disabled"><Link class="page-link">2</Link></li>
                <li class="page-item disabled"><Link class="page-link">3</Link></li>
                <li class="page-item disabled"><Link class="page-link">Next</Link></li>
            </ul>
        </nav>
        </> 
  );
}