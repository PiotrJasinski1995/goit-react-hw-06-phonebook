import { FilterStyled } from './styled';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const filterInputId = nanoid();
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    const filter = event.target.value;
    dispatch(changeFilter(filter));
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

export default Filter;
