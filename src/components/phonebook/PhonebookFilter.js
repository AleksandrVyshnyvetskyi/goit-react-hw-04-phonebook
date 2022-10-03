import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const filterId = nanoid(5);

export const PhonebookFilter = ({ onChange, value }) => {
  return (
    <form className="phonebook__form">
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        autoComplete="off"
        id={filterId}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </form>
  );
};

PhonebookFilter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
