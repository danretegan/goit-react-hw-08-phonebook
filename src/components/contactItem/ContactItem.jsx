import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';
import Button from '../Button';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.item}>
      <li>
        <strong>{contact.name}</strong>: <br /> {contact.phone}
      </li>
      <Button action={handleDeleteContact}>Delete</Button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
  }).isRequired,
};

export default ContactItem;
