import { Helmet, HelmetProvider } from 'react-helmet-async';

import ContactForm from '../components/contactForm/ContactForm';
import ContactList from '../components/contactList/ContactList';
import Filter from '../components/searchFilter/SearchFilter';

function Contacts() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <ContactForm />
        <h2>Contacts:</h2>
        <Filter />
        <ContactList />
      </HelmetProvider>
    </>
  );
}

export default Contacts;
