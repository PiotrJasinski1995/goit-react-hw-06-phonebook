import PropTypes from 'prop-types';
import { ContactStyled } from './styled';

const Contact = ({ name = '', number = '', onHandleDeleteContact }) => {
  const handleDeleteContact = () => {
    onHandleDeleteContact(name);
  };

  return (
    <ContactStyled>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </ContactStyled>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onHandleDeleteContact: PropTypes.func,
};

export default Contact;
