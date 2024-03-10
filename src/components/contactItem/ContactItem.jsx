import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';
import Button from '../Button';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.item}>
      <p>
        <strong>{contact.name}</strong>: <br /> {contact.number}
      </p>
      <Button action={handleDeleteContact}>Delete</Button>
      <Button>Edit</Button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  }).isRequired,
};

export default ContactItem;
