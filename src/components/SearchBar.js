import React from 'react'

const SearchBar = () => {
  return (
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
            <button className="search-button">
                <img src='https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png'/>
            </button>
    </div>
  )
}

export default SearchBar