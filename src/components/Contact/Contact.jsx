import React from 'react';
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactDetails}>
        <div className={styles.contactName}>{contact.name}</div>
        <div className={styles.contactNumber}>{contact.number}</div>
      </div>
      <button 
        className={styles.deleteButton} 
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
