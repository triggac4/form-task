import React from "react";

const DropBar = ({ onChange, name, options }) => {
    function change(e) {
        onChange(e.selectedIndex);
    }
    const OptionsJsx = options.map((e, index) => {
        return (
            <option value={e} className="drop-bar__option">
                {e}
            </option>
        );
    });
    return (
        <select className="drop-bar" name={name} onChange={change}>
            {OptionsJsx}
        </select>
    );
};

export default DropBar;
