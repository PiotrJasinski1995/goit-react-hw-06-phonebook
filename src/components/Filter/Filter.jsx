import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterStyled } from './styled';

const Filter = ({ filter = '', onHandleFilter }) => {
  const filterInputId = nanoid();

  const handleFilter = event => {
    const filter = event.target.value;
    onHandleFilter(filter);
  };

  return (
    <FilterStyled>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id={filterInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Filter field may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleFilter}
        autoComplete="off"
        value={filter}
        required
      />
    </FilterStyled>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onHandleFilter: PropTypes.func,
};

export default Filter;
