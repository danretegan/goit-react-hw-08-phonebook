import React, { useState } from 'react';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { selectContacts } from '../../redux/selectors';
import {
  Container as FormContainer,
  Label as FormLabel,
  Input as FormInput,
} from './ContactForm.styled';
import { handleNameInput, handleNumberInput } from '../handleInput';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleAddButtonClick = () => {
    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const numberExists = contacts.some(contact => contact.number === number);

    if (nameExists) {
      alert(`${name} is already in contacts!`);
    } else if (numberExists) {
      alert(`${number} is already in contacts!`);
    } else if (name.trim() !== '' && number.trim() !== '') {
      dispatch(
        addContact({
          name: name,
          number: number,
        })
      );
      setName('');
      setNumber('');
    }
  };

  return (
    <FormContainer>
      <FormLabel>
        Name:
        <FormInput
          type="text"
          name="name"
          placeholder="Name and surname"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={evt => handleNameInput(evt, setName)}
        />
      </FormLabel>

      <FormLabel>
        Number:
        <FormInput
          type="tel"
          name="number"
          placeholder="Telephone number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => handleNumberInput(e, setNumber)}
        />
      </FormLabel>

      <Button type="button" action={handleAddButtonClick}>
        Add contact
      </Button>
    </FormContainer>
  );
};

export default ContactForm;
