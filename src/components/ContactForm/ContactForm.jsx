import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name is too short')
      .max(50, 'Name is too long'),
    number: Yup.string()
      .required('Number is required')
      .matches(/^[\d\+\-]+$/, 'Number must contain only digits, +, and -')
      .min(3, 'Number is too short')
      .max(50, 'Number is too long'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    const isDuplicate = contacts.some(contact => 
      contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      alert('Contact with this name already exists!');
    } else {
      dispatch(addContact(newContact));
      resetForm();
    }
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className={styles.inputField}>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" className={styles.errorMessage} />
            </div>
            <div className={styles.inputField}>
              <Field type="text" name="number" placeholder="Number" />
              <ErrorMessage name="number" component="div" className={styles.errorMessage} />
            </div>
            <button type="submit" className={styles.addButton}>Add Contact</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
