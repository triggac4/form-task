import React from "react";
import SearchBar from "../components/search_bar";
import DropBar from "../components/drop_bar";
import DatePicker from "../components/date-picker";

const FilterSection = () => {
    return (
        <div className="filter-section">
            <SearchBar onChange={() => {}} onClick={() => {}}></SearchBar>
            <div className="filter-section__drop-bars">
                <DropBar
                    name={"category"}
                    onChange={() => {}}
                    options={["first", "second", "third"]}
                />
                <DropBar
                    name={"order"}
                    onChange={() => {}}
                    options={["first", "second", "third"]}
                />
                <DatePicker name="date" onChange={() => {}} />
            </div>
        </div>
    );
};

export default FilterSection;
