import { HiUserRemove } from 'react-icons/hi'
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

import { Item, Button } from './ContactsItem.styled';

export const ContactsItem = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));
    return (
        <Item>
            {contact.name}: {contact.number}
            <Button onClick={handleDelete}>
                <HiUserRemove size={15} />
            </Button>
        </Item>
    );
};