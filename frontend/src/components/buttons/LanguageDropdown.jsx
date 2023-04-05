import React, { useState } from 'react';

function LanguageDropdown() {
  const [selectedLanguage, setSelectedlanguage] = useState('EN');

  function handleLanguageChange(event) {
    const language = event.target.value;
    setSelectedlanguage(language);
  }

  return (
    <div className="language-dropdown ">
        <select className="language-select btn btn-light btn-sm font-weight-bold" value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="english">EN</option>
            <option value="spanish">ES</option>
            <option value="hindi">HI</option>
        </select>
    </div>
  );
}

export default LanguageDropdown;
