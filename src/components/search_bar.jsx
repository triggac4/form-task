import React from "react";
import searchLogo from "../assets/svg/search.svg";

const SearchBar = ({ onChange, onClick, name }) => {
    function change(e) {
        onChange(e);
    }
    function keydown(e) {
        if (e.key === "Enter") {
            onChange(e);
            onClick();
        }
    }
    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-bar__textfield"
                placeholder="search template"
                onChange={change}
                name={name}
                onKeyPress={keydown}
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
