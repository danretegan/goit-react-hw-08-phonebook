import React, { useState } from 'react';
import Button from '../Button';
import styles from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleNameChange = evt => {
    const newTextValue = evt.target.value.replace(/[^a-zA-Z\s'-]/g, '');
    setName(newTextValue);
  };

  const handlePhoneChange = e => {
    const newPhoneValue = e.target.value.replace(
      /[^+\d\s().-]|^[\s().-]+|(?<=\d)[+]|\b[+]\b/g,
      ''
    );
    setPhone(newPhoneValue);
  };

  const handleAddButtonClick = () => {
    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const phoneExists = contacts.some(contact => contact.phone === phone);

    if (nameExists) {
      alert(`${name} is already in contacts!`);
    } else if (phoneExists) {
      alert(`${phone} is already in contacts!`);
    } else if (name.trim() !== '' && phone.trim() !== '') {
      dispatch(
        addContact({
          name: name,
          phone: phone,
        })
      );
      setName('');
      setPhone('');
    }
  };

  return (
    <form className={styles.container}>
      <label className={styles.label}>
        Name:
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name and surname"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label className={styles.label}>
        Phone:
        <input
          className={styles.input}
          type="tel"
          name="phone"
          placeholder="Telephone number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handlePhoneChange}
        />
      </label>

      <Button type="button" action={handleAddButtonClick}>
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
