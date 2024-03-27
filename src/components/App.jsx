import { useState, useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import css from './App.module.css'

const CONTACTS_STORAGE = "contacts_storage";

const App = () => {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(CONTACTS_STORAGE)) ?? [];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(CONTACTS_STORAGE, JSON.stringify(contacts));
  }, [contacts])

  const addContact = (newContact) => {
    setContacts(prev => {
      return [
        ...prev,
        newContact
      ]
    })
  };

  const deleteContact = (contactId) => {
    setContacts(prev => {
      return prev.filter(contact => contact.id !== contactId);
    });
  }

  const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  )
}

export default App
