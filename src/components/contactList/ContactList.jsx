import React, { useEffect } from 'react';
import ContactItem from '../contactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/contacts-operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors';
import PropTypes from 'prop-types';
import {
  Container as ListContainer,
  Label as ListLabel,
  ListItem as ListItems,
  ErrorMessage as ErrorMsg,
  ContactListContainer,
} from './ContactList.styled';

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
      {!isLoading && !error && (
        <ListContainer>
          <ListLabel>
            {contacts && contacts.length > 0 ? (
              contacts.map(contact => (
                <ListItems key={contact.id}>
                  <ContactItem
                    contact={contact}
                    onDeleteContact={handleDeleteContact}
                  />
                </ListItems>
              ))
            ) : (
              <p>No contacts available.</p>
            )}
          </ListLabel>
        </ListContainer>
      )}
      {error && <ErrorMsg>An error occurred while fetching contacts.</ErrorMsg>}
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
