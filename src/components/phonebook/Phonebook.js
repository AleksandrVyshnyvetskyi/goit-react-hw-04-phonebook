import { useState } from 'react';
import { nanoid } from 'nanoid';

export function Phonebook({ onAddContacs }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSabmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
    };
    onAddContacs(contact);
    setName('');
    setNumber('');
  };

  let nameId = nanoid();
  let numberId = nanoid();

  return (
    <form className="phonebook__form" onSubmit={handleSabmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        type="text"
        name="name"
        id={nameId}
        value={name}
        onChange={handleChange}
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberId}>Number</label>
      <input
        type="tel"
        name="number"
        id={numberId}
        value={number}
        onChange={handleChange}
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className="submit-btn">
        Add contact
      </button>
    </form>
  );
}
