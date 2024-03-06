import PropTypes from 'prop-types';
import { SectionStyled } from './styled';

const Section = ({ title = '', children }) => {
  return (
    <SectionStyled>
      <h2>{title}</h2>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
