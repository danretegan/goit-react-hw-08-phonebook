import React from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import SearchFilter from './searchFilter/SearchFilter';
import styles from './App.module.css';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/selectors';

const App = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts:</h2>
      <SearchFilter />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
