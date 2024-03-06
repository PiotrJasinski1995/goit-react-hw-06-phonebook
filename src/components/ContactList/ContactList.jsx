import Contact from 'components/Contact/Contact';
import Notification from 'components/Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    if (!filter) return contacts;

    return contacts.filter(contact => {
      const { name } = contact;
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      {filteredContacts.length === 0 ? (
        <Notification message="No contacts matching given criteria"></Notification>
      ) : (
        <ul>
          {filteredContacts.map(contact => {
            const { id, name, number } = contact;

            return (
              <li key={id}>
                <Contact
                  id={id}
                  name={name}
                  number={number}
                  onHandleDeleteContact={handleDeleteContact}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;
