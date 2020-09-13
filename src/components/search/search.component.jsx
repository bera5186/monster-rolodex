import React from 'react';
import './search.styles.css';

export const Search = ({ placeholder, handleChange }) => {
    return (
        <div>
            <input
                type="search"
                className="search"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}
