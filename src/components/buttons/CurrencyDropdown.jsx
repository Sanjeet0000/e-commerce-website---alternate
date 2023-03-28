import React, { useState } from 'react';

function CurrencyDropdown() {
    const [selectedCurrency, setSelectedCurrency] = useState('usd');

    function handleCurrencyChange(event) {
        const currency = event.target.value;
        setSelectedCurrency(currency);
    }

    return (
    <div className="currency-dropdown">
        <label htmlFor="currency-select"></label>
        <select className="currency-select btn btn-light btn-sm font-weight-bold" value={selectedCurrency} onChange={handleCurrencyChange}>
            <option value="usd">$</option>
            <option value="eur">€</option>
            <option value="inr">₹</option>
            <option value="bitcoin">₿</option>
            <option value="ruble">₽</option>
        </select>
    </div>
    );
}

export default CurrencyDropdown;
