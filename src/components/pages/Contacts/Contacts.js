import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContactList } from "components/ContactList/ContactList";
import ContactForm from "components/ContactForm/ContactForm";
import { FilterContacts } from "components/Filter/Filter";
import { fetchContacts } from "redux/contacts/operations";
import { getIsLoading } from "redux/contacts/contacts-selector";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <h3>Your Contacts</h3>
            <ContactForm />
            <FilterContacts />
            {isLoading || <ContactList />}
        </div>
    )
}