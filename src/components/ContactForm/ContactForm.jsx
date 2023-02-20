import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { addContact } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectAllContacts } from "redux/contacts/contacts-selector";
import { HiUserAdd } from "react-icons/hi";

import { Form, Label, Input, FormButton } from "./ContactForm.styles";


export default function ContactForm() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const nameId = nanoid();
    const phoneId = nanoid();

    const contacts = useSelector(selectAllContacts);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const { name, value } = evt.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'phone':
                setPhone(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const newContact = {
            name,
            phone,
            id: nanoid()
        };

        const checkContact = contacts.some(contact =>
            contact.name.toLowerCase() === name.toLowerCase()
        );

        checkContact ?
            alert(`${name} is already in contacts`)
            : dispatch(addContact(newContact));

        resetSubmit();
    };

    const resetSubmit = () => {
        setName('');
        setPhone('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor={nameId} >
                Name:
                <Input
                    id={nameId}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Label>
            <Label htmlFor={phoneId}>
                Number:
                <Input
                    id={phoneId}
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </Label>
            <FormButton type="submit">
                <HiUserAdd size={15} />
            </FormButton>
        </Form>
    );
};


ContactForm.prototypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
}