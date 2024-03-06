import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContactFormStyled } from './styled';

const ContactForm = ({ onHandleSubmit }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleFormSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    onHandleSubmit(name, number);
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

ContactForm.propTypes = {
  onHandleSubmit: PropTypes.func,
};

export default ContactForm;
