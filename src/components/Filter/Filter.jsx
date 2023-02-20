import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contacts/filterSlice";
import { getFilter } from "redux/contacts/contacts-selector";

import { Input, Label } from "./Filter.style";

const FilterContacts = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const onChange = evt => {
        dispatch(setFilter(evt.target.value));
    };

    return (
        <Label>
            <Input
                type="text"
                name={filter}
                value={filter}
                onChange={onChange}
                placeholder="Find contacts by name"
            />
        </Label>
    );
};

export default FilterContacts;


