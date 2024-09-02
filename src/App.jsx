import React from 'react';
import ContactList from './components/ContactList/ContactList.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import './App.css'; 

const App = () => (
  <div className="container">
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>
);

export default App;
