import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';
import Button from '../Button';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slices/contactsSlice';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.item}>
      <li>
        <strong>{contact.name}</strong>: <br /> {contact.number}
      </li>
      <Button action={handleDeleteContact}>Delete</Button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
