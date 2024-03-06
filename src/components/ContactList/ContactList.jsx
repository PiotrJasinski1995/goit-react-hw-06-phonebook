import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import Notification from 'components/Notification/Notification';

const ContactList = ({ contacts = [], filter = '', onHandleDeleteContact }) => {
  const getFilteredContacts = () => {
    if (!filter) return contacts;

    return contacts.filter(contact => {
      const { name } = contact;
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const handleDeleteContact = name => {
    onHandleDeleteContact(name);
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

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onHandleDeleteContact: PropTypes.func,
};

export default ContactList;
