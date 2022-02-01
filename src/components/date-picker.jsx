import React from "react";

const DatePicker = ({ onChange, name }) => {
    function change(e) {
        console.log(e.target.value);
        onChange(e);
    }
    return (
        <div className="date-picker input-padding">
            <label className="date-picker__label" htmlFor={name}>
                {name}
            </label>
            <input
                id={name}
                className="date-picker__main"
                name={name}
                type="date"
                onChange={change}
            />
        </div>
    );
};

export default DatePicker;
