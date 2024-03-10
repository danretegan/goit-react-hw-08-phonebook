import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../contactItem/ContactItem';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/contacts-operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors';
import {
  ContactListContainer,
  ListLabel,
  ListItem,
  ErrorMessage,
  StyledParagraph,
} from './ContactList.styled';
import { Loader } from 'components/Loader';

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
    <ContactListContainer>
      {isLoading && <Loader />}{' '}
      {!isLoading && !error && (
        <ListLabel>
          {contacts && contacts.length > 0 ? (
            contacts.map(contact => (
              <ListItem key={contact.id}>
                <ContactItem
                  contact={contact}
                  onDeleteContact={handleDeleteContact}
                />
              </ListItem>
            ))
          ) : (
            <StyledParagraph>No contacts available.</StyledParagraph>
          )}
        </ListLabel>
      )}
      {error && (
        <ErrorMessage>An error occurred while fetching contacts.</ErrorMessage>
      )}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
