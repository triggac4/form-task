import React from "react";
import searchLogo from "../assets/svg/search.svg";

const SearchBar = ({ onChange, onClick }) => {
    function change(e) {
        onChange(e.target.value);
    }
    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-bar__textfield"
                placeholder="search template"
                onChange={change}
            />
            <button className="search-bar__button btn" onClick={onClick}>
                <img
                    src={searchLogo}
                    className="search-bar__img"
                    alt="search-icon"
                />
            </button>
        </div>
    );
};

export default SearchBar;
