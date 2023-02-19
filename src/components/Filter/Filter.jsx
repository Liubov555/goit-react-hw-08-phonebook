import React from "react";
import { Input, Label } from "./Filter.style";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contacts/filterSlice";
import { getFilter } from "redux/contacts/contacts-selector";

export const FilterContacts = () => {
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
                onChange={onChange}
                placeholder="Find contacts by name"
            />
        </Label>
    );
};




