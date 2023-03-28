import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartBtn from './CartBtn';
import CurrencyDropdown from './CurrencyDropdown';
import LanguageDropdown from './LanguageDropdown';
import MyAccount from './MyAcoount';
import SearchBar from './SearchBar';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    return (
    <>
        <div className='hamburger-container'>
            <div className="hamburger-icon" onClick={toggleMenu} style={{transition: "transform 0.3s ease-in-out"}}>
            <div className={`line1 ${isOpen ? "line-1" : ""}`} />
            <div className={`line2 ${isOpen ? "line-2" : ""}`} />
            <div className={`line3 ${isOpen ? "line-3" : ""}`} />
            <div className={`line4 ${isOpen ? "line-4" : ""}`} />
            </div>
        </div>
        <Link className="hamburger-title" to="/" style={{textDecoration: 'none', color: "red"}}>
            iSHOP
        </Link>

        {isOpen && (
            <div>
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 border-bottom mx-2 z-3">
                    <div>
                    <CartBtn/>
                    </div>
                    <div>
                    <MyAccount/>
                    </div>
                    <div>
                    <LanguageDropdown/>
                    </div>
                    <div>
                    <CurrencyDropdown/> 
                    </div>  
                    <div>
                    <SearchBar/>      
                    </div>
                </div>  
            
                <ul className="NavMenu2 list-unstyled" style={{backgroundImage:"linear-gradient(to top right, #e2203e 10%, #e41f69 20%, #e8435f 30%, #e8465d 45%, #b8577c 60%, #8f5e99 80%, #5d66be 90%)"}}>
                    <li className="Nav-item">
                        <Link to="/" className='btn text-light w-100 p-3'>
                            HOME
                        </Link>
                    </li>
                    <li className="Nav-item">
                        <Link to="/store"  className='btn text-light w-100 p-3'>STORE</Link>
                    </li>
                    <li className="Nav-item">
                        <Link to="/store"  className='btn text-light w-100 p-3'>IPHONE</Link>
                    </li>
                    <li className="Nav-item">
                        <Link to="/store" className='btn  text-light w-100 p-3'>IPAD</Link>
                    </li>
                    <li className="Nav-item">
                        <Link to="/store" className='btn text-light w-100 p-3'>MACBOOK</Link>
                    </li>
                    <li className="Nav-item">
                        <Link to="/store" className='btn text-light w-100 p-3'>ACCESORIES</Link>
                    </li>
                </ul>
            </div>
        )}
    </>
    );
};

export default HamburgerMenu;
