import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../components/search_bar";
import DropBar from "../components/drop_bar";
import DatePicker from "../components/date-picker";
import NoteFile from "../components/note_file";
import TemplatesClass from "../utils/templates";

const FilterSection = () => {
    const [sortValues, setSort] = useState({
        name: "",
        category: "",
        created: "",
    });

    const dispatchFilter = useDispatch();
    const allTemplate = useSelector((state) => state);
    function onChange(e) {
        setSort({ ...sortValues, [e.target.name]: e.target.value });
    }
    function onSubmit() {
        const result = TemplatesClass.filterTemplates(
            allTemplate.All_items,
            dispatchFilter,
            sortValues
        );
        console.log(result);
    }
    function onChangeForDrop(e) {
        onChange(e);
        onSubmit();
    }
    return (
        <div className="filter-section">
            <SearchBar
                name="name"
                onChange={onChange}
                onClick={onSubmit}
            ></SearchBar>
            <div className="filter-section__drop-bars">
                <span className="filter-section__sort-By">{"sort by:"}</span>
                <DropBar
                    name={"category"}
                    onChange={onChangeForDrop}
                    options={["All", "Health", "E-commerce", "Education"]}
                />
                <DropBar
                    name={"order"}
                    onChange={onChange}
                    options={["first", "second", "third"]}
                />
                <DatePicker name="createdzzz" onChange={onChange} />
            </div>
            <div className="filter-section__note">
                <NoteFile />
            </div>
        </div>
    );
};
//date-picker name changed so it wouldn't affect filter result
export default FilterSection;
