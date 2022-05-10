import { useState, useEffect } from 'react';
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContacts from './AddContact';
// https://www.youtube.com/watch?v=kvJLiKLOPtk


function App() {
  // const { v4: uuidv4 } = require('uuid');
  const [contacts , setContact] = useState([]);
  // KEY to the local storage set item
  const KEY = "contacts"; 
  const addContactHandler = (contact)=>{
    console.log(contact);
    setContact([...contacts, {id: uuidv4(), ...contact}]);
  };

  // implimenting delete function.
  const  removeContactHandler = (id) =>{
const newContactList = contacts.filter((contact) =>{
  return contact.id !==id;
});
  setContact(newContactList);
  }

    // I am trying to make the data persistent by storing it in a local storage

    //Am now accessing it here after storing it.
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(KEY));
    if (retriveContacts) setContact(retriveContacts);
  }, []);

// I Tried to store the contacts here first to the local storage
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
      <div className="ui container">
          <Header />
          <AddContacts  addContactHandler={addContactHandler}/>
          <ContactList contactlist={contacts}  getContactId={removeContactHandler}/>
      </div>
  );
}

export default App;
