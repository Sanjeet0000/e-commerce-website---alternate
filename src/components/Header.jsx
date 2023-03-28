import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import CurrencyDropdown from './buttons/CurrencyDropdown'
import LanguageDropdown from './buttons/LanguageDropdown'
import './../stylesheet/header.css'
import HoverMenu from './HoverMenu'
import GoToTop from '../GoToTop'
import MyAccount from './buttons/MyAcoount'
import SearchBar from './buttons/SearchBar'
import HamburgerMenu from './buttons/HamburgerBtn'

const Header = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 560)

    useEffect(() => {
        const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 560)
      }
  
        window.addEventListener('resize', handleResize)
  
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
    <>
        <GoToTop>
            {isSmallScreen ? (
                <HamburgerMenu />
                ) : (
                <>
                    <nav className="MainNavBar navbar">
                        <div className="NavBar-Left">
                            <LanguageDropdown/>
                            <CurrencyDropdown/>
                        </div>
                        <div className="NavBar-Right">
                            <MyAccount/>
                            <CartBtn/>
                            <SearchBar/>
                        </div>
                    </nav> 

                    <Link className="title" to="/" style={{textDecoration: 'none', color: "red"}}>iSHOP</Link>

                    <ul className="NavMenu">
                        <li className="Nav-item">
                            <Link to="/" className='nav-item-underline'>HOME</Link>
                        </li>
                        <li className="Nav-item">
                            <Link to="/store"><HoverMenu/></Link>
                        </li>
                        <li className="Nav-item">
                            <Link to="/store"  className='nav-item-underline'>IPHONE</Link>
                        </li>
                        <li className="Nav-item">
                            <Link to="/store" className='nav-item-underline'>IPAD</Link>
                        </li>
                        <li className="Nav-item">
                            <Link to="/store" className='nav-item-underline'>MACBOOK</Link>
                        </li>
                        <li className="Nav-item">
                            <Link to="/store" className='nav-item-underline'>ACCESORIES</Link>
                        </li>
                    </ul>  
                </>
                ) }  
        </GoToTop> 
    </>
    )
}

export default Header
