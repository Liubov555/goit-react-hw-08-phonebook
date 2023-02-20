import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContactList } from "components/ContactList/ContactList";
import ContactForm from "components/ContactForm/ContactForm";
import FilterContacts from "components/Filter/Filter";
import { fetchContacts } from "redux/contacts/operations";
import { getIsLoading } from "redux/contacts/contacts-selector";

import { Div } from './Contacts.styled';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Div>
            <title>Your Contacts</title>
            <ContactForm />
            <FilterContacts />
            {isLoading || <ContactList />}
        </Div>
    )
}