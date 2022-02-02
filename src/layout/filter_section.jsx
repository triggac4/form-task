import React from "react";
import SearchBar from "../components/search_bar";
import DropBar from "../components/drop_bar";
import DatePicker from "../components/date-picker";
import NoteFile from "../components/note_file";

const FilterSection = () => {
    return (
        <div className="filter-section">
            <SearchBar onChange={() => {}} onClick={() => {}}></SearchBar>
            <div className="filter-section__drop-bars">
                <span className="filter-section__sort-By">{"sort by:"}</span>
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
            <div className="filter-section__note">
                <NoteFile />
            </div>
        </div>
    );
};

export default FilterSection;
