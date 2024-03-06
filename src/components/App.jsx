import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import MainHeading from './MainHeading/MainHeading';
import Notification from './Notification/Notification';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    let localContacts = [];
    try {
      localContacts = JSON.parse(localStorage.getItem('contacts'));
    } catch (error) {
      console.error('Error: ', error);
    }

    if (localContacts?.length > 0) {
      setContacts(localContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts?.length > 0) {
      console.log('Local storage changed');
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      const localContacts = localStorage.getItem('contacts');
      console.log(localContacts);

      if (localContacts !== null) {
        console.log('Remove from local storage');
        localStorage.removeItem('contacts');
      }
    }
  }, [contacts]);

  const handleFilter = filter => {
    setFilter(filter);
  };

  const handleFormSubmit = (name, number) => {
    const nameContacts = contacts.map(contact => contact.name.toLowerCase());

    nameContacts.indexOf(name.toLowerCase()) !== -1
      ? alert(`${name} is already in contacts.`)
      : setContacts(previousContacts => [
          ...previousContacts,
          {
            id: nanoid(),
            name,
            number,
          },
        ]);
  };

  const handleDeleteContact = name =>
    setContacts(previousContacts =>
      previousContacts.filter(contact => contact.name !== name)
    );

  return (
    <>
      <MainHeading>Phonebook App</MainHeading>
      <Section title="Phonebook">
        <ContactForm onHandleSubmit={handleFormSubmit} />
      </Section>
      <Section title="Contacts">
        {contacts.length === 0 ? (
          <Notification message="No contacts in phonebook" />
        ) : (
          <>
            <Filter filter={filter} onHandleFilter={handleFilter} />
            <ContactList
              contacts={contacts}
              filter={filter}
              onHandleDeleteContact={handleDeleteContact}
            />
          </>
        )}
      </Section>
    </>
  );
};

export default App;
