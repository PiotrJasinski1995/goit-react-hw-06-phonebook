import { ContactFormStyled } from './styled';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

const ContactForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const nameContacts = contacts.map(contact => contact.name.toLowerCase());

    nameContacts.indexOf(name.toLowerCase()) !== -1
      ? alert(`${name} is already in contacts.`)
      : dispatch(
          addContact({
            id: nanoid(),
            name,
            number,
          })
        );
  };

  return (
    <ContactFormStyled onSubmit={handleFormSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        type="text"
        name="name"
        id={nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        autoComplete="off"
        required
      />
      <label htmlFor={numberInputId}>Number</label>
      <input
        type="tel"
        name="number"
        id={numberInputId}
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        autoComplete="off"
        required
      />
      <button type="submit">Add contact</button>
    </ContactFormStyled>
  );
};

export default ContactForm;
