import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';
 
function ContactApp() {
 const contacts = getData();
 
 return (
   <div className="contact-app">
     <h1>List Contact</h1>
     <ContactList contacts={contacts} />
   </div>
 );
}
 
 
export default ContactApp;