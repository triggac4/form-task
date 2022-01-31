import React from "react";

const SearchBar = () => {
    function onChange() {}
    return (
        <input
            type="text"
            className="new-tweet__textfield"
            placeholder={"What's happening?"}
            onChange={onChange}
        />
    );
};

export default SearchBar;
