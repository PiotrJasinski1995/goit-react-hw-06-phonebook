import PropTypes from 'prop-types';
import { ContactStyled } from './styled';

const Contact = ({
  id = '',
  name = '',
  number = '',
  onHandleDeleteContact,
}) => {
  const handleDeleteContact = () => {
    onHandleDeleteContact(id);
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
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onHandleDeleteContact: PropTypes.func,
};

export default Contact;
