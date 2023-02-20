import React from "react";
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/contacts/contacts-selector";

import { List } from "./ContactList.style";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getFindContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const getFindContact = getFindContacts();

    return (
        <List>
            {getFindContact.map(contact => (
                <ContactsItem contact={contact} key={contact.id} />
            ))}
        </List>
    );
};
