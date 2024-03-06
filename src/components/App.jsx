import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import MainHeading from './MainHeading/MainHeading';
import Notification from './Notification/Notification';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);

  const setLocaleStorage = () => {
    if (contacts?.length > 0) {
      console.log('Local storage changed');
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      const localContacts = localStorage.getItem('contacts');

      if (localContacts !== null) {
        console.log('Remove from local storage');
        localStorage.removeItem('contacts');
      }
    }
  };

  setLocaleStorage();

  return (
    <>
      <MainHeading>Phonebook App</MainHeading>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length === 0 ? (
          <Notification message="No contacts in phonebook" />
        ) : (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </Section>
    </>
  );
};

export default App;
