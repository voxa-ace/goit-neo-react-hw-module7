import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contactsOps'; 
import { selectFilteredContacts } from '../../redux/contactsSlice'; 
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          <div className={styles.contactInfo}>
            <span className={styles.contactName}>{contact.name}</span>: 
            <span className={styles.contactNumber}>{contact.number}</span>
          </div>
          <button 
            className={styles.deleteButton} 
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
