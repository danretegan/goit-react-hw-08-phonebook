import React, { useEffect } from 'react';
import styles from './ContactList.module.css';
import ContactItem from '../contactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors';
import PropTypes from 'prop-types';
import { Loader } from '../loader/loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}{' '}
      {/* Afișează Loader-ul doar dacă isLoading este true */}
      {!isLoading && !error && (
        <ul className={styles.label}>
          {contacts && contacts.length > 0 ? (
            contacts.map(contact => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDeleteContact={handleDeleteContact}
              />
            ))
          ) : (
            <p>No contacts available.</p>
          )}
        </ul>
      )}
      {error && (
        <p style={{ color: 'red' }}>
          An error occurred while fetching contacts.
        </p>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
