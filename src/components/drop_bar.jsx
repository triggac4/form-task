import React from "react";

const DropBar = ({ onChange, name, options }) => {
    function change(e) {
        //e.target.value
        onChange(e);
    }
    const OptionsJsx = options.map((e, index) => {
        return (
            <option key={index} value={e} className="drop-bar__option">
                {e}
            </option>
        );
    });
    return (
        <div className="drop-bar input-padding">
            <label className="drop-bar__label" htmlFor={name}>
                {name}
            </label>
            <select
                id={name}
                className="drop-bar__main"
                name={name}
                onChange={change}
            >
                {OptionsJsx}
            </select>
        </div>
    );
};

export default DropBar;
