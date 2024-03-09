import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import ContactItem from '../contactItem/ContactItem';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slices/contactsSlice';

const ContactList = ({ contacts }) => {
  console.log('Contacts in ContactList:', contacts);

  const dispatch = useDispatch();
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={styles.container}>
      <ul className={styles.label}>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={handleDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
