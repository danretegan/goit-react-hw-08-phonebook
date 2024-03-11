import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  deleteContact,
  editContact,
} from '../../redux/contacts/contacts-operations';
import { Modal, Input, Button, message, Popconfirm } from 'antd';
import {
  ContactItems,
  ContactName,
  ContactNumber,
  EditButton,
  DeleteButton,
} from './ContactItem.styled';
import { handleNameInput, handleNumberInput } from '../handleInput';

function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(contact.name);
  const [newNumber, setNewNumber] = useState(contact.number);

  const confirm = e => {
    handleDelete(e.target.value);
    message.error(
      `Contact "${contact.name}" with number "${contact.number}" was deleted!`
    );
  };
  const cancel = e => {
    console.log(e);
    message.success(
      `Contact "${contact.name}" with number "${contact.number}" is kept!`
    );
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    setShowModal(false);
    dispatch(editContact({ id: contact.id, name: newName, number: newNumber }));
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <ContactItems>
      <ContactName>{contact.name}</ContactName>
      <ContactNumber href={`tel:${contact.number}`}>
        {contact.number}
      </ContactNumber>
      <EditButton onClick={handleEdit}>Edit</EditButton>
      <Popconfirm
        title="Delete contact"
        description="Are you sure you want to delete this contact?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <DeleteButton>Delete</DeleteButton>
      </Popconfirm>

      <Modal
        open={showModal}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="save" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <div>
          <label>Edit name:</label>
          <Input
            type="text"
            value={newName}
            onChange={evt => handleNameInput(evt, setNewName)}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
          />
          <label>Edit phone number:</label>
          <Input
            type="text"
            value={newNumber}
            onChange={e => handleNumberInput(e, setNewNumber)}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
      </Modal>
    </ContactItems>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
