import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DATA from '../../Data';
import StarRating from '../StarRating';

const SearchBar = ({ showButton =true }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchResults = DATA.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    useEffect(() => {
        const handleEsc = (event) => {
        if (event.keyCode === 27) {
            setShowSearch(false);
            console.log("escape is pressed");
        }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    useEffect(() => {
        if (!showSearch) {
            setSearchTerm('');
        }
    }, [showSearch]);

    return (
        <div>
            {showButton && (
                <button className="fa fa-search btn btn-light btn-sm search-btn" onClick={toggleSearch}></button>
            )}

            {(showSearch || !showButton) && (
            <div className='overlay'>
                <div className="search-container">
                    <div className="d-flex jusify-content-center input-group">
                        <input
                        type="text"
                        className="form-control search-bar text-center"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search Products"
                        />
                        <button type="button" className="close pl-2 btn btn-light" onClick={toggleSearch} style={{width:"60px"}}>&times;</button>
                    </div>

                    {searchTerm && (
                        <div className="search-results">
                            {searchResults.length > 0 ? (
                                searchResults.map((item) => (
                                <Link
                                    onClick={toggleSearch}
                                    to={`/products/${item.id}`}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                    key={item.id}
                                >
                                    <div className="p-3 text-center list-unstyled d-flex flex-wrap justify-content-around search-result-item w-100">
                                        <img src={`${item.img}`} alt="search" height={70} />
                                        <h5 className="card-title align-self-center pt-2" style={{ width: '200px' }}>
                                            {item.title}
                                        </h5>
                                        <span className="align-self-center">
                                            <StarRating rating={item.rating} />
                                        </span>
                                        <h6
                                            className="align-self-center"
                                            style={{
                                            textDecoration: 'line-through',
                                            color: 'grey',
                                            opacity: '0.8',
                                            width: '156px',
                                            }}
                                        >
                                            Original Price: ${item.price}
                                        </h6>
                                        <h6 className="align-self-center" style={{ color: 'red', width: '140px' }}>
                                            Sale Price: ${item.discountedPrice}
                                        </h6>
                                    </div>
                                </Link>
                                ))
                            ) : (
                            <span className='d-flex justify-content-center py-5 my-5'>No results found</span>
                        )}
                        </div>
                    )}
                </div>
            </div>
            )}
        </div>
    );
};

export default SearchBar;
